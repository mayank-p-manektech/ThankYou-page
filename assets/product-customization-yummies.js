
// document.addEventListener('DOMContentLoaded', function() {
//     var comparePriceElement = document.getElementById('ComparePrice');
//     var oldPricePerBottleElement = document.querySelector('.old-ppb'); // Elemento donde se mostrará el precio por botella antiguo
//     var newPricePerBottleElement = document.querySelector('.new-ppb'); // Elemento donde se mostrará el precio por botella nuevo
//     var productPricePerBottleElement = document.querySelector('.product-price-per-bottle'); // Elemento .product-price-per-bottle
//     var offerListInputs = document.querySelectorAll('.option-name-choose-qty-gummies input'); // Inputs dentro de .option-name-choose-qty-gummies
//     var unitNElement = document.querySelector('.unit-n'); // Elemento .unit-n donde se mostrará "/ jar"

//     function parsePrice(element) {
//         if (element) {
//             var text = element.textContent.trim();
//             var price = text.replace(/[^\d.-]/g, ''); // Elimina cualquier carácter que no sea dígito, punto o guion
//             return parseFloat(price) || 0; // Si el parseo falla, retorna 0
//         }
//         return 0; // Si el elemento no existe, retorna 0
//     }

//     function updatePrices() {
//         var selectedOfferInput = Array.from(offerListInputs).find(input => input.checked);

//         setTimeout(function() {
//             var comparePrice = parsePrice(comparePriceElement);
//             var productPriceElement = document.getElementById('ProductPrice');
//             var newPrice = parsePrice(productPriceElement);

//             if (selectedOfferInput) {
//                 var dataJar = parseInt(selectedOfferInput.getAttribute('data-jar')) || 1; // Obtén el valor de data-jar y conviértelo a entero
//                 console.log('Data Jar:', dataJar); // Imprime el valor de data-jar en la consola

//                 var oldPricePerJar = Math.round(comparePrice / dataJar); // Divide el precio entre el valor de data-jar y redondea el resultado
//                 console.log('Old Price Per Jar:', oldPricePerJar); // Imprime el precio por jar antiguo en la consola

//                 var newPricePerJar = Math.round(newPrice / dataJar); // Divide el precio entre el valor de data-jar y redondea el resultado
//                 console.log('New Price Per Jar:', newPricePerJar); // Imprime el precio por jar nuevo en la consola

//                 // Muestra o oculta el elemento old-ppb dependiendo de si oldPricePerJar es mayor que 0
//                 if (oldPricePerJar > 0) {
//                     oldPricePerBottleElement.innerText = '$' + oldPricePerJar; // Muestra el precio por jar sin decimales
//                     oldPricePerBottleElement.style.display = 'flex'; // Asegura que el elemento esté visible
//                 } else {
//                     oldPricePerBottleElement.style.display = 'none'; // Oculta el elemento si el precio es 0
//                 }

//                 newPricePerBottleElement.innerText = '$' + newPricePerJar; // Muestra el precio por jar sin decimales
//                 newPricePerBottleElement.style.display = 'flex'; // Asegura que el elemento esté visible
//                 productPricePerBottleElement.style.display = 'flex'; // Asegura que el elemento .product-price-per-bottle esté visible

//                 unitNElement.innerText = '/ jar'; // Actualiza el contenido de .unit-n a "/ jar"
//             } else {
//                 oldPricePerBottleElement.style.display = 'none'; // Oculta el elemento si no hay oferta seleccionada
//                 newPricePerBottleElement.style.display = 'none'; // Oculta el elemento si no hay oferta seleccionada
//                 productPricePerBottleElement.style.display = 'none'; // Oculta el elemento .product-price-per-bottle si no hay oferta seleccionada

//                 unitNElement.innerText = ''; // Vacía el contenido de .unit-n si no hay oferta seleccionada
//             }
//         }, 0); // Delay para asegurar que el DOM se actualice antes de realizar el cálculo
//     }

//     // Observa cambios en los inputs de oferta si existen
//     if (offerListInputs.length > 0) {
//         offerListInputs.forEach(function(input) {
//             input.addEventListener('change', updatePrices);
//         });
//     }

//     // Observa cambios en el precio de comparación si existe
//     if (comparePriceElement) {
//         var observer = new MutationObserver(updatePrices);
//         observer.observe(comparePriceElement, { childList: true, subtree: true });
//     }

//     // Observa cambios en el precio del producto si existe
//     var productPriceElement = document.getElementById('ProductPrice');
//     if (productPriceElement) {
//         var productPriceObserver = new MutationObserver(updatePrices);
//         productPriceObserver.observe(productPriceElement, { childList: true, subtree: true });
//     }

//     // Inicialización inicial si existen los elementos necesarios
//     if (offerListInputs.length > 0 || comparePriceElement || productPriceElement) {
//         updatePrices();
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     // Elementos clave
//     const subscriptionElement = document.querySelector('.rc_price.subscription');
//     const comparisonPriceElement = document.querySelector('.comparison-price');
//     const oneTimePriceElement = document.querySelector('.rc_price.one-time');
//     const savingsElement = document.getElementById('money-saved-amount');
//     const savingsContainer = document.getElementById('money-saved');
//     const oneTimePurchaseElement = document.querySelector('.rc_block__type__onetime');
//     const autodeliverElement = document.querySelector('.rc_block__type__autodeliver');

//     // Función para extraer precios del texto
//     function parsePrice(element) {
//         if (element) {
//             const text = element.innerText.trim();
//             const price = text.replace(/[^\d.-]/g, ''); // Extrae solo números, puntos y guiones
//             return parseFloat(price) || 0; // Devuelve 0 si no se puede parsear
//         }
//         return 0;
//     }

//     // Función para calcular los ahorros
//     function calculateSavings() {
//         const comparisonPrice = parsePrice(comparisonPriceElement);
//         const oneTimePrice = parsePrice(oneTimePriceElement);
//         const subscriptionPrice = parsePrice(subscriptionElement);

//         let savings = 0;

//         if (autodeliverElement?.classList.contains('selected')) {
//             savings = comparisonPrice - subscriptionPrice;
//         } else if (oneTimePurchaseElement?.classList.contains('selected')) {
//             savings = comparisonPrice - oneTimePrice;
//         }

//         // Actualiza el DOM con los ahorros
//         if (savings > 0) {
//             savingsElement.innerText = `$${Math.round(savings)}`; // Redondea a entero
//             savingsContainer.style.display = 'block';
//         } else {
//             savingsContainer.style.display = 'none';
//         }
//     }

//     // Función para manejar selección de elementos
//     function selectElement(selectedElement) {
//         // Desmarca todos los botones
//         [oneTimePurchaseElement, autodeliverElement].forEach(element => {
//             element?.classList.remove('selected');
//         });

//         // Marca el botón seleccionado
//         selectedElement?.classList.add('selected');
//         calculateSavings(); // Recalcula ahorros al cambiar la selección
//     }

//     // Eventos de clic
//     oneTimePurchaseElement?.addEventListener('click', () => selectElement(oneTimePurchaseElement));
//     autodeliverElement?.addEventListener('click', () => selectElement(autodeliverElement));

//     // Observadores para cambios dinámicos en los precios
//     [subscriptionElement, comparisonPriceElement, oneTimePriceElement].forEach(element => {
//         if (element) {
//             new MutationObserver(calculateSavings).observe(element, { childList: true, subtree: true });
//         }
//     });

//     // Cálculo inicial
//     selectElement(document.querySelector('.rc_block__type__onetime.selected') || autodeliverElement);
// });



document.addEventListener('DOMContentLoaded', () => {
  // 1) Precio de referencia: frasco de 30 unidades
  const base30Price = 35;

  // 2) Referencias al DOM
  const savingsBlocks  = document.querySelectorAll('.money-saved');
  const offerRadios     = document.querySelectorAll('input[name="option1"]');
  const qtyRadios       = document.querySelectorAll('input[name="option2"]');
  const subRadio        = document.getElementById('purchaseTypeSubscription');
  const oneTimeRadio    = document.getElementById('purchaseTypeOneTime');
  const shopifyPriceEl  = document.getElementById('ProductPrice');

  // 3) Helper para parsear precio limpio
  function parsePrice(el) {
    if (!el) return 0;
    let text = '';
    el.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
    });
    return parseFloat(text.replace(/[^0-9.]/g, '')) || 0;
  }

  // 4) Recalcula y muestra/oculta el ahorro en cada bloque
  function updateSavings() {
    // 4.1) Selección de cantidad
    const selQty = document.querySelector('input[name="option2"]:checked');
    if (!selQty) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      return;
    }
    const units = parseInt(selQty.getAttribute('data-option'), 10) || 0;

    // 4.2) Coste “original” proporcional
    const originalCost = base30Price * (units / 30);

    // 4.3) Precio actual según tipo de compra
    let priceEl;
    if (subRadio && subRadio.checked) {
      priceEl = document.querySelector('[data-rtx-subscription-price]');
    } else if (oneTimeRadio && oneTimeRadio.checked) {
      priceEl = document.querySelector('[data-rtx-onetime-price]');
    } else {
      priceEl = shopifyPriceEl;
    }
    if (!priceEl) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      return;
    }
    const currentPrice = parsePrice(priceEl);

    // 4.4) Cálculo de ahorro
    const savings = originalCost - currentPrice;
    if (savings <= 0) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      return;
    }

    // 4.5) Porcentaje
    const pct = Math.round((savings / originalCost) * 100);

    // 4.6) Render para cada bloque
    savingsBlocks.forEach(block => {
      const origEl   = block.querySelector('.original-price-tachado');
      const currEl   = block.querySelector('.current-price');
      const pctEl    = block.querySelector('.savings-percent');
      const amtEl    = block.querySelector('.money-saved-amount');

      origEl.textContent     = `$${Math.round(originalCost)}`;
      currEl.textContent     = `$${Math.round(currentPrice)}`;
      pctEl.textContent      = `-${pct}%`;
      amtEl.textContent      = `$${Math.round(savings)}`;
      block.style.display    = 'flex';
    });
  }

  // 5) Escucha cambios
  [...offerRadios, ...qtyRadios].forEach(r => r.addEventListener('change', updateSavings));
  if (subRadio)     subRadio.addEventListener('change', updateSavings);
  if (oneTimeRadio) oneTimeRadio.addEventListener('change', updateSavings);

  // 6) Observa cambios en el precio de Shopify (variante)
  if (shopifyPriceEl) {
    new MutationObserver(updateSavings)
      .observe(shopifyPriceEl, { childList: true, subtree: true });
  }

  // 7) Cálculo inicial
  updateSavings();
});

document.addEventListener('DOMContentLoaded', function() {
  // 1) Referencias a los bloques
  const desc      = document.querySelectorAll('.accordion-description, .accordion-ingredients');
  const descSf    = document.querySelectorAll('.accordion-description-sf, .accordion-ingredients-sf');
  const options   = document.querySelectorAll('.option-name-choose-offer input[type="radio"]');

  // 2) Función que aplica el toggle
  function updateAccordions() {
    const lowSugar = document.querySelector('.option-name-choose-offer input[value="Sugar free"]');
    if (lowSugar && lowSugar.checked) {
      desc.forEach(el => el.style.display   = 'none');
      descSf.forEach(el => el.style.display = 'block');
    } else {
      desc.forEach(el => el.style.display   = 'block');
      descSf.forEach(el => el.style.display = 'none');
    }
  }

  // 3) Escucha cambios en cualquiera de los radios
  options.forEach(input => {
    input.addEventListener('change', updateAccordions);
  });

  // 4) Estado inicial
  updateAccordions();
});



