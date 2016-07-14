$(document).ready(function(){
    $(".main-menu li").hover(function(){
        $(this).children(".submenu").stop(false, true).fadeIn(300);
        $(this).children("a").addClass("selected");
    }, function(){
        $(this).children(".submenu").stop(false, true).fadeOut(300);
        $(this).children("a").removeClass("selected");
    });
});