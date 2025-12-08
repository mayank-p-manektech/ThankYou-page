document.addEventListener('DOMContentLoaded', function() {
  // Función para actualizar el precio por serving
  function updatePricePerServing() {
    // Seleccionamos el precio actual en el contenedor .price-container
    const priceElement = document.querySelector('.price-container #ProductPrice');
    if (!priceElement) return; // Si el elemento del precio no existe, salimos de la función.

    const priceText = priceElement.textContent.trim();

    // Verificamos si el precio no está vacío
    if (priceText) {
      // Extraemos solo el número, quitando el símbolo de dólar
      const priceValue = parseFloat(priceText.replace('$', ''));

      if (!isNaN(priceValue)) {
        // Dividimos el precio entre 8
        const pricePerServing = (priceValue / 8).toFixed(2);

        // Seleccionamos el contenedor donde se mostrará el precio por serving
        const priceInfoElement = document.querySelector('.product-price-info');

        // Actualizamos el contenido del div, manteniendo el span
        priceInfoElement.innerHTML = `$${pricePerServing} <span class="unit-n">/ serving</span>`;
      }
    }
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const videoPlayElement = document.querySelector('.miniature__video_play');
  
  if (videoPlayElement) {
    const backgroundImage = videoPlayElement.style.backgroundImage;
    const updatedImage = backgroundImage.replace('_small', '');
    videoPlayElement.style.backgroundImage = updatedImage;
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const savingsBlocks = document.querySelectorAll('.money-saved');
  const packRadios = document.querySelectorAll('input[name="option1"]');
  const subRadio = document.getElementById('purchaseTypeSubscription');
  const oneTimeRadio = document.getElementById('purchaseTypeOneTime');

  const onePackPrice = 65; // precio de BUY ONCE del 1-Pack

  const packQtyMap = {
    '1-Pack': 1,
    '2-Pack': 2,
    '3-Pack': 3
  };

  function parsePrice(el) {
    if (!el) return 0;
    let text = '';
    el.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
    });
    return parseFloat(text.replace(/[^0-9.]/g, '')) || 0;
  }

  function updateSavings() {
    const selectedPack = document.querySelector('input[name="option1"]:checked');
    if (!selectedPack) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      return;
    }

    const packKey = selectedPack.getAttribute('data-option');
    const qty = packQtyMap[packKey] || 1;
    const basePrice = onePackPrice * qty;

    const subPriceEl = document.querySelector('[data-rtx-subscription-price]');
    const oneTimePriceEl = document.querySelector('[data-rtx-onetime-price]');

    let currentPrice = 0;

    if (subRadio && subRadio.checked && subPriceEl) {
      currentPrice = parsePrice(subPriceEl);
    } else if (oneTimeRadio && oneTimeRadio.checked && oneTimePriceEl) {
      currentPrice = parsePrice(oneTimePriceEl);
    }

    const savings = basePrice - currentPrice;

    if (savings <= 0) {
      savingsBlocks.forEach(b => b.style.display = 'none');
      return;
    }

    const percent = Math.round((savings / basePrice) * 100);

    savingsBlocks.forEach(block => {
      const origEl = block.querySelector('.original-price-tachado');
      const currEl = block.querySelector('.current-price');
      const pctEl  = block.querySelector('.savings-percent');
      const amtEl  = block.querySelector('.money-saved-amount');

      if (origEl) origEl.textContent = `$${Math.round(basePrice)}`;
      if (currEl) currEl.textContent = `$${Math.round(currentPrice)}`;
      if (pctEl)  pctEl.textContent  = `-${percent}%`;
      if (amtEl)  amtEl.textContent  = `$${Math.round(savings)}`;

      block.style.display = 'flex';
    });
  }

  packRadios.forEach(r => r.addEventListener('change', updateSavings));
  if (subRadio)     subRadio.addEventListener('change', updateSavings);
  if (oneTimeRadio) oneTimeRadio.addEventListener('change', updateSavings);

  updateSavings();
});



