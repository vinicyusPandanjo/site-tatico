const Methods = {
  init() {
    window.addEventListener("load", () => {
      Methods.slideHomeMain();
      Methods.slideHomeBrads();
      Methods.slideHomeCategories();
      Methods.slideHomeNews();
      Methods.slideProduct();
      Methods.slideDetailsProduct();
      Methods.slideHomeBenefits();
    });
  },
  slideHomeMain() {
    const $slider = $(".carrousel-desk");
    const $sliderMobile = $(".carrousel-mob");

    if (!$slider.length) return;
    $slider.slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      cssEase: "linear",
    });

    if (!$sliderMobile.length) return;
    $sliderMobile.slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      cssEase: "linear",
    });
  },
  slideHomeBrads() {
    const $slider = $(".brads_slider");

    if (!$slider.length) return;

    $slider.slick({
      dots: false,
      arrows: false,
      slidesToShow: 7,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  },
  slideHomeCategories() {
    const $slider = $(".categories_slider");

    if (!$slider.length) return;
    $slider.slick({
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear",
            varibleWidth: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
      ],
    });
  },

  slideHomeNews() {
    const $slider = $(".more-content .row");
    const $sliderItem = $(".more-content .row .col-sm");

    if (!$slider.length) return;

    $slider.slick({
      dots: $sliderItem.length > 4 ? true : false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: "linear",
      varibleWidth: true,

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            cssEase: "linear",
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: "linear",
            centerMode: true,
            arrows: false,
            infinite: false,
          },
        },
      ],
    });

    let stHeight = $(".more-content .slick-track").height();

    $(".more-content .slick-slide").css("height", stHeight + "px");
  },
  slideProduct() {
    const $slider = $(".slider-product");

    if (!$slider.length) return;

    const $sliderItem = $(".slider-product .card-product");

    $slider.slick({
      dots: $sliderItem.length > 4 ? true : false,
      arrows: $sliderItem.length > 4 ? true : false,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: "linear",
      varibleWidth: true,

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
            varibleWidth: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            cssEase: "linear",
            
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            cssEase: "linear",
            centerMode: true,
            
            
          },
        }
      ],
    });

    let stHeight = $(".slider-product .slick-track").height();

    $(".slider-product .slick-slide").css("height", stHeight + "px");
  },

  slideDetailsProduct() {
    const $slider = $(".product-image__main");
    const $sliderNav = $(".product-image__list");

    if (!$slider.length) return;

    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: $sliderNav,
    });

    $sliderNav.slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: $slider,
      dots: false,
      arrows: true,
      varibleWidth: true,
      focusOnSelect: true,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            
          },
        },
      ],
    });

    let stHeight = $(".product-image__list  .slick-track").height();

    $(".product-image__list  .slick-slide").css("height", stHeight + "px");
  },
  slideHomeBenefits() {
    const $slider = $(".benefits-box");

    if (!$slider.length) return;

    // verificar que a janela está menor ou igual 768px

    if ($(window).width() <= 768) {
      $slider.slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        varibleWidth: true,
        centerMode: true,
        centerPadding: "50px",
      });
    } else {
      $slider.slick("unslick");
    }
  },
};

export default {
  init: Methods.init,
};
