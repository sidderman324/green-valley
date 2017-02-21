$(document).ready(function(){

  $('#toggler').on('click',function(){
    $('#nav').toggle(400);
  });


  $('.rest-option').owlCarousel({
    items : 1,
    touchDrag: false,
    pullDrag: false,
  });

  $('.rest-type-switcher__head').owlCarousel({
    items : 1,
    touchDrag: false,
    pullDrag: false,
  });

  $('.type-tab__link').on('click', function(event){
    event.preventDefault();
    if(!$(this).hasClass('type-tab__link--active')) {
      $('.type-tab__link').toggleClass('type-tab__link--active');
    }
  });

  $('#restFamily').click(function(){
    $('.rest-option').trigger('prev.owl.carousel', [200]);
    $('.rest-type-switcher__head').trigger('prev.owl.carousel', [200]);
  });

  $('#restCompany').click(function(){
    $('.rest-option').trigger('next.owl.carousel', [200]);
    $('.rest-type-switcher__head').trigger('next.owl.carousel', [200]);
  });



  $('#gallery-preview').owlCarousel({
    responsive : {
      320 : {
        items: 1,
        center: true,
        loop: true,
      },
      768 : {
        center: true,
        loop: true,
        items: 6,
      }
    }
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
    loop: true,
    startPosition: 2,
  });

  $(function(){
    var windowWidth = $(window).width();
      if ( windowWidth < 1199 ) {
        $('#reviewCard').trigger('destroy.owl.carousel');
      }
      if ( windowWidth > 1199 ) {
        $('#reviewCard').trigger('add.owl.carousel');
      }
  });



  $('#reviewAll').on('click', function(event){
    event.preventDefault();
    $('#reviewCard').trigger('destroy.owl.carousel');
    $('.review__card-wrapper').css({
      "width": "100%",
    });
    $('.review__card-wrapper  .owl-stage-outer').css({
      "width" : "100%",
      "display" : "flex",
      "flex-direction" : "row",
      "flex-wrap" : "wrap",
      "justify-content" : "center",
      "align-items" : "center",
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


  $('#offer').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
  });


  $('.placement-type__label').on('click', function(event){
    event.preventDefault();
    if(!$(this).hasClass('placement-type__label--active')) {
      $('.placement-type__label').toggleClass('placement-type__label--active');
    }
  });


  $('.cottage-type__text').on('click', function(event){
    event.preventDefault();
    $('.cottage-type__text').removeClass('cottage-type__text--active');
    !$(this).addClass('cottage-type__text--active');
  });

  $('#loupe').on('click', function(e){
    e.preventDefault();
    $('.modal__img').attr('src', $('#singleRoomGallery .active .room-description__photo-item').attr('src'));
    $('#modal').fadeIn(800).css({
      "display" : "flex",
    })
  });

  $('#loupeClose').on('click', function(e){
    e.preventDefault();
    $('#modal').fadeOut(800).css({
      "display" : "none",
    })
  });

  $('#modal').on('click', function(e){
    e.preventDefault();
    $('#modal').fadeOut(800).css({
      "display" : "none",
    })
  });

});
