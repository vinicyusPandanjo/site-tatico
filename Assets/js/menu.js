const Methods = {
  init() {
    window.addEventListener("load", () => {
      Methods.toggleMenu();
      Methods.accordion();
    });
  },
  toggleMenu() {
    $(".btn-menu").on("click", function () {
      $(".overlay").addClass("open");
    });

    $(".overlay").on("click", function () {
      $(this).removeClass("open");
    });

    $(".overlay .sidebarMobile").on("click", function (e) {
      e.stopPropagation();
    });

    $(".btn-close").on("click", function () {
      $(".overlay").removeClass("open");
    });
  },
  accordion() {
    const $accordion = $(".menu-category-filter");

    if (!$accordion.length) return;

    $accordion.find(".category-filter-item").each(function () {
      $(this)
        .find(".category-filter-item-title")
        .on("click", function () {
          $(this).toggleClass("open");
          $(this).next().slideToggle("fast", "linear");
        });
    });

    $(".category-filter-item .form-check-input").on("click", function () {
      $(this).parents(".list-link").toggleClass("active");
    });
  },
};

export default {
  init: Methods.init,
};
