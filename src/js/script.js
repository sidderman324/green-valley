$(document).ready(function(){

  $('#toggler').on('click',function(){
    $('#nav').toggle(400);
  });

// Табы промо
  $('.type-tab__link').on('click', function(event){
    event.preventDefault();
      if(!$(this).hasClass('type-tab__link--active')) {
        $('.type-tab__link').toggleClass('type-tab__link--active');
        $('.rest-type-head').toggleClass('rest-type-head--hidden');
        $('.rest-option__item').toggleClass('rest-option__item--hidden');
      }
  });

  $('#gallery-preview').owlCarousel({
    center: true,
    loop: true,
    items: 6,
  });

  // $(document).on('click', '.owl-item', function(){
  //       var carousel = $('.owl-carousel');
  //       n = $(this).index();
  //       console.log(n);
  //       carousel.toggle('to.owl.carousel', n);
  // });

  $('#gallery-preview img').on('click', function(event){
    var imgSrc = $(this).attr('src');
    $(this).addClass('center');
    $('#gallery-main-img').attr('src', imgSrc);
  });

  $('#reviewCard').owlCarousel({
    items: 2,
    responsive : {

      1199 : {
        items: 2,
        loop: true,
        startPosition: 2,
      }
    }

  });

  $('#reviewAll').on('click', function(event){
    event.preventDefault();
    $('#reviewCard').trigger('destroy.owl.carousel');
    $('.review__card-wrapper').css({
      "width": "100%",
    });
    $('.owl-stage-outer').css({
      "width" : "100%",
      "display" : "flex",
      "flex-direction" : "row",
      "flex-wrap" : "wrap",
      "justify-content" : "center",
    });
    $('.review__arrow-btn').css({
      "display" : "none",
    });
    $('.review-card').fadeIn(400).css('display', 'flex');
  });

  $('#singleRoomGallery').owlCarousel({
    items: 1,
    loop: true,
  });

  $('#arrowNext').click(function(e){
    e.preventDefault();
    $('#reviewCard').trigger('next.owl.carousel',[300]);
    $('#singleRoomGallery').trigger('next.owl.carousel',[300]);
  });

  $('#arrowPrev').click(function(e){
    e.preventDefault();
    $('#reviewCard').trigger('prev.owl.carousel',[300]);
    $('#singleRoomGallery').trigger('prev.owl.carousel',[300]);
  });

});
