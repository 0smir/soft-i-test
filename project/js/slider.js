
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        arrows: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
//todo add breakpoint
        ]
    });
});
