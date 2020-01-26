function startAnimation() {
    document.getElementById("wisch-text-img").className += " fade-out-slow";
    document.getElementById("swipe-finger-img").className += " fade-out-fast";
    document.getElementById("bootle-img").className += " fade-out-slow";

    document.getElementById("left-pfirish-img").className += " show-linear rotating ";
    document.getElementById("right-top-hibiscus-img").className += " show-linear rotating";

    document.getElementById("right-down-hibiscus-img").className += " show-linear rotating";
    document.getElementById("left-hibiscus-img").className += " show-linear rotating" ;
    document.getElementById("down-hibiscus-img").className += " show-linear rotating";

    document.getElementById("blatt1-right").className += " show-linear rotating";
    document.getElementById("blatt1-left").className += " show-linear rotating";
    document.getElementById("blatt2right-down").className += " show-linear rotating";
    document.getElementById("blatt2right-middle").className += " show-linear rotating";
    document.getElementById("blatt2-right").className += " show-linear rotating";
    document.getElementById("blatt2-left").className += " show-linear rotating";
    // document.getElementById("pfirish-right").className += " show-linear rotating";
    document.getElementById("pfirish-down").className += " show-linear rotating";
    document.getElementById("middle-hibiscus").className += " show-linear rotating";
    document.getElementById("full-bootle-img").className += " show-linear-slow ";




    // //from 2 - 3 step

    setTimeout(function(){
        document.getElementById("left-pfirish-img").className += " transform-180 fade-out ";
        document.getElementById("right-top-hibiscus-img").className += " transform-180 fade-out";
        document.getElementById("right-down-hibiscus-img").className += " transform-180 fade-out";
        document.getElementById("left-hibiscus-img").className += " transform-180vfade-out" ;
        document.getElementById("down-hibiscus-img").className += " transform-180 fade-out";
        document.getElementById("blatt1-right").className += " transform-180 fade-out";
        document.getElementById("blatt1-left").className += " transform-180 fade-out";
        document.getElementById("blatt2right-down").className += " transform-180 fade-out";
        document.getElementById("blatt2right-middle").className += " transform-180 fade-out";
        document.getElementById("blatt2-right").className += " transform-180 fade-out  ";
        document.getElementById("blatt2-left").className += " transform-180 fade-out";
        document.getElementById("pfirish-down").className += " transform-180 fade-out";
        document.getElementById("middle-hibiscus").className += " transform-180 fade-out";
        document.getElementById("left-hibiscus-img").className += " transform-180 fade-out";
        document.getElementById("combo").className += " show-linear";

    }, 5000);


    setTimeout(function(){
    //step 3 to 4
        document.getElementById("ueberrascht-text").className += " show-linear";
        document.getElementById("full-bootle-img").className += " fade-out-slow";

    }, 7000);

    setTimeout(function(){
        document.getElementById("combo").className += " fade-out-slow";
    //step 4
    document.getElementById("erlebe-text").className += " show-linear";
    document.getElementById("flaschen-packshot").className += " show-linear";
    document.getElementById("flaschen-bg").className += " show-linear";
    document.getElementById("neu").className += " show-linear";
    document.getElementById("legaline").className += " show-linear";
    }, 9000);


    setTimeout(function(){
        document.getElementById("cta-btn").className += " show-linear";

    }, 11000 );
    
    

    
};





// let fruits = document.getElementsByClassName("fruits");
// for(var i = 0; i < fruits.length; i++){
//      fruits.item(i).className = " show-linear";
// }






function swipedetect(el, callback){

var touchsurface = el,
swipedir,
startX,
startY,
distX,
distY,
threshold = 100, //required min distance traveled to be considered swipe
restraint = 100, // maximum distance allowed at the same time in perpendicular direction
allowedTime = 300, // maximum time allowed to travel that distance
elapsedTime,
startTime,
handleswipe = callback || function(swipedir){}

touchsurface.addEventListener('touchstart', function(e){
  var touchobj = e.changedTouches[0]
  swipedir = 'none'
  dist = 0
  startX = touchobj.pageX
  startY = touchobj.pageY
  startTime = new Date().getTime() // record time when finger first makes contact with surface
  e.preventDefault()
}, false)

touchsurface.addEventListener('touchmove', function(e){
  e.preventDefault() // prevent scrolling when inside DIV
}, false)

touchsurface.addEventListener('touchend', function(e){
  var touchobj = e.changedTouches[0]
  distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
  distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
  elapsedTime = new Date().getTime() - startTime // get time elapsed
  if (elapsedTime <= allowedTime){ // first condition for awipe met
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
          swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
      }
      else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
          swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
      }
  }
  handleswipe(swipedir)
  e.preventDefault()
}, false)
}

//USAGE:

var el = document.getElementById('swipe-finger-img');
swipedetect(el, function(swipedir){
startAnimation();
});
