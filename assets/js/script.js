/*!
 * File: Script.js
 * Author: Anas Akbar Saqi
 * Description: Main JavaScript page for Anas Akbar Saqi's portfolio.
 * License: GPLv3 (or your preferred license)
 * Date: November 2024
 */

(function ($) {
  "use strict";

  //=============  Mobile Menu Integration  =============\\
  function mobile_menu(selector, actionSelector) {
    var mobile_menu = $(selector);
    mobile_menu.on("click", function () {
      $(selector).toggleClass("sidemenu-open");
    });

    var hamburgerbtn = $(selector);
    hamburgerbtn.on("click", function () {
      $(actionSelector).toggleClass("sidemenu-open");
    });

    $(document).on("click", function (e) {
      var selectorType = $(actionSelector).add(mobile_menu);
      if (
        selectorType.is(e.target) !== true &&
        selectorType.has(e.target).length === 0
      ) {
        $(actionSelector).removeClass("sidemenu-open");
        $(selector).removeClass("sidemenu-open");
      }
    });
    $(".menu_wrapper a").on("click", function () {
      $(".menu_wrapper, .menu-overlay").removeClass("sidemenu-open");
    });
  }
  mobile_menu(".humberger, .close-menu", ".menu_wrapper, .menu-overlay");

  ///=============  Services Item Active Hover  =============\\\
  $(".service-item").on("mouseover", function () {
    $(".service-item").removeClass("service-item-active");
    $(this).addClass("service-item-active");
  });
  $(".service-item").on("mouseout", function () {
    $(".service-item").removeClass("service-item-active");
  });

  ///============= Project Filter Isotop Metafizzy =============\\\
  $(window).on("load resize", function (e) {
    var $container = $(".projectGrid"),
      isotope = function () {
        $container.isotope({
          resizable: true,
          itemSelector: ".project-item",
          percentPosition: true,
          hiddenStyle: {
            transform: "scale(.2) skew(30deg)",
            opacity: 0,
          },
          visibleStyle: {
            transform: "scale(1) skew(0deg)",
            opacity: 1,
          },
          transitionDuration: ".5s",
        });
      };
    isotope();

    var $isotopefilters = $(".project-filter");
    $isotopefilters.on("click", "li", function () {
      $(this).addClass("active").siblings().removeClass("active");

      var filterValue = $(this).attr("data-filter");
      $container.isotope({
        filter: filterValue,
      });
    });
  });

  ///============= Clients Logo Slider With Swiper  =============\\\
  var clients_logo = new Swiper(".clients_logo_slider", {
    slidesPerView: 2,
    loop: 1,
    spaceBetween: 40,
    breakpoints: {
      576: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
    autoplay: {
      delay: 4000,
    },
    speed: 800,
    pagination: {
      el: ".clients_logo_slider .pagination",
      clickable: "true",
    },
  });

  ///============= Project Carousel With Swiper  =============\\\
  var menuSwiper = new Swiper(".mobile-menu-slider", {
    slidesPerView: 3,
    loop: 1,
    centeredSlides: true,
    initialSlide: $('.swiper-slide[data-attribute="active"]').index(),
    breakpoints: {
      480: {
        slidesPerView: 4.5,
      },
      768: {
        slidesPerView: 7,
      },
    },
    autoplay: !1,
    speed: 500,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".mobile-menu-nav .btn-next",
      prevEl: ".mobile-menu-nav .btn-prev",
    },
  });

  ///============= Project Carousel With Swiper  =============\\\
  var projectSwiper = new Swiper(".projectCarousel", {
    observer: true,
    slidesPerView: 1,
    runCallbacksOnInit: true,
    loop: !1,
    spaceBetween: 30,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    navigation: {
      nextEl: ".projectCarousel .btn-next",
      prevEl: ".projectCarousel .btn-prev",
    },
    updateOnImagesReady: true,
  });

  ///============= Testimonial Slider =============\\\
  var testimonialSlider = new Swiper(".testimonialCarousel", {
    slidesPerView: 1,
    loop: 1,
    spaceBetween: 40,
    breakpoints: {
      1400: {
        slidesPerView: 1.1,
      },
      1600: {
        slidesPerView: 1.3,
      },
    },
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    navigation: {
      nextEl: ".testimonialCarousel .btn-next",
      prevEl: ".testimonialCarousel .btn-prev",
    },
    pagination: {
      el: ".testimonialCarousel .pagination",
      clickable: "true",
    },
  });

  ///============= Blog Slider =============\\\
  var blogSwiper = new Swiper(".blgos_carousel", {
    slidesPerView: 1,
    loop: 1,
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    spaceBetween: 30,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      2200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".blgos_carousel .btn-next",
      prevEl: ".blgos_carousel .btn-prev",
    },
  });

  ///============= Project Gallery Slider =============\\\
  var projectGallery = new Swiper(".project_gallery_slider", {
    slidesPerView: 1,
    loop: 1,
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    spaceBetween: 30,
    navigation: {
      nextEl: ".project_gallery_slider .btn-next",
      prevEl: ".project_gallery_slider .btn-prev",
    },
    pagination: {
      el: ".project_gallery_slider .pagination",
      clickable: "true",
    },
  });

  ///============= Style Switcher =============\\\
  $(".style-switcher .toggle-btn").on("click", function () {
    $(".style-switcher").toggleClass("active");
  });
  $(document).on("click", function (e) {
    var style_switcher = $(".style-switcher.active");
    if (
      style_switcher.is(e.target) !== true &&
      style_switcher.has(e.target).length === 0
    ) {
      $(style_switcher).removeClass("active");
    }
  });

  ///=============  Magnific Popup  =============\\\
  $(".popup-iframe").each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      // disableOn: 375,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  });
  $(".popup-img").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-img-mobile",
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
  });
})(jQuery);

///============= Preloader =============\\\
$(window).on("load", function () {
  $(".preloader").fadeOut();
});

///============= Color Changer =============\\\
$(".primary_color").on("click", function (e) {
  var color = $(this).data("color");
  document.documentElement.style.setProperty("--primaryColor", color);
  localStorage.setItem("--primaryColor", color);
});
$(".secondary_color").on("click", function (e) {
  var color2 = $(this).data("color");
  document.documentElement.style.setProperty("--secondaryColor", color2);
  localStorage.setItem("--secondaryColor", color2);
});

if (localStorage.getItem("--primaryColor") != null) {
  document.documentElement.style.setProperty(
    "--primaryColor",
    localStorage.getItem("--primaryColor")
  );
}
if (localStorage.getItem("--secondaryColor") != null) {
  document.documentElement.style.setProperty(
    "--secondaryColor",
    localStorage.getItem("--secondaryColor")
  );
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};
var version = getUrlParameter("version");

// Reset Localstorage Data and reload window at once
function clearStorageReloadWindow() {
  localStorage.clear();
  location.reload();
}
// Site theme Color mode
if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function setDarkTheme() {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  $("#light_theme").removeClass("active");
  $("#dark_theme").addClass("active");
}

function setLightTheme() {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  $("#dark_theme").removeClass("active");
  $("#light_theme").addClass("active");
}
if (version) {
  if (version == "dark") {
    setDarkTheme();
  } else if (version == "light") {
    setLightTheme();
  }
}

function onThemeSwitcherItemClick(e) {
  var theme = this.dataset.theme;
  if (theme == "dark") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

const themeSwitcherItems = document.querySelectorAll(".switcher-input");
themeSwitcherItems.forEach((item) => {
  item.addEventListener("click", onThemeSwitcherItemClick);
});

if (localStorage.theme === "dark") {
  $("#dark_theme").addClass("active");
} else {
  $("#light_theme").addClass("active");
}

// For Number Cont


  document.addEventListener("DOMContentLoaded", () => {
    // Function to animate counter from 0 to target number
    function animateCounter(element, target) {
      let count = 0;
      const speed = 100; // Increase this value to slow down the animation
      const increment = Math.ceil(target / speed);
      
      const updateCount = () => {
        count += increment;
        if (count > target) count = target;
        element.innerText = count;
        if (count < target) {
          requestAnimationFrame(updateCount);
        }
      };
      
      updateCount();
    }

    // Function to start animation when the element is in viewport
    const startCounting = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counterItems = document.querySelectorAll(".counter");
          counterItems.forEach(item => {
            const targetValue = parseInt(item.innerText);
            animateCounter(item, targetValue);
          });
          observer.unobserve(entry.target); // Stop observing once animation starts
        }
      });
    };

    // Setting up Intersection Observer
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver(startCounting, options);
    observer.observe(document.querySelector(".facts"));
  });
