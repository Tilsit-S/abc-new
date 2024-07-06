$(document).ready(function(){
    $('.develope__slider').slick({
        arrows: true,
        dots: true,
        variableWidth: true,
        adaptiveHeight: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        /*responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 621,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],*/
    }
    );
});