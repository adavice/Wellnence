$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'slider__pagination',
    draggable: false,
    fade: true,
    slide: '.slider__item'
  });
});