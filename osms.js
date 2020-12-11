var i=0,k=0;
var interval
$(document).ready(function(){
 interval = setInterval(rotateSlides, 3000); 
  function rotateSlides(){
  

    if(i==2){
      $('#sl3').css('color','#FF1493')
      $('#sl1').css('color','transparent')
      $('#sl2').css('color','transparent')
      i=0;
      k=1;
    }
    if(i==1){
      $('#sl2').css('color','#FF1493')
      $('#sl1').css('color','transparent')
      $('#sl3').css('color','transparent')
      i++;
    }
    if(i==0 && k==0){
      $('#sl1').css('color','#FF1493')
      $('#sl3').css('color','transparent')
      $('#sl2').css('color','transparent')
      i++;
    }
    k=0;

   
    var firstSlide = $('#carousel').find('#imgmain img:first');
    var width = firstSlide.width();
  
    firstSlide.animate({marginLeft: -width }, 700, function(){
      var lastSlide = $('#carousel').find('#imgmain img:last');
      lastSlide.after(firstSlide);
      firstSlide.css({marginLeft: 0});
    });
  }



$('#left-arrow').click(previousSlide);
$('#right-arrow').click(nextSlide);


$('#sl1,#sl2,#sl3').click(function(){
  clearInterval(interval);
  console.log("yess")
    $('.icon').css('color','transparent')
  var mid=this.id;
  console.log(mid)
  $(`#${mid}`).css('color','#FF1493');
 
  interval = setInterval(rotateSlides, 3000);
  previousSlide();
   
});


function previousSlide(){
 
  console.log(interval)
  clearInterval(interval);
  var currentSlide = $('#carousel').find('#imgmain img:first');
  var width = currentSlide.width();
  var previousSlide = $('#carousel').find('#imgmain img:last')
  previousSlide.css({marginLeft: -width})
  currentSlide.before(previousSlide);
  previousSlide.animate({marginLeft: 0}, 700,);
  interval = setInterval(rotateSlides, 3000);
}

function nextSlide(){
clearInterval(interval);
  rotateSlides()
  interval = setInterval(rotateSlides, 3000);

}

});
