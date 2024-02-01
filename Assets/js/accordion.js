const Methods = {
    init() {
      window.addEventListener("load", () => {
        Methods.accordion();
      });
    },
    accordion(){
        const $button = $(".selectFake");

        if(!$button.length) return;

        $button.on("click", function(){
            $(this).toggleClass("open");
            $(this).next().slideToggle("fast", "linear");
        });
    }
  };
  
  export default {
    init: Methods.init,
  };
  