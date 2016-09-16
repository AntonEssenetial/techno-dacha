$(document).ready(function() {


  function createSlick(){  
    $(".responsive__slider-2, .responsive__slider-3, .responsive__slider-4").not('.slick-initialized').slick({
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1920,
          settings: "unslick"
        },
        {
          breakpoint: 916,
          variableWidth: true,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            settings: "slick"
          }
        },
        {
          breakpoint: 605,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }); 
  };
  function createSlick2() {
    $('.responsive__slider-5').not('.slick-initialized').slick({
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1920,
          settings: "unslick"
        },
        {
          breakpoint: 605,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  createSlick();
  createSlick2();
  $(window).on( 'resize', createSlick );
  $(window).on( 'resize', createSlick2 );

  // Rating stars 
  $('.c-rating').rating();

  // Active tabs
  function swtch(tab, tabActive, tabContent){
    var tab = $(tab),
        tabActive = tabActive,
        tabContent = $(tabContent);
    tab.click(function() {
      tab.removeClass(tabActive).eq($(this).index()).addClass(tabActive);
      tabContent.removeClass(tabActive).eq($(this).index()).addClass(tabActive);
    }).eq(0)
  };
  swtch('.jsTab', 'active', '.jsCont');


  // Navgoco acordion
  var acordion = $('.footer__acordion')
  acordion.navgoco({accordion: true});


  // Slick slider
  $('.slick-slider-1').slick({
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    slidesToShow: 1
  });
  $('.slick-silder-2').slick({
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 4,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1220,
        variableWidth: true,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 769,
        variableWidth: true,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 605,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
  });


  // Scroll to top
  $().click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
  });


  // Height detect funciton
  function heightDetect(){
    $().css( 
      'height', $(window).height()
    );
  };
  heightDetect();
  $(window).resize(function(){
    heightDetect();
  });


  // Width detect funciton
  // function widthDetect(){
  //   $('.main-menu__sub-menu').css( 
  //     'width', $(window).width()
  //   );
  // };
  // widthDetect();
  // $(window).resize(function(){
  //   widthDetect();
  // });
  // $(window).load(function(){
  //   widthDetect();
  // });


  // Toggle menu
  var menu = $()
  $('.jsTag').click(function(event) {
    $(this).toggleClass('active')
    menu.toggleClass('active animated fadeInUp');
    // $('.menu').toggleClass('active animated fadeInUp');
  });


  // Custom scroll
  // var scrolVar = $()
  // (function($){
  //   $(window).load(function(){
  //     scrollVar.mCustomScrollbar({
  //       scrollInertia:100,
  //       contentTouchScroll: true,
  //       autoExpandScrollbar: true
  //     });
  //   });
  // })(jQuery);


  // Auto height column function
  equalheight = function(container){

  var currentTallest = 0,
       currentRowStart = 0,
       rowDivs = new Array(),
       $el,
       topPosition = 0;
   $(container).each(function() {
  
     $el = $(this);
     $($el).height('auto')
     topPostion = $el.position().top;
  
     if (currentRowStart != topPostion) {
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
       rowDivs.length = 0; // empty the array
       currentRowStart = topPostion;
       currentTallest = $el.height();
       rowDivs.push($el);
     } else {
       rowDivs.push($el);
       currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
   });
  }
  
  $(window).load(function() {
    equalheight('.section__service__item');
  });
  
  
  $(window).resize(function(){
    equalheight('.section__service__item');
  });

});

