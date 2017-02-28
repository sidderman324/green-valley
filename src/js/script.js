$(document).ready(function() {

  $('input,textarea').focus(function() {
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder', '');
  });
  $('input,textarea').blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });


  $('#toggler').on('click', function() {
    $('#nav').toggleClass('main-nav--hidden');
    $('.outliner').toggleClass('outliner--active');
  });

  $('.outliner').on('click', function() {
    $('#nav').toggleClass('main-nav--hidden');
    $('.outliner').toggleClass('outliner--active');
  });


  $('.rest-option').owlCarousel({
    items: 1,
    touchDrag: false,
    pullDrag: false,
  });

  $('.rest-type-switcher__head').owlCarousel({
    items: 1,
    touchDrag: false,
    pullDrag: false,
  });

  $('.type-tab__link').on('click', function(event) {
    event.preventDefault();
    if (!$(this).hasClass('type-tab__link--active')) {
      $('.type-tab__link').toggleClass('type-tab__link--active');
    }
  });

  $('#restFamily').click(function() {
    $('.rest-option').trigger('prev.owl.carousel', [200]);
    $('.rest-type-switcher__head').trigger('prev.owl.carousel', [200]);
  });

  $('#restCompany').click(function() {
    $('.rest-option').trigger('next.owl.carousel', [200]);
    $('.rest-type-switcher__head').trigger('next.owl.carousel', [200]);
  });


  $('#gallery-preview').owlCarousel({
    loop: true,
    center: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 6
      }
    }
  });

  $('#gallery-preview img').on('click', function(event) {
    var imgSrc = $(this).attr('src');
    $(this).addClass('center');
    $('#gallery-main-img').attr('src', imgSrc);
  });



  function reviewGallery() {

    var windowWidth = $(window).width();
    if (windowWidth < 1199) {
      $('.review-card:nth-child(3)').addClass('review-card--hidden');
      $('.review-card:nth-child(4)').addClass('review-card--hidden');
      $('.review-card:nth-child(5)').addClass('review-card--hidden');
      $('.review-card:nth-child(6)').addClass('review-card--hidden');
      $('#reviewCard').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      $('#reviewCard').find('.owl-stage-outer').children().unwrap();
    } else {
      $('#reviewCard').owlCarousel({
        items: 2,
        loop: true,
      });
      $('.review-card').removeClass('review-card--hidden');
    }
    console.log(windowWidth);
  }

  $(document).ready(reviewGallery);
  $(window).resize(reviewGallery);


  $('#reviewAll').on('click', function(event) {
    event.preventDefault();
    $('#reviewCard').trigger('destroy.owl.carousel');
    $('.review__card-wrapper').css({
      "width": "100%",
    });
    $('.review__card-wrapper  .owl-stage-outer').css({
      "width": "100%",
      "display": "flex",
      "flex-direction": "row",
      "flex-wrap": "wrap",
      "justify-content": "center",
      "align-items": "center",
    });
    $('.review__arrow-btn').css({
      "display": "none",
    });
    $('#reviewAll').css({
      "display": "none",
    });
    $('.review-card').fadeIn(400).css('display', 'flex');
  });

  $('#singleRoomGallery').owlCarousel({
    items: 1,
    loop: true,
  });

  $('#arrowNext').click(function(e) {
    e.preventDefault();
    $('#reviewCard').trigger('next.owl.carousel', [300]);
    $('#singleRoomGallery').trigger('next.owl.carousel', [300]);
  });

  $('#arrowPrev').click(function(e) {
    e.preventDefault();
    $('#reviewCard').trigger('prev.owl.carousel', [300]);
    $('#singleRoomGallery').trigger('prev.owl.carousel', [300]);
  });


  $('#offer').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
  });


  $('#loupe').on('click', function(e) {
    e.preventDefault();
    $('.modal__img').attr('src', $('#singleRoomGallery .active .room-description__photo-item').attr('src'));
    $('#modal').fadeIn(400).css({
      "display": "flex",
    })
    $('.modal').fadeIn(400).css({
      "display": "flex",
    })
  });

  $('#loupeClose').on('click', function(e) {
    e.preventDefault();
    $('#modal').fadeOut(400).css({
      "display": "none",
    })
    $('.modal').fadeIn(400).css({
      "display": "none",
    })
  });

  $('.modal').on('click', function(e) {
    e.preventDefault();
    $('#modal').fadeOut(400).css({
      "display": "none",
    })
    $('.modal').fadeIn(400).css({
      "display": "none",
    })
  });

  $('.reach-us__map-mask').on('click', function(e) {
    e.preventDefault();
    $(this).css({
      "display": "none",
    })
  });


  // Форма бронирования


  $('.placement-type__label').on('click', function(event) {
    event.preventDefault();
    if (!$(this).hasClass('placement-type__label--active')) {
      $('.placement-type__label').toggleClass('placement-type__label--active');
      $('.cottage-type__list').toggleClass('cottage-type__list--active');
      $('.cottage-type__list a:first-child > span').addClass('cottage-type__text--active');
      $('.cottage-type__title').toggleClass('cottage-type__title--active');
      $('.cottage-advantages').toggleClass('cottage-advantages--active');
      $('.cottage-advantages--active div:first-child').addClass('cottage-advantages__item--active');
    }
  });

  $(function() {
    $('.cottage-type__text').on('click', function(event) {
      event.preventDefault();
      $('.cottage-type__text').removeClass('cottage-type__text--active');
      $('.cottage-advantages__item').removeClass('cottage-advantages__item--active');
      !$(this).addClass('cottage-type__text--active');
      var link = $(this).parent().attr('href');
      $(link).addClass('cottage-advantages__item--active');
    });
  });

  $(function() {
    $('.payment-type__on-arrival').on('click', function() {
      $('.payment-type__on-arrival > .payment-type__subtitle').addClass('payment-type__subtitle--active');
      $('.payment-type__bank-card > .payment-type__subtitle').removeClass('payment-type__subtitle--active');
    })
    $('.payment-type__bank-card').on('click', function() {
      $('.payment-type__bank-card > .payment-type__subtitle').addClass('payment-type__subtitle--active');
      $('.payment-type__on-arrival > .payment-type__subtitle').removeClass('payment-type__subtitle--active');
    })
  });




  var jVal = {

    // Валидация имени
    'Name': function() {
      $('body').append('<div id="nameInfo" class="info"></div>');
      var nameInfo = $('#nameInfo');
      var ele = $('#firstName');
      var pos = ele.offset();
      nameInfo.css({
        top: pos.top - 3,
        left: pos.left + ele.width() + 15
      });
      var patt = /^[А-Яа-яЁё]+$/i;
      if (!patt.test(ele.val())) {
        jVal.errors = true;
        ele.removeClass('input-validate__success').addClass('input-validate__error');
      } else {
        ele.removeClass('input-validate__error').addClass('input-validate__success');
      }
    },
    // Валидация фамилии
    'surName': function() {
      $('body').append('<div id="nameInfo" class="info"></div>');
      var nameInfo = $('#nameInfo');
      var ele = $('#surName');
      var pos = ele.offset();
      nameInfo.css({
        top: pos.top - 3,
        left: pos.left + ele.width() + 15
      });
      var patt = /^[А-Яа-яЁё]+$/i;
      if (!patt.test(ele.val())) {
        jVal.errors = true;
        ele.removeClass('input-validate__success').addClass('input-validate__error');
      } else {
        ele.removeClass('input-validate__error').addClass('input-validate__success');
      }
    },
    // Валидация телефона
    'phone': function() {
      $('body').append('<div id="emailInfo" class="info"></div>');
      var emailInfo = $('#emailInfo');
      var ele = $('#phone');
      var pos = ele.offset();
      emailInfo.css({
        top: pos.top - 3,
        left: pos.left + ele.width() + 15
      });
      var patt = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/i;
      if (!patt.test(ele.val())) {
        jVal.errors = true;
        ele.removeClass('input-validate__success').addClass('input-validate__error');
      } else {
        ele.removeClass('input-validate__error').addClass('input-validate__success');
      }
    },
    // Валидация почтового адреса
    'email': function() {
      $('body').append('<div id="emailInfo" class="info"></div>');
      var emailInfo = $('#emailInfo');
      var ele = $('#eMail');
      var pos = ele.offset();
      emailInfo.css({
        top: pos.top - 3,
        left: pos.left + ele.width() + 15
      });
      var patt = /^.+@.+[.].{2,}$/i;
      if (!patt.test(ele.val())) {
        jVal.errors = true;
        ele.removeClass('input-validate__success').addClass('input-validate__error');
      } else {
        ele.removeClass('input-validate__error').addClass('input-validate__success');
      }
    },
    // Номер карты
    'cardNumber': function() {
      $('body').append('<div id="emailInfo" class="info"></div>');
      var emailInfo = $('#emailInfo');
      var ele = $('#cardNumber');
      var pos = ele.offset();
      emailInfo.css({
        top: pos.top - 3,
        left: pos.left + ele.width() + 15
      });
      var patt = /^\d{16}$/i;
      if (!patt.test(ele.val())) {
        jVal.errors = true;
        ele.removeClass('input-validate__success').addClass('input-validate__error');
      } else {
        ele.removeClass('input-validate__error').addClass('input-validate__success');
      }
    },
    // Держатель карты
    'cardOwner': function() {
      $('body').append('<div id="emailInfo" class="info"></div>');
      var emailInfo = $('#emailInfo');
      var ele = $('#cardOwner');
      var pos = ele.offset();
      emailInfo.css({
        top: pos.top - 3,
        left: pos.left + ele.width() + 15
      });
      var patt = /^[a-zA-Z\s]+$/i;
      if (!patt.test(ele.val())) {
        jVal.errors = true;
        ele.removeClass('input-validate__success').addClass('input-validate__error');
      } else {
        ele.removeClass('input-validate__error').addClass('input-validate__success');
      }
    },
    // CVV код
    'cardCVV': function() {
      $('body').append('<div id="emailInfo" class="info"></div>');
      var emailInfo = $('#emailInfo');
      var ele = $('#cardCVV');
      var pos = ele.offset();
      emailInfo.css({
        top: pos.top - 3,
        left: pos.left + ele.width() + 15
      });
      var patt = /^\d{3,4}$/i;
      if (!patt.test(ele.val())) {
        jVal.errors = true;
        ele.removeClass('input-validate__success').addClass('input-validate__error');
      } else {
        ele.removeClass('input-validate__error').addClass('input-validate__success');
      }
    },
    // Срок действия карты
    'cardValidPeriod': function() {
      $('body').append('<div id="emailInfo" class="info"></div>');
      var emailInfo = $('#emailInfo');
      var ele = $('#cardValidPeriod');
      var pos = ele.offset();
      emailInfo.css({
        top: pos.top - 3,
        left: pos.left + ele.width() + 15
      });
      var patt = /(\d{2})+(\/\d{2})?/i;
      if (!patt.test(ele.val())) {
        jVal.errors = true;
        ele.removeClass('input-validate__success').addClass('input-validate__error');
      } else {
        ele.removeClass('input-validate__error').addClass('input-validate__success');
      }
    }
  };
  // Персональная информация
  $('#firstName').change(jVal.Name);
  $('#surName').change(jVal.surName);
  $('#phone').change(jVal.phone);
  $('#eMail').change(jVal.email);
  // Форма оплаты
  $('#cardNumber').change(jVal.cardNumber);
  $('#cardOwner').change(jVal.cardOwner);
  $('#cardCVV').change(jVal.cardCVV);
  $('#cardValidPeriod').change(jVal.cardValidPeriod);

  $('.pay-now__cvv-question').hover(
    function() {
      $('.pay-now__cvv-info').addClass('pay-now__cvv-info--active');
    },
    function() {
      $('.pay-now__cvv-info').removeClass('pay-now__cvv-info--active');
    });



  $(function() {
      var pickerStart = new Pikaday({
      field: document.getElementById('start'),
      onSelect: function() {
        var startDate = pickerStart.getDate();
        var calcStart = moment(startDate).toDate();
        var startMS = moment(calcStart).valueOf();
        $('#startD').text( calcStart.getDate() );
        $('#startM').text( calcStart.getMonth() + 1 );
        $('#startY').text( calcStart.getFullYear() );
        $('#start').attr('value', startMS);
        }
      });
      var pickerEnd = new Pikaday({
      field: document.getElementById('end'),
      onSelect: function() {
        var endDate = pickerEnd.getDate();
        var calcEnd = moment(endDate).toDate();
        var endMS = moment(calcEnd).valueOf();
        $('#endD').text( calcEnd.getDate() );
        $('#endM').text( calcEnd.getMonth() + 1 );
        $('#endY').text( calcEnd.getFullYear() );
        $('#end').attr('value', endMS);
        }
      });
  });

  function totalCost() {
    var placePrice = $('.cottage-type__list--active .cottage-type__text--active').next().attr("value");
    var start = $('#start').attr('value');
    var end = $('#end').attr('value');
    var days = (end - start) / (1000 * 60 * 60 * 24);
    if (days < 1) {
      $('#errorCause').text( 'выберите корректную дату' );
      $('.total-price__text').fadeIn(400);
      $('#errorCause').attr('href', '#restPeriod');
    }
    if ( $('.personal-info__item').hasClass('input-validate__error') ) {
      $('#errorCause').text( 'введите корректные данные' );
      $('#errorCause').attr('href', '#personalInfo');
    }
    if ( $('.personal-info__item').val()!='' ) {
      $('#errorCause').text( 'введите корректные данные' );
      $('#errorCause').attr('href', '#personalInfo');
    }
    if ( $('.personal-info__item').hasClass('input-validate__success') ) {
      $('.total-price__text').fadeOut(400);
    }
    var totalCost = days * placePrice;
    if (totalCost < 1) {
      $('#totalCost').text ( '-' );
    } else {
      $('#totalCost').text ( totalCost + ' руб' );
    }

  }

  $(document).ready(totalCost);
  $(document).click(totalCost);
  $('.placement-type__item').click(totalCost);
  $('.cottage-type__list').click(totalCost);
  $('.rest-period__item').click(totalCost);

});
