
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 800,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },{
            breakpoint: 580,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },{
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
});
