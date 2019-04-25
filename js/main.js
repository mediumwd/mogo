$( document ).ready(function() {
    $(".service__accordion__items__item").click(function(){
        if($(this).children().hasClass("collapsed")){
        $(".service__accordion__items").find("span").addClass("arrow-down").removeClass("arrow-up");
        $(this).find("span").addClass("arrow-up").removeClass("arrow-down");
        }
        else {
            $(".service__accordion__items").find("span").addClass("arrow-down").removeClass("arrow-up");
        }
    });
    $(".nav-min").click(function() {
        $(".nav").toggle();
        console.log("toggle")
    })
});
