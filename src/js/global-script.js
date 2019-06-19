$(document).ready(function() {
  
});


$(document).ready(function() {
  $('.slider').slick({
    infinite: false,
    dots: true,
    appendDots: $(".slider__dots"),
    prevArrow: $('.slider__arrow--prev'),
    nextArrow: $('.slider__arrow--next')
  });
});