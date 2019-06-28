$(document).ready(function() {
  
});


$(document).ready(function() {
  $('.slider').slick({
    infinite: false,
    dots: true,
    appendDots: $(".slider__dots"),
    prevArrow: $('.slider__arrow--prev'),
    nextArrow: $('.slider__arrow--next'),
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<button>0'+(i+1)+'</button>';
    },
  });
});

$(document).ready(function(){
  $('.toggle-menu').click(function(){
    $(this).toggleClass('open');
    slideout.close();
  });
});

$(document).ready(function(){
  $('.calculate-promo__title').click(function(){
    $(".calculate-promo").toggleClass('active');
  });
});

$(document).ready(function(){
  $('.toggle-message').click(function(){
    $(".modal-notification").toggleClass('active');
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


// range slider
if (document.getElementById('slider-range')) {
  var rangeSlider = document.getElementById('slider-range');

  noUiSlider.create(rangeSlider, {
    start: [4000],
    connect: 'lower',
    range: {
      'min': [2000],
      'max': [10000]
    },
    format: wNumb({
        decimals: 0,
        suffix: ' рублей'
    })
  });

  // Display the slider value
  var rangeSliderValueElement = document.getElementById('slider-range-value');

  rangeSlider.noUiSlider.on('update', function (values, handle) {
      rangeSliderValueElement.innerHTML = values[handle];
  });
}


// read more
var bindReadMore = function(){
  $('.read-more').on('click', function(e) {
    e.preventDefault();
    var parent = $(this).parent();
    parent.trigger("destroy");
    parent.removeClass('truncable-txt--is-truncated');
    parent.addClass('truncable-txt--is-not-truncated');
    bindReadLess(); // bind click on "less"
  });
};

var bindReadLess = function(){
  $('.read-less').on('click', function(e) {
    e.preventDefault();
    var parent = $(this).parent();
    truncateIfNeeded(parent); // Re-initialize ellipsis
  });
};

var truncateIfNeeded = function(jqueryTag){
  var $selectionToTruncate = jqueryTag || $('.truncable-txt');
  
  $selectionToTruncate.dotdotdot({
    ellipsis: '...',
    watch   : true,
    wrap    : 'letter',
    height  : 200, // max number of lines
    after   : '.read-more',
    callback: function( isTruncated, orgContent ) {
      var $currentReadMore = $(this).find('.read-more');
      var $currentReadLess = $(this).find('.read-less');
      
      if( isTruncated ){
        $(this).addClass('truncable-txt--is-truncated');
      }
      bindReadMore(); // bind click on "read more"
    },
  });
};

$(function() {
  truncateIfNeeded(); // Initialize ellipsis
});
