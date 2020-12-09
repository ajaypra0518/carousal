
$(document).ready(function(){
  var interval = setInterval(rotateSlides, 3000); 
  function rotateSlides(){
    var firstSlide = $('#carousel').find('#imgmain img:first');
    var width = firstSlide.width();

    firstSlide.animate({marginLeft: -width }, 700, function(){
      var lastSlide = $('#carousel').find('#imgmain img:last');
      lastSlide.after(firstSlide);
      firstSlide.css({marginLeft: 0});
    });
  }



$('#right-arrow').click(previousSlide);
$('#left-arrow').click(nextSlide);

// Listen for click on slide image
$('.slide-image').click(nextSlide);

function previousSlide(){
 
  console.log(interval)
  clearInterval(interval);
  var currentSlide = $('#carousel').find('#imgmain img:first');
  var width = currentSlide.width();
  var previousSlide = $('#carousel').find('#imgmain img:last')
  previousSlide.css({marginLeft: -width})
  currentSlide.before(previousSlide);
  previousSlide.animate({marginLeft: 0}, 700, function(){
    interval = setInterval(rotateSlides, 3000);
  });
}

function nextSlide(){
 
clearInterval(interval);
  rotateSlides()
  interval = window.setInterval(rotateSlides, 3000);
}

});
