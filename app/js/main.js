try{
  $(function(){

    $('.products-slider__inner').slick();


    $(".rate-star").rateYo({
      rating: 3.6,
      starWidth: "15px",
      readOnly: true,
      ratedFill: "#ffc000",
      normalFill: "#4a3e1a",
      // spacing: "10px",
      
     });
     $(".product__rate-star").rateYo({
      rating: 3.6,
      starWidth: "12px",
      readOnly: true,
      ratedFill: "#ffc000",
      normalFill: "#4a3e1a",
      spacing: "5px",
      
     });

     var mixer = mixitup('.product__inner-box');

     $('.follower__inner').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
     });

     
    //  $(".product__rate-star").rateYo({
 
    //   "rating" : 3.2,
    //   "starSvg": "<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">"+
    //                "<path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379"+
    //                          " 4.246-3.611-2.625-3.612 2.625"+
    //                          " 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833"+
    //                          " 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388"+
    //                          " 7.416 5.388-2.833-8.718"+
    //                          " 7.417-5.389h-9.167l-2.833-8.718z"></path>"+
    //               "</svg>"
    // });


  });
}catch(e){}
//-----------------------

  //----------------------
try{
  $(function(){


    $(".product__rate-star-list").rateYo({
      rating: 3.6,
      starWidth: "17px",
      readOnly: true,
      ratedFill: "#ffc000",
      normalFill: "#4a3e1a",
      spacing: "5px",
     });

    $('.js-range-slider').ionRangeSlider({
      type: "double",
      min: 0,
      max: 400,
      from: 30,
      to: 600,   
      prefix: "$",
    });
    var mixer = mixitup('.product-page__inner-box');

    $('.icon-list').on('click', function(){
      $('.product-page__inner-box .product__item').addClass('list');
      $('.icon-list').addClass('active');
      $('.icon-grid').removeClass('active');
    });
    $('.icon-grid').on('click', function(){
      $('.product-page__inner-box .product__item').removeClass('list');
      $('.icon-list').removeClass('active');
      $('.icon-grid').addClass('active');
    });

    
  });

}catch(e){}