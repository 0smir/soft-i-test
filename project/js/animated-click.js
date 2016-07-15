$(document).ready(function(){

    $(".to-cart").click(function(){
        $(this).addClass("clicked");
        setTimeout(function(){
            $(".to-cart").removeClass("clicked");
        }, 1550)
    });


});