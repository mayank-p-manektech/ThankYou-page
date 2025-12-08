document.addEventListener('DOMContentLoaded', () => {
  // 1) Precio one-time de 1-Pack para cada medida
  const basePriceMap = {
    'Rose Mist 2oz':  35,
    '4 Fills 8oz':  62,
    'Rose Mist Set 10oz': 82
  };

  // 2) Referencias al DOM
  const savingsBlocks  = document.querySelectorAll('.money-saved');
  const measureRadios  = document.querySelectorAll('input[name="option1"]');
  const packRadios     = document.querySelectorAll('input[name="option2"]');
  const variantSelect  = document.getElementById('ProductSelect');
  const subRadio       = document.getElementById('purchaseTypeSubscription');
  const oneTimeRadio   = document.getElementById('purchaseTypeOneTime');

  // Helpers de parseo (idénticos a los tuyos)
  function parsePriceEl(el) {
    if (!el) return 0;
    let txt = '';
    el.childNodes.forEach(n => { if (n.nodeType===Node.TEXT_NODE) txt += n.textContent; });
    return parseFloat(txt.replace(/[^0-9.]/g, ''))||0;
  }
  function parseVariantPrice(text) {
    const m = text.match(/\$([\d,]+(?:\.\d+)?)/);
    return m ? parseFloat(m[1].replace(/,/g, '')) : 0;
  }

  // 4) Recalcula y muestra/oculta el ahorro en **cada** bloque
  function updateSavings() {
    // 4.1) Medida
    const selM = document.querySelector('input[name="option1"]:checked');
    if (!selM) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      return;
    }
    const measure    = selM.getAttribute('data-option');
    const baseSingle = basePriceMap[measure]||0;

    // 4.2) Pack
    const selQ = document.querySelector('input[name="option2"]:checked');
    if (!selQ) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      return;
    }
    const packCount    = parseInt(selQ.getAttribute('data-option'),10)||1;
    const originalCost = baseSingle * packCount;

    // 4.4) Precio actual
    let currentPrice = 0;
    if (subRadio && subRadio.checked) {
      currentPrice = parsePriceEl(document.querySelector('[data-rtx-subscription-price]'));
    } else if (oneTimeRadio && oneTimeRadio.checked) {
      currentPrice = parsePriceEl(document.querySelector('[data-rtx-onetime-price]'));
    } else {
      const optText = variantSelect.options[variantSelect.selectedIndex].text;
      currentPrice  = parseVariantPrice(optText);
    }

    // 4.5) Ahorro
    const savings = originalCost - currentPrice;
    const pct     = savings > 0
      ? Math.round((savings/originalCost)*100)
      : 0;

    // 4.6) Render para cada bloque
    savingsBlocks.forEach(block => {
      const origEl   = block.querySelector('.original-price-tachado');
      const currEl   = block.querySelector('.current-price');
      const pctEl    = block.querySelector('.savings-percent');
      const amtEl    = block.querySelector('.money-saved-amount');

      if (savings <= 0) {
        block.style.display = 'none';
      } else {
        origEl.textContent     = `$${Math.round(originalCost)}`;
        currEl.textContent     = `$${Math.round(currentPrice)}`;
        pctEl.textContent      = `-${pct}%`;
        amtEl.textContent      = `$${Math.round(savings)}`;
        block.style.display    = 'flex';
      }
    });
  }

  // 5) Escucha cambios
  measureRadios.forEach(r => r.addEventListener('change', updateSavings));
  packRadios.forEach(r    => r.addEventListener('change', updateSavings));
  variantSelect.addEventListener('change', updateSavings);
  if (subRadio)     subRadio.addEventListener('change', updateSavings);
  if (oneTimeRadio) oneTimeRadio.addEventListener('change', updateSavings);

  // 6) Cálculo inicial
  updateSavings();
});
