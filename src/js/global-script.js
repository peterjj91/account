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

$(document).ready(function(){
  $('.hamburger').click(function(){
    // $(this).toggleClass('open');
    // slideout.close();
    slideout.toggle();
  });
});

// MAIN MENU
var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.getElementById('menu'),
  'side': 'right',
  'padding': 320,
  'tolerance': 70
});

document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
  slideout.toggle();
});

function close(eve) {
  eve.preventDefault();
  slideout.close();
}

slideout
  .on('beforeopen', function() {
    this.panel.classList.add('panel-open');
  })
  .on('open', function() {
    this.panel.addEventListener('click', close);
  })
  .on('beforeclose', function() {
    this.panel.classList.remove('panel-open');
    this.panel.removeEventListener('click', close);
  });
