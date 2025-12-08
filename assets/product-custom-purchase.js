/*
 * product-custom-purchase.js
 * ----------------------------------------------------------------------
 * VERSIÓN DE DIAGNÓSTICO FINAL: Se agregó la lógica del título y se 
 * reforzó el diagnóstico de referencias del footer (.total-save).
 */

console.log("🐛 [INIT] Ejecutando script product-custom-purchase.js");

// Función de utilidad para formatear el precio (Mantenida)
window.Shopify = window.Shopify || {};
window.Shopify.formatMoney = window.Shopify.formatMoney || function(cents, format = "{{ amount }}") {
    if (typeof cents === 'string') cents = cents.replace('.', '');
    
    const amount = cents / 100;
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD', 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0
    });
    
    const formattedAmount = formatter.format(amount);

    return formattedAmount;
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("🐛 [INIT] DOMContentLoaded disparado. Iniciando búsqueda de referencias.");
    
    // **CONSTANTES**
    const FREE_SHIPPING_THRESHOLD_CENTS = 9900; 
    const DEFAULT_SHIPPING_TEXT = "+ $6.95 shipping"; 

    // **MAPEO DE PLANES DE VENTA POR SERVING (MANTENIDO)**
    const SELLING_PLAN_MAP = {
        "32 servings | 8oz": {
            "1-Pack": 6361841883,
            "2-Pack": 6361874651,
            "3-Pack": 6361907419
        },
        "64 servings | 16oz": {
            "1-Pack": 6363087067,
            "2-Pack": 6363119835,
            "3-Pack": 6363152603
        }
    };
    
    // 1. OBTENCIÓN DE REFERENCIAS GLOBALES
    const productForm = document.querySelector('.product-single__form'); 
    
    if (!productForm) {
        console.error("❌ [FALLO] No se encontró el formulario principal con selector: '.product-single__form'. El script se detiene aquí.");
        return;
    }
    console.log(`✅ [ÉXITO] Formulario principal encontrado.`);

    const formContainer = productForm.closest('[data-section-type="product-template"]') || productForm.closest('[data-product-container]');
    const sectionId = formContainer ? formContainer.dataset.sectionId : null; 
    
    const productJSONScript = formContainer 
        ? formContainer.querySelector(`#ProductJson-${sectionId}`) 
        : document.querySelector('script[type="application/json"][data-product-json]');

    const productData = productJSONScript ? JSON.parse(productJSONScript.textContent) : window.customProductData; 
    
    if (!productData || !productData.variants) {
        console.error("❌ [FALLO] No se pudo cargar productData. Compruebe si el JSON de variantes está presente.");
        return;
    }
    console.log("✅ [ÉXITO] productData (JSON de variantes) cargado correctamente.");

    // Título Principal del Producto
    const productTitleElement = document.querySelector('.product-single__title');
    const baseTitle = productTitleElement ? productTitleElement.textContent.replace(/\/\s\d+\sServings/i, '').trim() : '';
    

    const productContainer = document.querySelector('.custom-subscription-widget-container');
    if (!productContainer) console.warn("⚠️ [WARN] Contenedor principal (.custom-subscription-widget-container) no encontrado.");

    const subscriptionIdInput = productForm.querySelector('input[name="selling_plan"]');
    if (!subscriptionIdInput) console.error("❌ [FALLO] Input de selling_plan (input[name='selling_plan']) no encontrado.");

    const variantIdInput = productForm.querySelector('select[name="id"]') || productForm.querySelector('input[name="id"]');
    if (!variantIdInput) console.error("❌ [FALLO] Input/Select del ID de variante (name='id') no encontrado.");
    
    // REFERENCIAS AL FOOTER DE TOTALES (DIAGNÓSTICO CRÍTICO)
    const totalCurrentPrice = document.querySelector('.total-current-price');
    const totalComparePrice = document.querySelector('.total-compare-price');
    const totalSaveAmount = document.querySelector('.total-save-amount'); 
    
    if (!totalCurrentPrice) console.error("❌ [FALLO FOOTER] Elemento .total-current-price no encontrado.");
    if (!totalComparePrice) console.error("❌ [FALLO FOOTER] Elemento .total-compare-price no encontrado.");
    if (!totalSaveAmount) console.error("❌ [FALLO FOOTER] Elemento .total-save-amount no encontrado.");
    
    
    // Otras referencias
    const packButtons = productContainer ? productContainer.querySelectorAll('.pack-button') : [];
    const servingsRadios = productForm.querySelectorAll('input[name="option1"]'); 
    const purchaseRadios = productContainer ? productContainer.querySelectorAll('input[name="purchase_option"]') : []; 
    const btnTextElement = document.querySelector('.btn--add-to-cart .btn__text');
    const shippingPriceElement = document.querySelector('#buy-once-option .shipping-price');
    
    if (!subscriptionIdInput || !variantIdInput) {
        console.error("❌ [FALLO FATAL] Faltan inputs cruciales. El script se detiene.");
        return;
    }

    let selectedServings = '';
    
    // --- 2. FUNCIONES CORE ---
    
    const getPackMultiplier = (packValue) => {
        const match = packValue.match(/^(\d+)/);
        return match ? parseInt(match[1], 10) : 1;
    }

    const getTargetVariantByOptions = (servings, pack) => {
        if (!productData || !servings || !pack) {
            return null;
        }
        return productData.variants.find(v => v.option1 === servings && v.option2 === pack);
    };
    
    const getBuyOnceBasePrice = (servings) => {
        const buyOnceVariant = getTargetVariantByOptions(servings, "1-Pack");
        return buyOnceVariant ? buyOnceVariant.price : 0;
    };

    const getTargetVariantById = (targetVariantId) => {
        if (!productData || !targetVariantId) return null;
        return productData.variants.find(v => v.id.toString() === targetVariantId.toString());
    };

    const getTargetData = (isSubscription, servings, pack, currentVariantId) => {
        
        let price = 0;
        let compareAt = 0;
        let sellingPlan = '';
        
        let targetVariant = getTargetVariantById(currentVariantId);

        if (!targetVariant) {
            targetVariant = getTargetVariantByOptions(servings, pack);
            if(targetVariant) currentVariantId = targetVariant.id;
        }
        
        if (!targetVariant) {
            return { variant: null, price: 0, compareAt: 0, sellingPlan: '' };
        }

        // --- LÓGICA CLAVE DE PRECIO DEL SELLING PLAN ---
        if (isSubscription) {
            sellingPlan = SELLING_PLAN_MAP[servings]?.[pack] || '';
            
            const buyOnceUnitBasePrice = getBuyOnceBasePrice(servings);
            const multiplier = getPackMultiplier(pack); 
            const buyOnceTotalBasePrice = buyOnceUnitBasePrice * multiplier;

            const sellingPlanAllocation = targetVariant.selling_plan_allocations
                ? targetVariant.selling_plan_allocations.find(alloc => alloc.selling_plan_id.toString() === sellingPlan.toString())
                : null;
            
            if (sellingPlanAllocation && sellingPlanAllocation.price_adjustments.length > 0) {
                price = sellingPlanAllocation.price_adjustments[0].price;
                compareAt = buyOnceTotalBasePrice; 
            } else {
                price = targetVariant.price;
                compareAt = targetVariant.compare_at_price || buyOnceTotalBasePrice; 
            }

        } else {
            // Es compra única (Buy Once)
            price = targetVariant.price;
            compareAt = targetVariant.compare_at_price || 0;
        }
        
        return { variant: targetVariant, price: price, compareAt: compareAt, sellingPlan: sellingPlan };
    };

    // --- Funciones de Utilidad y Visualización ---

    const updateProductTitle = (servingsOption) => {
        if (!productTitleElement || !baseTitle) return;

        const match = servingsOption.match(/^(\d+\s\w+)/i);
        const servingsSegment = match ? match[1].replace('|', '').trim() : '';

        if (servingsSegment) {
            const newTitle = `${baseTitle} / ${servingsSegment}`;
            productTitleElement.textContent = newTitle;
        } else {
            productTitleElement.textContent = baseTitle;
        }
    };
    
    const updateTotalFooterPrices = (totalPriceCents, totalCompareAtCents) => {
        console.log("🔍 [FOOTER] Iniciando actualización de Totales.");
        
        // 🚨 CHEQUEO DE FALLO CRÍTICO DE REFERENCIAS AQUÍ
        if (!totalCurrentPrice || !totalComparePrice || !totalSaveAmount) {
             console.error("❌ [FOOTER] ERROR: Faltan referencias CRÍTICAS del footer. Revise las clases .total-current-price, .total-compare-price, .total-save-amount.");
             return; 
        }

        const saveAmountCents = totalCompareAtCents - totalPriceCents;
        
        totalCurrentPrice.textContent = Shopify.formatMoney(totalPriceCents);
        
        if (saveAmountCents > 0) {
            totalComparePrice.textContent = Shopify.formatMoney(totalCompareAtCents);
            totalComparePrice.style.display = 'inline';
            totalComparePrice.style.visibility = 'visible';
            
            totalSaveAmount.textContent = `Save ${Shopify.formatMoney(saveAmountCents)}`;
            totalSaveAmount.style.display = 'inline';
            totalSaveAmount.style.visibility = 'visible';
            
            console.log(`✅ [FOOTER] Ahorro total mostrado: ${Shopify.formatMoney(saveAmountCents)}`);
        } else {
            totalComparePrice.style.display = 'none';
            totalComparePrice.style.visibility = 'hidden';
            totalSaveAmount.style.display = 'none';
            totalSaveAmount.style.visibility = 'hidden';
            console.log("⚠️ [FOOTER] Ahorro total es cero o negativo. Ocultando elementos.");
        }
    };
    
    // ... (El resto de funciones se mantiene sin cambios) ...

    const updateFormAndPrices = () => {
        console.log("--- 🏁 UPDATE FORM START ---");
        
        const selectedRadio = productContainer.querySelector('input[name="purchase_option"]:checked');
        if (!selectedRadio || !selectedServings) {
            return;
        }

        const purchaseOptionValue = selectedRadio.value; 
        const isSubscription = purchaseOptionValue !== 'onetime';
        
        const currentVariantId = variantIdInput.value;
        
        let targetPack = selectedRadio.dataset.packValue || '1-Pack'; 
        
        const selectedVisualPack = productContainer.querySelector('.pack-button.is-selected-pack')?.dataset.packValue || '1-Pack';
        
        if (!isSubscription) {
            targetPack = selectedVisualPack;
        }

        // 1. OBTENER DATOS DE LA VARIANTE
        const finalData = getTargetData(isSubscription, selectedServings, targetPack, currentVariantId);
        
        if (!finalData.variant) {
             return;
        }
        
        // --- 🎯 PASO 2: ACTUALIZAR EL TÍTULO DEL PRODUCTO CON LOS SERVINGS ---
        updateProductTitle(selectedServings);
        
        // 3. CÁLCULO Y VISUALIZACIÓN DE PORCENTAJE DE AUTOSHIP
        updateSubscriptionPercentage(selectedServings); 
        
        // 4. ACTUALIZACIÓN DE TODOS LOS PRECIOS UNITARIOS VISUALES
        updateAllPurchaseOptionPrices(selectedServings, selectedVisualPack);
        
        // 5. LÓGICA DE ENVÍO GRATUITO
        const totalPriceCents = finalData.price;
        const totalCompareAtCents = finalData.compareAt;
        
        if (shippingPriceElement && purchaseOptionValue === 'onetime') {
            if (totalPriceCents >= FREE_SHIPPING_THRESHOLD_CENTS) {
                shippingPriceElement.textContent = "Free Shipping";
            } else {
                shippingPriceElement.textContent = DEFAULT_SHIPPING_TEXT;
            }
        }
        
        // 6. ACTUALIZACIÓN CRÍTICA DEL DOM TOTAL (Footer: .total-save)
        updateTotalFooterPrices(totalPriceCents, totalCompareAtCents);
        
        // 7. Actualizar Variant ID y Selling Plan ID en inputs ocultos
        variantIdInput.value = finalData.variant.id;
        subscriptionIdInput.value = finalData.sellingPlan; 
        
        // 8. Actualizar texto del botón 
        btnTextElement.textContent = finalData.variant.available ? "ADD TO CART" : "SOLD OUT";
    };


    // --- MANEJADORES DE EVENTOS COMPLETOS ---
    
    const getNativePackRadio = (packValue) => {
        return productForm.querySelector(`input[name="option2"][value="${packValue}"]`);
    };

    const updateSubscriptionPercentage = (servings) => {
        if (!servings) return;

        productContainer.querySelectorAll('.purchase-option-label:not(.purchase-option-onetime)').forEach(label => {
            const radioInput = label.querySelector('input[name="purchase_option"]');
            const packValue = radioInput ? radioInput.dataset.packValue : null;
            
            if (!packValue) return;

            const targetVariant = getTargetVariantByOptions(servings, packValue);
            
            if (!targetVariant) return;

            const baseBuyOnceUnitPrice = getBuyOnceBasePrice(servings);
            const multiplier = getPackMultiplier(packValue);
            const compareAtTotal = baseBuyOnceUnitPrice * multiplier;
            
            const sellingPlan = SELLING_PLAN_MAP[servings]?.[packValue] || '';
            let priceTotal = targetVariant.price;

            const sellingPlanAllocation = targetVariant.selling_plan_allocations
                ? targetVariant.selling_plan_allocations.find(alloc => alloc.selling_plan_id.toString() === sellingPlan.toString())
                : null;
            
            if (sellingPlanAllocation && sellingPlanAllocation.price_adjustments.length > 0) {
                 priceTotal = sellingPlanAllocation.price_adjustments[0].price;
            }
            
            const saveCents = compareAtTotal - priceTotal;

            let percentage = 0;
            if (saveCents > 0 && compareAtTotal > 0) {
                percentage = Math.round((saveCents / compareAtTotal) * 100); 
            }

            const mainLabelSpan = label.querySelector('.main-label');
            if (mainLabelSpan) {
                let newText = `Autoship <strong>&amp; Save ${percentage}%</strong>`;
                
                if (percentage <= 0) {
                    newText = `Autoship`;
                }

                mainLabelSpan.innerHTML = newText;
            }
        });
    };
    
    const updateAllPurchaseOptionPrices = (currentServings, currentSelectedPack) => {
        
        const buyOnceLabel = document.querySelector('#buy-once-option');
        
        // 1. ACTUALIZAR BUY ONCE (USA EL PACK VISUAL SELECCIONADO)
        if (buyOnceLabel) {
            const variantData = getTargetData(false, currentServings, currentSelectedPack, null);
            
            if (variantData.variant) {
                const multiplier = getPackMultiplier(currentSelectedPack);
                const unitPriceCents = Math.round(variantData.price / multiplier);
                const unitCompareAtCents = Math.round(variantData.compareAt / multiplier);
                
                fillPriceDetails(buyOnceLabel, unitPriceCents, unitCompareAtCents);
            }
        }
        
        // 2. ACTUALIZAR TODAS LAS OPCIONES DE AUTOSHIP
        productContainer.querySelectorAll('.purchase-option-label:not(.purchase-option-onetime)').forEach(label => {
            const radioInput = label.querySelector('input[name="purchase_option"]');
            const packValue = radioInput ? radioInput.dataset.packValue : null;

            if (packValue) {
                const variantData = getTargetData(true, currentServings, packValue, null); 
                
                if (variantData.variant) {
                    const multiplier = getPackMultiplier(packValue);
                    
                    const unitPriceCents = Math.round(variantData.price / multiplier);
                    const unitCompareAtCents = Math.round(variantData.compareAt / multiplier); 

                    fillPriceDetails(label, unitPriceCents, unitCompareAtCents);
                }
            }
        });
        
        console.log("DEBUG DOM: ✅ Todos los precios unitarios de compra y Autoship han sido actualizados y visibles.");
    };

    const handlePurchaseOptionChange = (e) => {
        console.log("--- ⚡️ EVENT: purchase_option changed ---");
        const target = e.target;
        const selectedRadio = target;

        purchaseRadios.forEach(radio => { radio.closest('label').classList.remove('is-selected'); });
        selectedRadio.closest('label').classList.add('is-selected');

        const targetPackValue = target.value !== 'onetime' 
            ? selectedRadio.dataset.packValue 
            : productContainer.querySelector('.purchase-option-onetime .pack-button.is-selected-pack')?.dataset.packValue || '1-Pack'; 

        console.log(`🔍 [EVENT] Radio seleccionado: ${target.value}. Sincronizando con Pack nativo: ${targetPackValue}`);
        syncPackRadio(targetPackValue); 
    };
    
    const syncPackRadio = (targetPackValue) => {
        const nativePackRadio = getNativePackRadio(targetPackValue);
        if (nativePackRadio) {
            console.log(`🔍 [SYNC] Simulando click en radio nativo para Pack: ${targetPackValue}`);
            setTimeout(() => {
                nativePackRadio.click();
                updateFormAndPrices();
            }, 10);
        }
    };
    
    // a) Selección de Servings (Option 1)
    servingsRadios.forEach(radio => {
        if (radio.checked) { selectedServings = radio.value; }
        radio.addEventListener('change', (e) => {
            console.log("--- ⚡️ EVENT: Servings (option1) changed ---");
            selectedServings = e.target.value;
            console.log(`🔍 [EVENT] Nuevo Servings: ${selectedServings}. Ejecutando actualización en 50ms.`);
            setTimeout(updateFormAndPrices, 50); 
        });
    });

    // b) Selección de Autoship/Buy Once (Radio principal)
    purchaseRadios.forEach(radio => {
        radio.addEventListener('change', handlePurchaseOptionChange);
    });
    
    // c) Selección de Packs (Botones internos de Buy Once)
    packButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log("--- ⚡️ EVENT: Pack button clicked ---");
            packButtons.forEach(btn => { btn.classList.remove('is-selected-pack'); });
            e.target.classList.add('is-selected-pack');

            const targetPackValue = e.target.dataset.packValue;
            console.log(`🔍 [EVENT] Pack visual seleccionado: ${targetPackValue}. Sincronizando Pack nativo.`);
            syncPackRadio(targetPackValue); 
        });
    });

    // --- 4. INICIALIZACIÓN ---
    
    const initialServingsRadio = productForm.querySelector('input[name="option1"]:checked');
    if (initialServingsRadio) { 
        selectedServings = initialServingsRadio.value; 
        console.log(`🔍 [INIT] Servings inicial seleccionado: ${selectedServings}`);
    } else {
        console.warn("⚠️ [INIT] Ningún Servings (option1) seleccionado al inicio.");
    }
    
    if (selectedServings) {
        const checkedRadio = document.querySelector('input[name="purchase_option"]:checked');

        if (checkedRadio) {
            console.log("🔍 [INIT] Radio de compra inicial encontrado. Forzando 'change' para la primera actualización.");
            setTimeout(() => checkedRadio.dispatchEvent(new Event('change')), 100);
        } else {
            console.log("🔍 [INIT] Ningún radio de compra marcado. Forzando actualización inicial directa.");
            updateFormAndPrices();
        }
    }
    
    const fillPriceDetails = (labelElement, unitPriceCents, unitCompareAtCents) => {
        const priceTarget = labelElement.querySelector('.current-price-display');
        const compareAtTarget = labelElement.querySelector('.compare-at-price-display');
        const moneySavedContainer = labelElement.querySelector('.money-saved'); 
        const moneySavedAmountTarget = labelElement.querySelector('.money-saved-amount');
        const savingsPercentTarget = labelElement.querySelector('.savings-percent');
        const currentPriceSavedTarget = labelElement.querySelector('.money-saved-percentage .current-price');
        const originalPriceSavedTarget = labelElement.querySelector('.original-price-tachado');
        
        [compareAtTarget, moneySavedContainer].forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
            }
        });
        
        if (priceTarget) {
            priceTarget.textContent = Shopify.formatMoney(unitPriceCents);
        }

        const saveCents = unitCompareAtCents - unitPriceCents;
        const percentage = unitCompareAtCents > 0 
                           ? Math.round((saveCents / unitCompareAtCents) * 100) 
                           : 0;
        
        if (saveCents > 0) {
            
            if (compareAtTarget) {
                compareAtTarget.textContent = Shopify.formatMoney(unitCompareAtCents);
                compareAtTarget.style.display = 'inline';
                compareAtTarget.style.visibility = 'visible'; 
            }
            
            if (moneySavedContainer) {
                moneySavedContainer.style.display = 'inline-block'; 
                moneySavedContainer.style.visibility = 'visible'; 
            }
            
            if (moneySavedAmountTarget) {
                moneySavedAmountTarget.textContent = Shopify.formatMoney(saveCents, false).replace('$', '').trim();
            }
            
            if (savingsPercentTarget) {
                 savingsPercentTarget.textContent = `${percentage}% OFF`;
            }
            
            if (currentPriceSavedTarget) {
                 currentPriceSavedTarget.textContent = Shopify.formatMoney(unitPriceCents);
            }
            if (originalPriceSavedTarget) {
                 originalPriceSavedTarget.textContent = Shopify.formatMoney(unitCompareAtCents);
            }
        }
    }

});