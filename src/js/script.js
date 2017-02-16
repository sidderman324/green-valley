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
});

$('#gallery-preview').on('click', '.owl-item', function(e) {
    e.preventDefault();
    var carousel = $('#gallery-preview').data('owl.carousel');
    carousel.to(carousel.relative($(this).index()));
});

$(document).on('click', '.owl-item', function(){
      var carousel = $('.owl-carousel')
      n = $(this).index();
      console.log(n)
      carousel.trigger('owl.goTo', n);
});


$('#gallery-preview img').on('click', function(event){
  // $(this)
  var imgSrc = $(this).attr('src');
  // n = $(this).index();
  // console.log(n);
  $('#gallery-main-img').attr('src', imgSrc);
});
