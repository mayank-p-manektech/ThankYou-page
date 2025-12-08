

document.addEventListener( 'DOMContentLoaded', function () {
  var main = new Splide( '#main-carousel', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : true,
  } );

  var thumbnails = new Splide( '#thumbnail-carousel', {
    fixedWidth  : 64,
    fixedHeight : 64,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
} );


document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos todos los contenedores de video con la clase .thumbs-video
  const thumbsVideos = document.querySelectorAll('.thumbs-video');
  
  // Verificamos si hay al menos un contenedor con la clase .thumbs-video
  if (thumbsVideos.length > 0) {
    // Iteramos sobre cada uno de los contenedores .thumbs-video
    thumbsVideos.forEach(function(thumbsVideo) {
      // Seleccionamos el video dentro del contenedor actual
      const video = thumbsVideo.querySelector('video');
      
      // Verificamos si el video tiene el atributo 'poster'
      const posterUrl = video ? video.getAttribute('poster') : null;
      
      // Si existe una URL de póster, lo usamos como fondo
      if (posterUrl) {
        thumbsVideo.style.backgroundImage = `url(${posterUrl})`;
        thumbsVideo.style.backgroundSize = 'cover';  // Asegura que la imagen cubra todo el contenedor
        thumbsVideo.style.backgroundPosition = 'center';  // Centra la imagen
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos todos los elementos con la clase .main-image-item
  const mainImageItems = document.querySelectorAll('.main-image-item');

  // Iteramos sobre cada uno de los elementos .main-image-item
  mainImageItems.forEach(function(mainImageItem) {
    // Verificamos si hay un video dentro del contenedor
    const video = mainImageItem.querySelector('video');
    
    // Si existe un video
    if (video) {
      // Obtenemos el atributo poster del video
      const posterUrl = video.getAttribute('poster');
      
      // Verificamos si el atributo 'poster' existe y si contiene '_small'
      if (posterUrl && posterUrl.includes('_small')) {
        // Quitamos '_small' de la ruta del póster
        const newPosterUrl = posterUrl.replace('_small', '');
        
        // Actualizamos el atributo 'poster' con la nueva ruta
        video.setAttribute('poster', newPosterUrl);
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos todos los inputs dentro de .new-options con el nombre "option1"
  const options = document.querySelectorAll('input[name="option1"]');

  // Función para manejar el cambio de selección
  function handleOptionChange() {
    // Obtenemos los elementos #original-ingredients, #free-ingredients, .original-description y .free-description
    const originalIngredients = document.getElementById('original-ingredients');
    const freeIngredients = document.getElementById('free-ingredients');
    const originalDescription = document.querySelector('.original-description');
    const freeDescription = document.querySelector('.free-description');

    // Verificamos cuál opción está seleccionada
    const selectedOption = document.querySelector('input[name="option1"]:checked');

    if (selectedOption) {
      const selectedOptionValue = selectedOption.getAttribute('data-option');

      // Solo ejecutamos el código si los elementos existen
      if (originalIngredients && freeIngredients) {
        // Si la opción seleccionada es "Sugar free"
        if (selectedOptionValue === 'Sugar free') {
          originalIngredients.style.display = 'none';
          freeIngredients.style.display = 'block';
        }
        // Si la opción seleccionada es "Original"
        else if (selectedOptionValue === 'Original') {
          originalIngredients.style.display = 'block';
          freeIngredients.style.display = 'none';
        }
      }

      // Validamos si las descripciones existen antes de modificar su display
      if (originalDescription && freeDescription) {
        // Si la opción seleccionada es "Sugar free"
        if (selectedOptionValue === 'Sugar free') {
          originalDescription.style.display = 'none';
          freeDescription.style.display = 'block';
        }
        // Si la opción seleccionada es "Original"
        else if (selectedOptionValue === 'Original') {
          originalDescription.style.display = 'block';
          freeDescription.style.display = 'none';
        }
      }
    }
  }

  // Añadimos un listener para detectar cuando cambia la selección de los inputs
  options.forEach(function(input) {
    input.addEventListener('change', handleOptionChange);
  });

  // Ejecutamos una vez para establecer el estado inicial
  handleOptionChange();
});



// Escuchar los cambios en los inputs dentro de #rc_container
document
  .querySelectorAll('#rc_container input[type="radio"]')
  .forEach(function (radio) {
    radio.addEventListener("change", function () {
      let selectedValue = this.value;

      // Busca los radios dentro de .rc-container-wrapper
      let wrapperRadios = document.querySelectorAll(
        '.rc-container-wrapper input[type="radio"]'
      );

      // Recorre los radios dentro de .rc-container-wrapper
      wrapperRadios.forEach(function (wrapperRadio) {
        if (
          selectedValue === "autodeliver" &&
          wrapperRadio.value === "subsave"
        ) {
          // Si se selecciona autodeliver, simular click en subsave
          wrapperRadio.click();
        } else if (
          selectedValue === "onetime" &&
          wrapperRadio.value === "onetime"
        ) {
          // Si se selecciona onetime, simular click en onetime
          wrapperRadio.click();
        }
      });
    });
  });



document.addEventListener("click", function (e) {
  const btnText = e.target.closest('.btn--add-to-cart')?.innerText?.trim();
    console.log('btnText',btnText);

    if (btnText === "Subscribe now" || btnText === "SUBSCRIBE NOW" || 
        btnText === "Add to cart" || btnText === "ADD TO CART") {

      const widget = document.querySelector(".review-widget-wrap");
      console.log('widget',widget);
      if (widget) {
        widget.style.display = "none";
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    function updateButtonText() {
      const subscriptionLabel = document.querySelector('label[for="purchaseTypeSubscription"]');
      const addToCartButton = document.querySelector('.btn--add-to-cart');
      const addToCartText = addToCartButton?.querySelector('.btn__text');

      if (!addToCartText || !subscriptionLabel) return;

      const isDisabled = addToCartButton.classList.contains('disabled');
      const isSubscriptionSelected = subscriptionLabel.classList.contains('is-selected');

      if (isDisabled) {
        addToCartText.textContent = "Out of Stock";
      } else if (isSubscriptionSelected) {
        addToCartText.textContent = "Subscribe now";
      } else {
        addToCartText.textContent = "Add to cart";
      }
    }

    document.addEventListener('change', function (event) {
      if (event.target.closest('.single-option-radio') || event.target.name === 'purchaseType') {
        updateButtonText();
      }
    });

    document.addEventListener('click', function (event) {
      if (event.target.closest('.single-option-radio') || event.target.name === 'purchaseType') {
        updateButtonText();
      }
    });

    // Ejecutar al inicio
    updateButtonText();
  });













