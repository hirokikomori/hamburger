$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    items:1,
    autoplay:true,
    });
});

    $(".owl-carousel2").owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items:4,
    autoplay:true,
    responsive : {
    // breakpoint from 0 up
    0 : {
        option1 : value,
        option2 : value,
        
    },
    // breakpoint from 480 up
    480 : {
        option1 : value,
        option2 : value,
        option3: value,
    },
    // breakpoint from 768 up
    768 : {
        option1 : value,
        option2 : value,
        option3 : value,
        option4 : value,
    }
}
    });