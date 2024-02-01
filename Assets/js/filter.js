const Methods = {
  init() {
    window.addEventListener("load", () => {
      Methods.accordion(".category-filter");
      Methods.accordion(".category-filter-mobile");
      Methods.removeAllActiveFilters();
      Methods.toggleFilterMobile();
      Methods.activeFilter();
      Methods.clearFilter();
    });
  },

  accordion(element) {
    const $accordion = $(element);

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

      Methods.updateActiveFilters("category-filter", "form-check-input");
    
      Methods.removeActiveFilter();
    });
  },

  updateActiveFilters(containerSelector, filterSelector) {
    const activeFilters = $(`.${containerSelector} .${filterSelector}:checked`);

    const $ulFiltersActive = $(`.${containerSelector} #ul-filters-active`);

    $ulFiltersActive.html("");

    if (activeFilters.length > 0) {
      try {
        for (let i = 0; i < activeFilters.length; i++) {
          const filterText = $(activeFilters[i]).parents(".list-link").text();
          const filterLink = $(activeFilters[i]).val();

          $ulFiltersActive.append(`
<li class="item-filter-active">
  ${filterText} 
  <button class="btn-remove-filter" rel="${filterLink}">
      <img src="Assets/img/delete-filter.png" />
  </button>
</li>
`);

          $(`.${containerSelector} .controls-remove-filter`).show(
            "fast",
            "linear"
          );
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      $(`.${containerSelector} .controls-remove-filter`).hide("fast", "linear");
    }

    Methods.removeActiveFilter();
  },

  removeActiveFilter() {
    $(".btn-remove-filter").on("click", function () {
      const filterLink = $(this).attr("rel");
      const $filter = $(`.form-check-input[value="${filterLink}"]`);

      $filter.prop("checked", false);
      $filter.parents(".list-link").removeClass("active");

      Methods.updateActiveFilters("category-filter", "form-check-input");
    });
  },
  removeAllActiveFilters() {
    $(".remove-all-filter").on("click", function () {
      $(".form-check-input").prop("checked", false);
      $(".list-link").removeClass("active");
      $(".controls-remove-filter").hide("fast", "linear");
      $("#ul-filters-active").html("");

      Methods.updateActiveFilters("category-filter", "form-check-input");
    });
  },

  toggleFilterMobile() {
    $(".btn-filter").on("click", function () {
      $(".overlay-filter").addClass("active");
      $(".category-filter-mobile").addClass("active");
    });

    $(".overlay-filter").on("click", function () {
      $(".overlay-filter").removeClass("active");
      $(".category-filter-mobile").removeClass("active");
    });

    $(".btn-remove-filter-mobile").on("click", function () {
      $(".overlay-filter").removeClass("active");
      $(".category-filter-mobile").removeClass("active");
    });
  },

  activeFilter(){
    $(".btn-filter-mobile").on("click", function () {
      const $filter = $(".category-filter-mobile .form-check-input:checked");
      
      if($filter.length > 0){
        $(".filter-count").addClass("active");
        $(".filter-count").text($filter.length);
      }
    });
  },
  clearFilter(){
    $(".btn-filter-remove-mobile").on("click", function () {
      $(".filter-count").removeClass("active");
      $(".filter-count").text(0);

      $(".form-check-input").prop("checked", false);
      $(".list-link").removeClass("active");
      $(".controls-remove-filter").hide("fast", "linear");
      $("#ul-filters-active").html("");

      Methods.updateActiveFilters("category-filter", "form-check-input");
    });
  }
};

export default {
  init: Methods.init,
};
