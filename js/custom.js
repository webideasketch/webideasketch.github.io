(function($) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  //navigation
  $('.navigation').onePageNav({
    scrollOffset: 0
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //Home Background Slider

var NextProcessIndex = 0;
function NextProcess(){
  var processElements = $('.process-item > h2');
  var index = 0;
  $.each(processElements, function (index, value) {
    if (index == NextProcessIndex){
      $(value).css('color', 'white');
    }
    else {
      $(value).css('color', 'rgb(184, 184, 184)');
    }
    index++;
  });
  NextProcessIndex++;
  if (processElements.length <= NextProcessIndex){
    NextProcessIndex = 0;
  }
  setTimeout(function(){
    NextProcess();
  }, 2000);
}

function SetGallary(){
  $.mbBgndGallery.buildGallery({
    containment: "#intro",
    timer: 3000,
    effTimer: 1000,
    controls: "#controls",
    grayScale: false,
    shuffle: false,
    preserveWidth: false,
    effect: "fade",
    effect: {
      enter: {
        left: 0,
        opacity: 0
      },
      exit: {
        left: 0,
        opacity: 0
      },
      enterTiming: "ease-in",
      exitTiming: "ease-in"
    },

    images: [
      "img/bgslides/1.jpg",
      "img/bgslides/2.jpg",
      "img/bgslides/3.jpg"
    ],

    onStart: function () { },
    onPause: function () { },
    onPlay: function (opt) { },
    onChange: function (opt, idx) { },
    onNext: function (opt) { },
    onPrev: function (opt) { }
  });
}



  $(function() {
    NextProcess();
    SetGallary();

    $(window).resize(function () {
      var height = $(window).height();
      var width = $(window).width();
      console.log('width is : ' + width);
      console.log('height is : ' + height);
      if (height > width) {
        $('.contact_us_item').css('width','100%');
        $('.contact_us_item_center').css('width','100%');
      }
      if (height < width) {
        $('.contact_us_item').css('width', (width/3.0)+'px');
        $('.contact_us_item_center').css('width', (width / 3.0) +'px');
      }
    });

    
    function blinkText(){
      $('.blink_text').animate({ opacity: 0 }, 1000, "linear", function () {
        $(this).animate({ opacity: 1 }, 1000);
      });
    }
    
    setTimeout(function(){
      setInterval(blinkText, 1000);
    }, 4000);

    // var scrollorama = $.scrollorama({ blocks: '.scrollblock' });
    // scrollorama
    //   .animate('#unpin', { duration: 5000, property: 'padding-top', start: 400, pin: true });

    // scrollorama.onBlockChange(function (f) {
    //   console.log(scrollorama.blockIndex);
    // });

    // $('footer').css('height','200px');





    // $.fn.moveIt = function () {
    //   var $window = $(window);
    //   var instances = [];

    //   $(this).each(function () {
    //     instances.push(new moveItItem($(this)));
    //   });
    //   var lastScroll = $window.scrollTop();
    //   window.addEventListener('scroll', function () {
    //     var scrollTop = $window.scrollTop();
    //     if (scrollorama.blockIndex == 2){
    //       var currentScroll = (scrollTop - lastScroll) * 0.2;
    //       lastScroll += 1; //currentScroll;
    //       $window.scrollTop(lastScroll);
    //       // instances.forEach(function (inst) {
    //       //   inst.update(scrollTop);
    //       // });
    //     }
    //     else {
    //       lastScroll = $window.scrollTop();
    //     }
        
    //   }, { passive: true });
    // }

    // var moveItItem = function (el) {
    //   this.el = $(el);
    //   this.speed = parseInt(this.el.attr('data-scroll-speed'));
    // };

    // moveItItem.prototype.update = function (scrollTop) {
    //   this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
    // };

    // // Initialization
    // $(function () {
    //   $('[data-scroll-speed]').moveIt();
    // });




  });

  // featured text
  $("#rotator .1strotate").textrotator({
    animation: "dissolve",
    speed: 4000
  });
  $("#rotator .2ndrotate").textrotator({
    animation: "dissolve",
    speed: 4000
  });

  // Fixed navbar
  $(window).scroll(function() {

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 200) {
      $('.navbar-default').css('display', 'block');
      $('.navbar-default').addClass('fixed-to-top');

    } else if (scrollTop == 0) {

      $('.navbar-default').removeClass('fixed-to-top');
    }
  });


  //parallax
  if ($('#parallax1').length || $('#parallax2').length) {

    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });

  }

  function navbar() {

    if ($(window).scrollTop() > 1) {
      $('#navigation').addClass('show-nav');
    } else {
      $('#navigation').removeClass('show-nav');
    }

  }

  $(document).ready(function() {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function() {
        navbar();
      });

    }

  });


  $(window).resize(function() {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function() {
        navbar();
      });

    }

  });


  // Carousel
  $('.service .carousel').carousel({
    interval: 4000
  })

  //works
  $(function() {
    Grid.init();
  });

  //animation
  new WOW().init();




})(jQuery);
