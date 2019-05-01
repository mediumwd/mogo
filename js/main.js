$(document).ready(function () {
    $(".nav-min, .close--nav").click(function () {
        $(".nav").toggle();
    })
    $("#search--button__nav").click(function () {
        $('.nav__search').toggleClass("active");
    })

    $(window).resize(function () {
        if ($(window).width() < 576) {
            $(".nav__search").addClass("active");
        } else {
            $(".nav__search").removeClass("active");
        }
    });
})