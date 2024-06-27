$(document).ready(function () {
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        //autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1051,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    })

    $(".slider-nav").slick({
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.sliders',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        //autoplay: true,
        //autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 451,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    })
});