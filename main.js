// <!DOCTYPE html>
// <html>
// <head>

// <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div>
//         <!-- Rotating Fruits -->
        
//         <!-- <img  id="cta-btn" class="cta-btn  position-absolute" width="9.5%" src="images/cta-btn.png" alt="">

//         <img  id="neu" class="neu  position-absolute" width="4.5%" src="images/neu.png" alt="">

//         <img  id="flaschen-bg" class="flaschen-bg  position-absolute" width="20%" src="images/flaschen_bg.png" alt="">

//         <img  id="flaschen-packshot" class="flaschen-packshot  position-absolute" width="11%" src="images/flaschen_packshot.png" alt="">

//         <img  id="erlebe-text" class="erlebe-text  position-absolute" width="12.5%" src="images/erlebe_text.png" alt="">

//                 <img  id="ueberrascht-text" class="ueberrascht-text  position-absolute" width="16%" src="images/ueberrascht_text.png" alt=""> -->

//         <img  id="combo" class="combo  position-absolute" width="16%" src="images/combo.png" alt="">

//         <img  id="blatt1-right" class="blatt1-right zero-opacity position-absolute" width="5%" src="images/blatt1.png" alt="">
//         <img  id="blatt1-left" class="blatt1-left zero-opacity position-absolute" width="4.5%" src="images/blatt1.png" alt="">
//         <img  id="blatt2right-down" class="blatt2right-down zero-opacity position-absolute" width="4.5%" src="images/blatt2.png" alt="">
//         <img  id="blatt2right-middle" class="blatt2right-middle zero-opacity position-absolute" width="4.5%" src="images/blatt2.png" alt="">
//         <img  id="blatt2-right" class="blatt2-right zero-opacity position-absolute" width="5.5%" src="images/blatt2.png" alt="">
//         <img  id="blatt2-left" class="blatt2-left zero-opacity position-absolute" width="5.5%" src="images/blatt2.png" alt="">
//         <img  id="pfirish-down" class="pfirish-down zero-opacity position-absolute" width="4%" src="images/pfirsich.png" alt="">
//         <img  id="middle-hibiscus" class="middle-hibiscus zero-opacity position-absolute" width="3.5%" src="images/hibiskus.png" width="6%" >
//         <img  id="pfirish-right" class="pfirish-right" width="4%" src="images/pfirsich.png">
//         <img  id="left-pfirish-img" class="left-pfirish-img fruits zero-opacity position-absolute" src="images/pfirsich.png" width="5%" >
//         <img  id="right-top-hibiscus-img" class="right-hibiscus-img fruits zero-opacity position-absolute" width="5%" src="images/hibiskus.png" width="6%">
//         <img  id="right-down-hibiscus-img" class="right-hibiscus-img fruits zero-opacity position-absolute"width="3.5%" src="images/hibiskus.png" width="6%" >
//         <img  id="left-hibiscus-img" class="left-hibiscus-img fruits zero-opacity position-absolute" src="images/hibiskus.png" width="6%">
//         <img  id="down-hibiscus-img" class="down-hibiscus-img fruits zero-opacity position-absolute" src="images/hibiskus.png" width="4%">

//          <!-- Main images -->
//         <img  id="swipe-finger-img" width="4%" class="swipe-finger-img position-absolute" src="images/swipe_icon.png" >
//         <img  id="bootle-img" width="6%" class="bootle-img position-absolute" src="images/flasche_kontur.png">
//         <img  id="full-bootle-img" width="6%" class="bootle-img zero-opacity position-absolute" src="images/flasche_hibiskus.png" >
//         <img  id="wisch-text-img" class="wisch-text-img position-absolute" src="images/wisch_text.png" width="15%" >
//         <img  id="frutzea-img" class="frutzea-img position-absolute" src="images/fuzetea.png" alt="" width="4%">
//         <img  id="background-img" class="background-img" src="images/background.png" width="20%">
        

        
// </div>
// </body>
// <script type="text/javascript">

//     document.querySelector('.swipe-finger-img').addEventListener("mouseover", function() {

//         document.getElementById("wisch-text-img").className += " fade-out-slow";
//         document.getElementById("swipe-finger-img").className += " fade-out-fast";
//         document.getElementById("bootle-img").className += " fade-out-slow";

//         document.getElementById("left-pfirish-img").className += " show-linear rotating";
//         document.getElementById("right-top-hibiscus-img").className += " show-linear rotating";

//         document.getElementById("right-down-hibiscus-img").className += " show-linear rotating";
//         document.getElementById("left-hibiscus-img").className += " show-linear rotating" ;
//         document.getElementById("down-hibiscus-img").className += " show-linear rotating";

//         document.getElementById("blatt1-right").className += " show-linear rotating";
//         document.getElementById("blatt1-left").className += " show-linear rotating";
//         document.getElementById("blatt2right-down").className += " show-linear rotating";
//         document.getElementById("blatt2right-middle").className += " show-linear rotating";
//         document.getElementById("blatt2-right").className += " show-linear rotating";
//         document.getElementById("blatt2-left").className += " show-linear rotating";
//         document.getElementById("pfirish-right").className += " show-linear rotating";
//         document.getElementById("pfirish-down").className += " show-linear rotating";
//         document.getElementById("middle-hibiscus").className += " show-linear rotating";


//         document.getElementById("full-bootle-img").className += " show-linear-slow ";


//         //from 2 - 3 step
//          document.getElementById("left-pfirish-img").className += " fade-out-slow   rotating";
//          document.getElementById("right-top-hibiscus-img").className += " fade-out-slow   rotating";
//          document.getElementById("right-down-hibiscus-img").className += " fade-out-slow   rotating";
//         document.getElementById("left-hibiscus-img").className += "fade-out-slow  show-linear rotating" ;
//         document.getElementById("down-hibiscus-img").className += " fade-out-slow  show-linear rotating";
//         document.getElementById("blatt1-right").className += " fade-out-slow  ";
//         document.getElementById("blatt1-left").className += " fade-out-slow  ";
//         document.getElementById("blatt2right-down").className += " fade-out-slow  ";
//         document.getElementById("blatt2right-middle").className += " fade-out-slow  ";
//         document.getElementById("blatt2-right").className += " fade-out-slow  ";
//         document.getElementById("blatt2-left").className += " fade-out-slow  show-linear rotating";
//         document.getElementById("pfirish-down").className += " fade-out-slow  show-linear rotating";
//         document.getElementById("middle-hibiscus").className += " fade-out-slow  show-linear rotating";
//         document.getElementById("left-hibiscus-img").className += " fade-out-slow  show-linear rotating";

//         // document.getElementById("combo").className += " fade-out-slow"


        
//     }, {once : true});





 







// </script>

// </html>



