$(document).ready(function() {

  /* ============================= */  
  /* For the sticky navigation bar */
  /* =============================*/

  const $navEl = $('nav');

  /** When scrolling to the top of the page, remove animation
   * and style classes from the sticky header. */
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop < 249) {
      $navEl.removeClass('fadeOutUp animated sticky-black');
    }
  });

  var stickyOffset = '66px;';

  /* When scrolling down into the main section of the site,
  fade in the sticky header. When scrolling up and out,
  fade out the sticky header. */
  $('.js--section-main').waypoint(function(direction)  {
    if (direction == 'down') {
      $navEl.removeClass('fadeOutUp')
            .addClass('fadeInDown animated sticky-black')
    } else { 
      $navEl.removeClass('fadeInDown')
            .addClass('fadeOutUp animated sticky-black')
    } 
  }, {
      offset: stickyOffset
  });

  $('.js--section-project-gr').waypoint(function(direction) {
    if (direction == 'down') {
          $navEl.removeClass('sticky-black')
                .addClass('sticky-white');
    } else {
          $navEl.removeClass('sticky-white')
                .addClass('sticky-black');
    }
  }, {
      offset: stickyOffset
  });

  $('.js--section-project-dmb').waypoint(function(direction) {
    if (direction == 'down') {
        $navEl.removeClass('sticky-white')
              .addClass('sticky-black');
    } else {
        $navEl.removeClass('sticky-black')
              .addClass('sticky-white');
    }
  }, {
      offset: stickyOffset
  });

  $('.js--section-project-ph').waypoint(function(direction) {
    if (direction == 'down') {
        $navEl.removeClass('sticky-black')
              .addClass('sticky-white');
  } else {
        $navEl.removeClass('sticky-white')
              .addClass('sticky-black');
    }
  }, {
      offset: stickyOffset
  });

  $('.js--section-project-other').waypoint(function(direction) {
    if (direction == 'down') {
        $navEl.removeClass('sticky-white')
              .addClass('sticky-black');
    } else {
        $navEl.removeClass('sticky-black')
              .addClass('sticky-white');
    }
  }, {
      offset: stickyOffset
  });

  $('.js--section-contact').waypoint(function(direction) {
    if (direction == 'down') {
        $navEl.removeClass('sticky-black')
              .addClass('sticky-white');
  } else {
        $navEl.removeClass('sticky-white')
              .addClass('sticky-black');
    }
  }, {
      offset: stickyOffset
  });

  /* ============================= */  
  /* ------For the slideshow------ */
  /* ============================= */

  // Initialize the slideshow at the first slide!
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // The slideshow!
  function showSlides(n) {
  var i;
  var slides = document.querySelectorAll('.slides');
  var dots = document.querySelectorAll('.dot');
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block'; 
  dots[slideIndex-1].className += ' active';
  }

  // Slideshow controls
  $('.prev').click(function () {
    plusSlides(-1)
  });
  $('.next').click(function () {
    plusSlides(1)
  });
  $('.dot1').click(function () {
    currentSlide(1)
  });
  $('.dot2').click(function () {
    currentSlide(2)
  });
  $('.dot3').click(function () {
    currentSlide(3)
  });

  /* =============================== */  
  /* For the buttons that scroll you */
  /* =============================== */

  var scrollTime = 1000;
  var scrollOffset = 66;

  $('.js--scroll-to-main').click(function () {
      $('html, body').animate({scrollTop: ($('.js--section-main').offset().top-scrollOffset)}, scrollTime);
  });
  $('.js--scroll-to-contact').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-contact').offset().top-scrollOffset}, scrollTime);
  });
  $('.js--scroll-to-gr').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-project-gr').offset().top}, scrollTime);
  });
  $('.js--scroll-to-dmb').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-project-dmb').offset().top}, scrollTime);
  });
  $('.js--scroll-to-ph').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-project-ph').offset().top}, scrollTime);
  });
  $('.js--scroll-to-other').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-project-other').offset().top-scrollOffset}, scrollTime);
  });
  $('.js--scroll-to-top').click(function () {
    $('html, body').animate({scrollTop: $('#header').offset().top}, scrollTime);
  });
  
  // Modals
  var modal;
  var img;
  var modalImg;
  var captionText;

  function triggerModal(clickedId) {
    var id = clickedId;
    console.log(id);
    // Get the modal
    modal = document.querySelector(`#${id}-modal`);

    // Get the image and insert it inside the modal - use its 'alt' text as a caption

    img = document.querySelector(`#${id}`);
    modalImg = document.querySelector(`#${id}-modalImg`);
    captionText = document.querySelector(`#${id}-caption`);

    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerHTML = `<p style='text-align: center; color: #fff'>${img.alt}</p>`;

    // Get the <span> element that closes the modal
    var span = document.querySelector(`.close`);
    console.log(span);

    // When the user clicks on <span> (x), close the modal
    
    span.onclick = function() { 
      modal.style.display = 'none';
      }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  } 

  $('#grConfigImg').click(function () {
    triggerModal('grConfigImg');
  });

  $('#grExerciseImg').click(function () {
    triggerModal('grExerciseImg');
  });

  $('#dmbProtoImg').click(function () {
    triggerModal('dmbProtoImg');
  });

  $('#dmbModelImg').click(function () {
    triggerModal('dmbModelImg');
  });

  $('#phupdateImg').click(function () {
    triggerModal('phupdateImg');
  });

  $('#phbothImg').click(function () {
    triggerModal('phbothImg');
  });

  // Select all links with hashes
  /* Navigation scroll */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  
  /* Animations on scroll */
  // $('.js--wp-1').waypoint(function(direction) {
  //     $('.js--wp-1').addClass('animated fadeIn');
  // }, {
  //     offset: '50%'
  // });
  
  // $('.js--wp-2').waypoint(function(direction) {
  //     $('.js--wp-2').addClass('animated fadeInLeft');
  // }, {
  //     offset: '50%'
  // });
  
  // $('.js--wp-3').waypoint(function(direction) {
  //     $('.js--wp-3').addClass('animated fadeIn');
  // }, {
  //     offset: '50%'
  // });
  
  // $('.js--wp-4').waypoint(function(direction) {
  //     $('.js--wp-4').addClass('animated pulse');
  // }, {
  //     offset: '50%'
  // });
  
  /* Mobile nav */
  $('.js--nav-icon').click(function() {
      var nav = $('.main-nav');
      var icon = $('.js--nav-icon i');
      
      nav.slideToggle(200);
      if (icon.hasClass('ion-md-menu')) {
          icon.addClass('ion-md-close');
          icon.removeClass('ion-md-menu');
      } else {
          icon.addClass('ion-md-menu');
          icon.removeClass('ion-md-close');
      }
  });
  
  $('.js--main-nav a').click(function(){
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');
      
      if ($(window).width() < 768){
          nav.slideToggle(200);

      }
      
      if (icon.hasClass('ion-md-menu')) {
          icon.addClass('ion-md-close');
          icon.removeClass('ion-md-menu');
      } else {
          icon.addClass('ion-md-menu');
          icon.removeClass('ion-md-close');
      }
  });
  
  $(window).resize(function(){
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');
      var mobIcon = $('.mobile-nav-icon');
      
      if ($(window).width() > 767){
          nav.css('display', 'block');
          mobIcon.css('display', 'none');
          icon.addClass('ion-md-close');
          icon.removeClass('ion-md-menu');
      } else {
          nav.css('display', 'none');
          mobIcon.css('display', 'block');
          icon.addClass('ion-md-menu');
          icon.removeClass('ion-md-close');
      }
  });

});
