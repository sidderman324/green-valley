$(document).ready(function() {

   $('input,textarea').focus(function(){
     $(this).data('placeholder',$(this).attr('placeholder'))
     $(this).attr('placeholder','');
   });
   $('input,textarea').blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
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
    responsive: {
      320: {
        items: 1,
        center: true,
        loop: true,
      },
      768: {
        center: true,
        loop: true,
        items: 6,
      }
    }
  });


  // $('#gallery-preview img').on('click', function(event) {
  //   var imgSrc = $(this).attr('src');
  //   $(this).addClass('center');
  //   $('#gallery-main-img').attr('src', imgSrc);
  // });

  $('#reviewCard').owlCarousel({
    items: 2,
    loop: true,
    startPosition: 2,
  });

  $(function() {
    var windowWidth = $(window).width();
    if (windowWidth < 1199) {
      $('#reviewCard').trigger('destroy.owl.carousel');
    }
    if (windowWidth > 1199) {
      $('#reviewCard').trigger('add.owl.carousel');
    }
  });


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

      var cost = $('.cottage-type__text--active').next().attr("value");
      console.log(cost);
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

  $(function(){
    $('.payment-type__on-arrival').on('click', function(){
      $('.payment-type__on-arrival > .payment-type__subtitle').addClass('payment-type__subtitle--active');
      $('.payment-type__bank-card > .payment-type__subtitle').removeClass('payment-type__subtitle--active');
    })
    $('.payment-type__bank-card').on('click', function(){
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
      var patt = /^[А-Яа-яЁё]+$/i ;
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
      var patt = /^[А-Яа-яЁё]+$/i ;
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
      var patt = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/i ;
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
});
