
var swiper = new Swiper(".courses-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },

    // pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var swiper = new Swiper(".single-packages-slider", {
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
  
      // pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });