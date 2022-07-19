

$(document).ready(function(){
    $("#hamburger-menu").click(function(){
        $("#top-bar").toggleClass("top-bar")
        $("#mid-bar").toggleClass("mid-bar")
        $("#bot-bar").toggleClass("bot-bar")
        $("#menu").toggleClass("menu-on")
        $("#scroll-down").toggleClass("hide")
        $("html,body").scrollTop(0)
        $("body").toggleClass("body-noscroll")
    });
});

