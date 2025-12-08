

$(document).ready(function(){

var pagetitle =$('#pagetitle').val();
  if(pagetitle=='rose-nectar'){
      $('.jdgm-rev-widg__summary').html('');
      $('.jdgm-rev-widg__summary').html('<img src="https://cdn.shopify.com/s/files/1/0091/8444/4495/files/star-pic.png?v=1712962883" height="" width="" alt="" ><br>\
       <span class="review-count">Based on 21,350 reviews </span>');
  }
  if(pagetitle=='rose-yummies-world-s-only-rose-gummies'){
    $('.jdgm-rev-widg__summary').html('');
     $('.jdgm-rev-widg__summary').html('<img src="https://cdn.shopify.com/s/files/1/0091/8444/4495/files/star-pic.png?v=1712962883"><br><span class="review-count">Based on 7,490 reviews </span>');
  }
  if(pagetitle=='rose-mist'){
    $('.jdgm-rev-widg__summary').html('');
    $('.jdgm-rev-widg__summary').html('<img src="https://cdn.shopify.com/s/files/1/0091/8444/4495/files/star-pic.png?v=1712962883"><br><span class="review-count">Based on 4,032 reviews </span>');
  }
 
  
$('#sec-1').removeClass('hide-class');
$('#sec-2').addClass('hide-class');
$('body').on('change', '.custom-radio-button-variant', function(event) {
 var option1 =$('input[name="option1"]:checked').val();
 
  if(option1=='4 Fills 8oz'){
     $('#sec-2').removeClass('hide-class');
     $('#sec-1').addClass('hide-class');
     $('#sec-3').addClass('hide-class');
    
  }
  else if(option1=='Rose Mist 2oz'){
      $('#sec-2').addClass('hide-class');
      $('#sec-3').addClass('hide-class');
      $('#sec-1').removeClass('hide-class');
    
  } 
  else if(option1=='Rose Mist Set 10oz'){
      $('#sec-1').addClass('hide-class');
      $('#sec-2').addClass('hide-class');
      $('#sec-3').removeClass('hide-class');
  }
  else{
    $('#sec-1').addClass('hide-class');
    $('#sec-2').addClass('hide-class');
    $('#sec-3').addClass('hide-class');
  }
});
  
  $('.accordion-cls').click(function(){
    var getattr=  $(this).attr('open'); 
    $('.accordion-cls').removeAttr('open');
    if(getattr=='open'){ $(this).removeAttr('open'); }else{ $(this).addAttr('open'); }
     return false;
  });

 if(location.pathname.includes("products")){
    setTimeout(()=>{
               if(location.pathname.includes("pure-rose-mis"))
    {
      $(".spr-summary-actions-togglereviews").text("Based on 4,032 reviews");
      function checkFlag() {
        if($(".spr-badge-caption").length  == 0) {
          window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
        } else {
          $(".spr-badge-caption").text(" 4,032 reviews")
          $(".spr-summary-actions-togglereviews").text("Based on 4,032 reviews");
          window.setTimeout(checkFlag, 100);
          /* do something*/
        }
      }
      checkFlag();
      $(".spr-badge-caption").text(" 21,350 reviews")

    }else if(location.pathname.includes("nectar"))
    {

      function checkFlag() {
        if($(".spr-badge-caption").length  == 0) {
          window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
        } else {
          $(".spr-badge-caption").text(" 21,350 reviews");
          $(".spr-summary-actions-togglereviews").text("Based on 21,350 reviews")
          window.setTimeout(checkFlag, 100);
          /* do something*/
        }
      }
      checkFlag();
      $(".spr-summary-actions-togglereviews").text("Based on 21,350 reviews")

    }
      else {
        function checkFlag() {
          if($(".spr-badge-caption").length  == 0) {
            window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
          } else {
            $(".spr-badge-caption").text(" 7,490 reviews")
            $(".spr-summary-actions-togglereviews").text("Based on 7,490 reviews")
            window.setTimeout(checkFlag, 100);
            /* do something*/
          }
        }
        checkFlag();
        $(".spr-summary-actions-togglereviews").text("Based on 7,490 reviews")
      }
  }, 10)
  setTimeout(()=>{

             if(location.pathname.includes("pure-rose-mis"))
  {
    $(".spr-summary-actions-togglereviews").text("Based on 4,032 reviews")
    function checkFlag() {
      if($(".spr-badge-caption").length  == 0) {
        window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
      } else {
        $(".spr-badge-caption").text(" 4,032 reviews")
        $(".spr-summary-actions-togglereviews").text("Based on 4,032 reviews")
        window.setTimeout(checkFlag, 100);
        /* do something*/
      }
    }
    checkFlag();

  }else if(location.pathname.includes("nectar"))
  {

    function checkFlag() {
      if($(".spr-badge-caption").length  == 0) {
        window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
      } else {
        $(".spr-badge-caption").text("21,350 reviews")
        $(".spr-summary-actions-togglereviews").text("Based on 21,350 reviews")
        /* do something*/
      }
    }
    checkFlag();
    $(".spr-summary-actions-togglereviews").text("Based on 21,350 reviews")

  }
    else {
      function checkFlag() {
        if($(".spr-badge-caption").length  == 0) {
          window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
        } else {
          $(".spr-badge-caption").text(" 7,490 reviews")
          $(".spr-summary-actions-togglereviews").text("Based on 7,490 reviews")
          /* do something*/
        }
      }
      checkFlag();
      $(".spr-summary-actions-togglereviews").text("Based on 7,490 reviews")
    }
}, 10)

}
  
  
  let radio = $("#ProductSelect-option-0 input[type=radio]");
 
  let values = "";
  var labels = $(".option-name-choose-qty label.text-center");
  Array.from(radio).forEach((element)=>{
    if(element.checked)
    {
    	values = element.dataset.option;
      
    }
  });
//$.noConflict();
  
  if(values === "4 Fills 8oz")
  {
    Array.from(labels).forEach((element, index)=>{
      if(element.dataset.option === "Single")
      {
      	$(element).hide();
      }
      else if(element.dataset.option === "2-pack")
      {
      	$(element).hide();
      }
      else if(element.dataset.option === "3-pack")
      {
      	$(element).hide();
      }
      else
      {
        
        
       // $(".class--4").prop("checked", true).prop("checked", true).trigger("change");
        $($(".single-option-selector__radio")[0]).prop("checked", true).trigger("change");
        setTimeout(function(){
        var labels = $(".option-name-choose-qty label.text-center");
         
          
        Array.from(labels).forEach((element, index)=>{
          
          if(element.dataset.option == "4 Fills 8oz"){
			
            $(element).find(".dev-high-bg .option-price").text("$52");

          }

        });
        
        }, 500)
        
        //$("#ProductSelect-option-choose-qty-4").prop("checked", true).trigger("change");
       
      	$(element).show();
      }
      
    });
  }
  else 
    if(values === "Rose Mist 2oz")
    {
      Array.from(labels).forEach((element, index)=>{
        
        if(element.dataset.option === "8 Fills")
        {
          $(element).hide();
        }
        else if(element.dataset.option === "4 Fills")
        {
          $(element).hide();
        }
        else if(element.dataset.option === "12 Fills")
        {
          $(element).hide();
        }
        else
        {
          
          //$(".class--Single").prop("checked", true).prop("checked", true).trigger("change");
         
          $($(".single-option-selector__radio")[1]).prop("checked", true).trigger("change");
          
          setTimeout(function(){
          	var labels = $(".option-name-choose-qty label.text-center");
          Array.from(labels).forEach((element, index)=>{
            if(element.dataset.option == "Rose Mist 2oz"){
				
              $(element).find(".dev-high-bg .option-price").text("$30");

            }

          });
          }, 500)
          
          $(element).show();
        }

      });

    }


})
$(document).on("click", '.single-option-radio label' ,function(e){
	
  var labels = $(".option-name-choose-qty label.text-center");
  
  if(this.dataset.option === "4 Fills 8oz")
  {
   
    Array.from(labels).forEach((element, index)=>{
      if(element.dataset.option === "Single")
      {
      	$(element).hide();
      }
      else if(element.dataset.option === "2-pack")
      {
      	$(element).hide();
      }
      else if(element.dataset.option === "3-pack")
      {
      	$(element).hide();
      }
      else
      {
        
        $(element).show();
        $(".class--4").prop("checked", true).trigger("change");
        
        
        //$("#ProductSelect-option-choose-qty-4").prop("checked", true).trigger("change");
       
      	
      }
      
    });
    let thisAtrr = this;
     setTimeout(function(){
      $(thisAtrr).find(".option-price").text("$52");
      }, 500)
  }
  else 
    if(this.dataset.option === "Rose Mist 2oz")
    {

      
      Array.from(labels).forEach((element, index)=>{
        
        if(element.dataset.option === "8 Fills")
        {
          $(element).hide();
        }
        else if(element.dataset.option === "4 Fills")
        {
          $(element).hide();
        }
        else if(element.dataset.option === "12 Fills")
        {
          $(element).hide();
        }
        else
        {
          $(element).show();
          $(".class--Single").prop("checked", true).trigger("change");
          
          
          
        }

      });
      //debugger;
      let thisAtrr = this;
      setTimeout(function(){
      $(thisAtrr).find(".option-price").text("$30");
      }, 500)
      

    }
})

$(document).on("click", '.radio-wrapper .text-center', function(e){
 
  if(this.dataset.option.includes("Fills")){
    let price = $(this).find(".option-price").text();
     if(price != ""){
      setTimeout(function(){
        let labels = $("#ProductSelect-option-0 .text-center")
        Array.from(labels).forEach((element, index)=>{
          if(element.dataset.option == "4 Fills 8oz"){
            $(element).find(" .option-price").text(price);
          }
        });
      }, 500)
    }
    else{
      let attribute = this;
      setTimeout(function(){
        let price = $(attribute).find(".option-price").text();
        let labels = $("#ProductSelect-option-0 .text-center")
        Array.from(labels).forEach((element, index)=>{
          if(element.dataset.option == "4 Fills 8oz"){
            $(element).find(".option-price").text(price);
           }
          });
      }, 500)
    }

  }
  else{
  	
    if(this.dataset.option.includes("Single") || this.dataset.option.includes("2-pack") ||  this.dataset.option.includes("3-pack")){
    let price = $(this).find(".option-price").text();
      if(price != ""){
        setTimeout(function(){
          let labels = $("#ProductSelect-option-0 .text-center")
          Array.from(labels).forEach((element, index)=>{
            if(element.dataset.option == "Rose Mist 2oz"){
              $(element).find(".option-price").text(price);
            }

          });
        }, 500)
      }
      else{
        let attribute = this;
        setTimeout(function(){ 
          let price = $(attribute).find(".option-price").text();
          let labels = $("#ProductSelect-option-0 .text-center")
          Array.from(labels).forEach((element, index)=>{
            if(element.dataset.option == "Rose Mist 2oz"){

              $(element).find(".option-price").text(price);

            }

          });
        }, 500)
      }
    }
  }
})





