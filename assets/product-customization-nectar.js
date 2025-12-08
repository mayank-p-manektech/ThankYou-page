
// --- 1. LÓGICA DE EXTRACCIÓN DE PRECIOS DEL JSON (Misma que antes) ---

// La variable global debe estar definida antes: window.customProductData = {{ product | json }}; 

function getCompareAtPriceByServing(servings) {
  const keyword = servings.toLowerCase();
  
  if (!window.customProductData || !window.customProductData.variants) {
    return 0;
  }

  const foundVariant = window.customProductData.variants.find(variant => {
    const option1 = variant.option1 ? variant.option1.toLowerCase() : '';
    const title = variant.title ? variant.title.toLowerCase() : '';
    
    return option1.includes(keyword) || title.includes(keyword);
  });

  if (foundVariant && foundVariant.compare_at_price) {
    return foundVariant.compare_at_price / 100;
  }
  
  return 0;
}

// 2. ASIGNAR VALORES DINÁMICOS
const price8ozSingle = getCompareAtPriceByServing('32 servings | 8oz / 1-Pack') || getCompareAtPriceByServing('32 servings');
const price16ozSingle = getCompareAtPriceByServing('64 servings | 16oz / 1-Pack') || getCompareAtPriceByServing('64 servings');

const nectarPrice8ozSingle  = price8ozSingle || 40;  
const nectarPrice16ozSingle = price16ozSingle || 72; 
const nectarPrice2ozSingle = getCompareAtPriceByServing('8 servings | 2oz / 1-Pack') || getCompareAtPriceByServing('8 servings') || 39; 

// --- 3. FUNCIÓN PRINCIPAL DE DOMContentLoaded (Actualizada) ---

document.addEventListener('DOMContentLoaded', () => {
  // 1) Precios base por medida (oz)
  const basePriceMap = {
    '8 servings | 2oz':  nectarPrice2ozSingle,
    '32 servings | 8oz': nectarPrice8ozSingle,
    '64 servings | 16oz': nectarPrice16ozSingle
  };

  // 2) Referencias al DOM
  const savingsBlocks  = document.querySelectorAll('.money-saved');
  const measureRadios  = document.querySelectorAll('input[name="option1"]');
  const packRadios     = document.querySelectorAll('input[name="option2"]');
  const subRadio       = document.getElementById('purchaseTypeSubscription');
  const oneTimeRadio   = document.getElementById('purchaseTypeOneTime');
  
  // Nuevo elemento DOM a actualizar: el LABEL para la suscripción
  const subscriptionLabelEl = document.querySelector('.subscription-label');
  // Guardamos el texto original para poder restaurarlo (solo "SUBSCRIBE & SAVE")
  const originalSubscriptionLabelText = subscriptionLabelEl ? subscriptionLabelEl.textContent.trim() : '';

  // 2bis) Capturamos el <h1> y guardamos su texto original
  const titleEl = document.querySelector('h1');
  const originalTitle = titleEl ? titleEl.textContent.trim() : '';

  // 3) Helper: extrae sólo el texto fuera de <s> y limpia
  function parsePrice(el) {
    if (!el) return 0;
    let text = '';
    el.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
    });
    return parseFloat(text.replace(/[^0-9.]/g, '')) || 0; 
  }

  // 4) Recalcula y muestra/oculta el ahorro en CADA bloque y en el selector de suscripción
  function updateSavings() {
    const selMeasure = document.querySelector('input[name="option1"]:checked');
    const selPack    = document.querySelector('input[name="option2"]:checked');
    const isSubscription = subRadio && subRadio.checked; 
    
    // Función de limpieza para el label
    function resetSubscriptionLabel() {
        if (subscriptionLabelEl) {
             subscriptionLabelEl.textContent = originalSubscriptionLabelText;
        }
    }

    // 4a) Lógica de retorno y limpieza
    if (!selMeasure || !selPack) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      resetSubscriptionLabel(); // Limpiar el label si no hay selección
      if (titleEl) titleEl.textContent = originalTitle;
      return;
    }

    const measure    = selMeasure.getAttribute('data-option');
    const packCount  = parseInt(selPack.getAttribute('data-option'), 10) || 1; 
    const baseSingle = basePriceMap[measure] || 0;

    // Excepción
    if (measure === '8 servings | 2oz' && packCount === 6) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      resetSubscriptionLabel(); 
      if (titleEl) titleEl.textContent = originalTitle;
      return;
    }
    
    // Coste original (Compare at price total)
    const originalCost = baseSingle * packCount;

    // Precio actual (subscription vs onetime)
    const priceEl = isSubscription
      ? document.querySelector('[data-rtx-subscription-price]')
      : document.querySelector('[data-rtx-onetime-price]');
    
    if (!priceEl) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      resetSubscriptionLabel();
      if (titleEl) titleEl.textContent = originalTitle;
      return;
    }
    const selectedPrice = parsePrice(priceEl);

    // Cálculo de ahorro
    const savings = originalCost - selectedPrice;
    
    if (savings <= 0 || originalCost === 0) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      resetSubscriptionLabel();
      if (titleEl) titleEl.textContent = originalTitle;
      return;
    }

    // Porcentaje
    const percent = Math.round((savings / originalCost) * 100);

    // 4b) Actualiza el selector de suscripción (NUEVA LÓGICA)
    if (isSubscription && subscriptionLabelEl) {
        // Se inyecta el porcentaje (ej: 15%) después del texto original.
        subscriptionLabelEl.textContent = `${originalSubscriptionLabelText} ${percent}%`;
    } else {
        resetSubscriptionLabel();
    }

    // 4c) Renderiza cada bloque .money-saved (la lógica original)
    savingsBlocks.forEach(block => {
      const origEl = block.querySelector('.original-price-tachado');
      const currEl = block.querySelector('.current-price');
      const pctEl  = block.querySelector('.savings-percent');
      const amtEl  = block.querySelector('.money-saved-amount');

      origEl.textContent   = `$${Math.round(originalCost)}`;
      currEl.textContent   = `$${Math.round(selectedPrice)}`;
      pctEl.textContent    = `-${percent}%`;
      amtEl.textContent    = `$${Math.round(savings)}`;
      block.style.display  = 'flex';
    });

    // 4d) Actualizamos el <h1> con el texto de servings
    if (titleEl) {
      const servingLabel = measure.split(' | ')[0];
      titleEl.textContent = `${originalTitle} / ${servingLabel}`;
    }
  }

  // 5) Escucha cambios
  [...measureRadios, ...packRadios].forEach(r => r.addEventListener('change', updateSavings));
  if (subRadio)     subRadio.addEventListener('change', updateSavings);
  if (oneTimeRadio) oneTimeRadio.addEventListener('change', updateSavings);

  // 6) Lanza el cálculo inicial
  updateSavings();
});
