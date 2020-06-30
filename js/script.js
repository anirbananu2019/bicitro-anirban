$(function ($) {
    'use strict';
    
//    banner slider start
    
    $('.banner_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow:  1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        speed: 2000,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
    });
	  
//    banner slider end
      
});

//    fixed menu start

$(window).scroll(function(){
    $scrolling=$(this).scrollTop();
    if($scrolling > 100){
        $('#navigation').addClass('fixed_menu');
    }

    else{
        $('#navigation').removeClass('fixed_menu');
    }
        

});

//    fixed menu end

//    scroll smooth start

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

//    scroll smooth end








