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


// Показать все отзывы
  $('#reviewAll').on('click', function(event){
    event.preventDefault();
    $('.review-card').fadeIn(400).css('display', 'flex');
  });
});

// gallery

$('#gallery-preview').owlCarousel({
  center: true,
  loop: true,
  items: 6,
  responsive : {
    320 : {
      items: 1
    },
    // breakpoint from 768 up
    768 : {

    }
}
});

$(document).on('click', '.owl-item', function(){
      var carousel = $('.owl-carousel');
      n = $(this).index();
      console.log(n);
      carousel.toggle('to.owl.carousel', n);
});

$('#gallery-preview img').on('click', function(event){
  var imgSrc = $(this).attr('src');
  $(this).addClass('center');
  $('#gallery-main-img').attr('src', imgSrc);
});
