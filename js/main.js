$( document ).ready(function() {
    $(".nav-min, .close--nav").click(function() {
        $(".nav").toggle();
    })
    $("#search--button__nav").click(function() {
        $('.nav__search').toggleClass("active");
    })
})