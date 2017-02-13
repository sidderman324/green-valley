$(document).ready(function(){

  $('#toggler').on('click',function(){
    $('#nav').toggle(400);
  });

// Табы промо
  $('.type-tab__link').on('click', function(event){
    event.preventDefault();
    $('.type-tab__link').toggleClass('type-tab__link--active');
    $('.rest-type-head').toggleClass('rest-type-head--hidden');
    $('.rest-option__item').toggleClass('rest-option__item--hidden');
  });

// Показать все отзывы
  $('#reviewAll').on('click', function(event){
    event.preventDefault();
    $('.review-card').fadeIn(400).css('display', 'flex');
  });
});
