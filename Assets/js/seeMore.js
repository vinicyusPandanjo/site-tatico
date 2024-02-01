const Methods = {
  init() {
    window.addEventListener("load", () => {
      Methods.seoController();
      Methods.seeMore();
    });
  },
  seoController() {
    $(document).ready(function () {
      // Carregar veja mais

      if ($(".info-category-content #saiba-mais").length == 0) return;
      const seeMoreCore =
        document.querySelector(".info-category-content #saiba-mais")
          .offsetHeight || null;

      if (seeMoreCore) {
        if (seeMoreCore > 200) {
          $(".info-category-content #saiba-mais").addClass("closed");
        }
      }
    });
  },
  seeMore() {
    $(".see-more").click(function () {
      $(this).parent().toggleClass("active");
      $(this).parent().find(".see-more-content").slideToggle(500);
      $(this).parent().find(".see-more").toggleClass("open");

      if ($(this).parent().hasClass("active")) {
        $(this).parent().find(".see-more span").text("Ler Menos");

        $(".info-category-content #saiba-mais").removeClass("closed");
      } else {
        $(this).parent().find(".see-more span").text("Ler Mais");
        $(".info-category-content #saiba-mais").addClass("closed");
      }
    });
  },
};

export default {
  init: Methods.init,
};
