const Methods = {
    init() {
        window.addEventListener("load", () => {
            Methods.shareLink();
        });
    },

    shareLink() {
        if (!$(".btn-share-link").length) return;

        $(".btn-share-link").on("click", function(e) {
            e.preventDefault();

            const href = $(this).attr("href");

            navigator.clipboard.writeText(href).then(
                () => {
                    alert("Link copiado com sucesso!");
                },
                (e) => {
                    console.error(e);
                }
            );
        });
    },
};

export default {
    init: Methods.init,
};