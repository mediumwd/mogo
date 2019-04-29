$( document ).ready(function() {
    $(".nav-min").click(function() {
        $(".nav").toggle();
        console.log("toggle")
    })
    $("#search--button__nav").click(function() {
        $('.nav__search').toggleClass("active");
    });
});