$(document).ready(() => {
    // Change navbar color as you scroll
    $(document).scroll(function() {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });

    $(".trash").on("click", function () {
        $(this).closest(".relative-row").remove();
    });

    $("#editInfoForm").one("submit", function (event) {
        console.log("here");
        event.preventDefault();
        var $input = $(this).find("input[placeholder=Luke]");
        $input.each(function (idx, input) {
            $(input).val(input.id);
        });
        console.log($input);
        $(this).submit();
    });
});