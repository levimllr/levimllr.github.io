$(document).ready(function() {
    
  /* For the sticky navigation bar */
  $('.js--section-main').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky-black');
      } else {
          $('nav').removeClass('sticky-black');
      }
  }, {
      offset: '60px;'
  });

  $('.js--section-project-gr').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').removeClass('sticky-black');
        $('nav').addClass('sticky-white');
    } else {
        $('nav').removeClass('sticky-white');
        $('nav').addClass('sticky-black');
    }
  }, {
      offset: '60px;'
  });

  $('.js--section-project-dmb').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').removeClass('sticky-white');
      $('nav').addClass('sticky-black');
    } else {
      $('nav').removeClass('sticky-black');
      $('nav').addClass('sticky-white');
    }
  }, {
      offset: '60px;'
  });

  $('.js--section-project-ph').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').removeClass('sticky-black');
      $('nav').addClass('sticky-white');
  } else {
      $('nav').removeClass('sticky-white');
      $('nav').addClass('sticky-black');
    }
  }, {
      offset: '60px;'
  });

  $('.js--section-project-other').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').removeClass('sticky-white');
      $('nav').addClass('sticky-black');
    } else {
      $('nav').removeClass('sticky-black');
      $('nav').addClass('sticky-white');
    }
  }, {
      offset: '60px;'
  });

  $('.js--section-contact').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').removeClass('sticky-black');
      $('nav').addClass('sticky-white');
  } else {
      $('nav').removeClass('sticky-white');
      $('nav').addClass('sticky-black');
    }
  }, {
      offset: '60px;'
  });
  
  /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });
  $('.js--scroll-to-start').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
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
  $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
  }, {
      offset: '50%'
  });
  
  $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInLeft');
  }, {
      offset: '50%'
  });
  
  $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
  }, {
      offset: '50%'
  });
  
  $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated pulse');
  }, {
      offset: '50%'
  });
  
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
      
      if ($(window).width() > 767){
          nav.css("display", "block");
          icon.addClass('ion-md-close');
          icon.removeClass('ion-md-menu');
      } else {
          nav.css("display", "none");
          icon.addClass('ion-md-menu');
          icon.removeClass('ion-md-close');
      }
  });

});

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }

// var modal;
// var img;
// var modalImg;
// var captionText;

//   function triggerModal(clicked_id) {
//     var id = clicked_id;
//     console.log(id);
//     // Get the modal
//     modal = document.getElementById(id + '-modal');

//     // Get the image and insert it inside the modal - use its "alt" text as a caption

//     img = document.getElementById(id);
//     modalImg = document.getElementById(id + "-modalImg");
//     captionText = document.getElementById(id + "-caption");

//     modal.style.display = "block";
//     modalImg.src = img.src;
//     captionText.innerHTML = "<p style='text-align: center; color: #fff'>" + img.alt + "</p>";

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//       modal.style.display = "none";
//       }

//       window.onclick = function(event) {
//         if (event.target == modal) {
//           modal.style.display = "none";
//         }
//       }
//   } 