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

  galleryResize();

  function galleryResize() {
	  if($(window).width() < 768) {
	   	$('.gallery__main-wrapper').hide();
      var widthSlider = parseInt($('#gallery-preview').css('width')),
      heightMini = widthSlider / 1.56;
	   	$('#gallery-preview').css('height', heightMini);
      $('#gallery-preview  .owl-stage-outer').css('height', heightMini);
      $('#gallery-preview  .gallery__photo-thumbs').css('height', heightMini);
	  }
   	else {
	   	$('.gallery__main-wrapper').show();
	  	var widthMain = parseInt($('.gallery__main-wrapper').css('width')),
	  	heightMain = widthMain / 2.36;
	  	$('.gallery__main-wrapper').css('height', heightMain);
      $('.gallery__main-wrapper  .gallery__main-photo').css('height', heightMain);

	  	var widthSlider = parseInt($('#gallery-preview').css('width')),
	  	heightSlider = widthSlider / 11.2;
	  	$('#gallery-preview').css('height', heightSlider);
      $('#gallery-preview .gallery__item').css('height', heightSlider);
      $('#gallery-preview .gallery__photo-thumbs').css('height', heightSlider);
	  }
  };

  $(document).ready(galleryResize);
  $(window).resize(galleryResize);


  $('#gallery-preview').owlCarousel({
    center: true,
    startPosition: 4,
    // loop: true,
    responsive : {
      0 : {
        items: 1,
      },
      768 : {
        items: 6,
      }
    }
  });

  $('#gallery-preview').on('click', '.owl-item', function (event) {
    // var countClon = $('#gallery-preview  .cloned').length;
    var indexItem = $(this).index();
    // console.log(countClon);
    // console.log(indexItem);
    $('#gallery-preview').trigger('to.owl.carousel', indexItem);
  });



  $('#gallery-preview img').on('click', function(event) {
    var imgSrc = $(this).attr('src');
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

  var dateValid;

  $(function() {
      var pickerStart = new Pikaday({
      field: document.getElementById('start'),
      onSelect: function() {
        var startDate = pickerStart.getDate();
        var calcStart = moment(startDate).toDate();
        var startFormat = moment(calcStart).format("dddd, MMMM D YYYY");
        var startMS = moment(calcStart).valueOf();
        $('#startD').text( calcStart.getDate() );
        $('#startM').text( calcStart.getMonth() + 1 );
        $('#startY').text( calcStart.getFullYear() );
        $('#start').attr('value', startMS);
        $('#start').attr('name', startFormat);
        dateCheck();
        }
      });
      var pickerEnd = new Pikaday({
      field: document.getElementById('end'),
      onSelect: function() {
        var endDate = pickerEnd.getDate();
        var calcEnd = moment(endDate).toDate();
        var endFormat = moment(calcEnd).format("dddd, MMMM D YYYY");
        var endMS = moment(calcEnd).valueOf();
        $('#endD').text( calcEnd.getDate() );
        $('#endM').text( calcEnd.getMonth() + 1 );
        $('#endY').text( calcEnd.getFullYear() );
        $('#end').attr('value', endMS);
        $('#end').attr('name', endFormat);
        dateCheck();
        }
      });
  });


  function dateCheck() {
    $('.total-price__text').fadeIn(400);
    var start = $('#start').attr('value');
    var end = $('#end').attr('value');
    var endCalc = end / (1000 * 60 * 60 * 24);
    var days = (end - start) / (1000 * 60 * 60 * 24);
    dateValid = 0;
    if (days > 0) {
      dateValid = 3;
    } else {
      dateValid = 0
    }
    if (dateValid == 3) {
      $('.total-price__text').fadeOut(400);
    } else {
      $('#errorCause').text( 'выберите корректную дату' );
      $('.total-price__text').fadeIn(400);
      $('#errorCause').attr('href', '#restPeriod');
    }
    totalCost();
  }


  function totalCost() {
    var placePrice = $('.cottage-type__list--active .cottage-type__text--active').next().attr("value");
    var start = $('#start').attr('value');
    var end = $('#end').attr('value');
    var days = (end - start) / (1000 * 60 * 60 * 24);
    var today = new Date().getTime();
    var totalCost = days * placePrice;
    if (totalCost < 1) {
      $('#totalCost').text ( '-' );
    } else {
      $('#totalCost').text ( totalCost + ' руб' );
    }
    if ( $('.personal-info__item').hasClass('input-validate__error') ) {
      $('.total-price__text').fadeIn(400);
      $('#errorCause').text( 'выберите корректные данные' );
      $('#errorCause').attr('href', '#personalInfo');
    } else if ( $('.personal-info__item').hasClass('input-validate__success') ) {
      $('.total-price__text').fadeOut(400);
    } else if (dateValid ==0 ) {
      $('#errorCause').text( 'выберите корректную дату' );
      $('.total-price__text').fadeIn(400);
      $('#errorCause').attr('href', '#restPeriod');
    }
  }

  $('#errorCause').click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop : destination }, 800);
    return false;
  });

  $(document).ready(totalCost);
  $(document).click(totalCost);
  $('.placement-type__item').click(totalCost);
  $('.cottage-type__list').click(totalCost);
  $('.rest-period__item').click(totalCost);



  $('#booking').on('click', function(event){
    event.preventDefault();
    var start = $('#start').attr('name');
    var end = $('#end').attr('name');
    var placeType = $('.placement-type__label--active > input').attr('name');
    var placeItem = $('.cottage-type__list--active .cottage-type__text--active').next().attr("name");
    var firstName = $('#firstName:text').val();
    var surName = $('#surName:text').val();
    var phone = $('#phone:text').val();
    var eMail = $('#eMail:text').val();

    console.log(start);
    console.log(end);
    console.log(placeType);
    console.log(placeItem);
    console.log(firstName);
    console.log(surName);
    console.log(phone);
    console.log(eMail);
    if ( $('#onArrival').hasClass('payment-type__subtitle--active')) {
      console.log('Оплата по приезду')
    } else if ( $('#bankCard').hasClass('payment-type__subtitle--active')) {
      var cardNumber = $('#cardNumber:text').val();
      var cardOwner = $('#cardOwner:text').val();
      var cardCVV = $('#cardCVV:text').val();
      var cardValidPeriod = $('#cardValidPeriod:text').val();
      console.log(cardNumber);
      console.log(cardOwner);
      console.log(cardCVV);
      console.log(cardValidPeriod);
    }
  });


});
