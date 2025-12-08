//if (jQuery(window).width() > 991) {
    // handle the big screens

  $(window).on('scroll', function(){
      if ($(window).scrollTop() >= 100) {
          $('#shopify-section-header').addClass('fixed-header');
          $('#shopify-section-header #head_right_section').addClass('visible-title');
      }
      else {
          $('#shopify-section-header').removeClass('fixed-header');
          $('#shopify-section-header #head_right_section').removeClass('visible-title');
      }
  });
//}

//Fade in Effect on scroll Homepage
window.addEventListener('load', function() {
    AOS.init({
      easing: 'ease-in-out-sine',
      duration: 500,
      offset: 100
    });
  
  // passes on every "a" tag 
    $(".head_right_section_inner li a").each(function(i, item) {
            // checks if its the same on the address bar
        if(window.location.href == (this.href)) { 
            $(this).addClass('active-menu');
        }
    });
});
 

   

 
  



