//function to create html elements: head, style, style link and image div and tags
function createHtmlCode() {

    //create head
    let head = document.createElement('head');
    document.body.appendChild(head);

    //create style
    let style = document.createElement('style');

    // lets add some custom style
    let styles = 'body { background : aliceblue;}';
    style.appendChild(document.createTextNode(styles));
    document.getElementsByTagName("head")[0].appendChild(style);

    // lets append our css file link to style element
    let cssFile = document.createElement("link");
    cssFile.setAttribute("rel", "stylesheet");
    cssFile.setAttribute("type", "text/css");
    cssFile.setAttribute("href", 'style.css');
    document.head.appendChild(cssFile);

    // create main div
    let div = document.createElement('div');
    div.innerHTML = "<img id=\"legaline\" class=\"legaline zero-opacity secondary-img position-absolute\" width=\"14%\" src=\"images/legaline.png\">\n" +
        "    <a id='fuzetea'><img id=\"cta-btn\" class=\"cta-btn zero-opacity  position-absolute\" width=\"9.5%\" src=\"images/cta-btn.png\"></a>\n" +
        "    <img id=\"neu\" class=\"neu zero-opacity secondary-img position-absolute\" width=\"4.5%\" src=\"images/neu.png\">\n" +
        "    <img id=\"flaschen-bg\" class=\"flaschen-bg zero-opacity secondary-img position-absolute\" width=\"20%\" src=\"images/flaschen_bg.png\">\n" +
        "    <img id=\"flaschen-packshot\" class=\"flaschen-packshot secondary-img zero-opacity position-absolute\" width=\"11%\" src=\"images/flaschen_packshot.png\">\n" +
        "    <img id=\"erlebe-text\" class=\"erlebe-text zero-opacity secondary-img position-absolute\" width=\"12.5%\" src=\"images/erlebe_text.png\">\n" +
        "    <img id=\"ueberrascht-text\" class=\"ueberrascht-text zero-opacity position-absolute\" width=\"16%\" src=\"images/ueberrascht_text.png\">\n" +
        "    <img id=\"combo\" class=\"combo zero-opacity  position-absolute\" width=\"16%\" src=\"images/combo.png\">\n" +
        "    <img id=\"blatt1-right\" class=\"blatt1-right fruits zero-opacity position-absolute\" width=\"5%\" src=\"images/blatt1.png\">\n" +
        "    <img id=\"blatt1-left\" class=\"blatt1-left fruits zero-opacity position-absolute\" width=\"4.5%\" src=\"images/blatt1.png\">\n" +
        "    <img id=\"blatt2right-down\" class=\"blatt2right-down fruits zero-opacity position-absolute\" width=\"4.5%\" src=\"images/blatt2.png\">\n" +
        "    <img id=\"blatt2right-middle\" class=\"blatt2right-middle fruits zero-opacity position-absolute\" width=\"4.5%\" src=\"images/blatt2.png\">\n" +
        "    <img id=\"blatt2-right\" class=\"blatt2-right fruits zero-opacity position-absolute\" width=\"5.5%\"  src=\"images/blatt2.png\">\n" +
        "    <img id=\"blatt2-left\" class=\"blatt2-left fruits zero-opacity position-absolute\" width=\"5.5%\"\n" +
        "         src=\"images/blatt2.png\">\n" +
        "    <img id=\"pfirish-down\" class=\"pfirish-down fruits zero-opacity position-absolute\" width=\"4%\"  src=\"images/pfirsich.png\">\n" +
        "    <img id=\"middle-hibiscus\" class=\"middle-hibiscus fruits zero-opacity position-absolute\" width=\"3.5%\"\n" +
        "         src=\"images/hibiskus.png\" width=\"6%\">\n" +
        "    <img id=\"left-pfirish-img\" class=\"left-pfirish-img fruits zero-opacity position-absolute\" src=\"images/pfirsich.png\" width=\"5%\">\n" +
        "    <img id=\"right-top-hibiscus-img\" class=\"right-hibiscus-img fruits zero-opacity position-absolute\" width=\"5%\" src=\"images/hibiskus.png\" width=\"6%\">\n" +
        "    <img id=\"right-down-hibiscus-img\" class=\"right-hibiscus-img fruits zero-opacity position-absolute\" width=\"3.5%\" src=\"images/hibiskus.png\" width=\"6%\">\n" +
        "    <img id=\"left-hibiscus-img\" class=\"left-hibiscus-img fruits zero-opacity position-absolute\" src=\"images/hibiskus.png\" width=\"6%\">\n" +
        "    <img id=\"down-hibiscus-img\" class=\"down-hibiscus-img fruits zero-opacity position-absolute\" src=\"images/hibiskus.png\" width=\"4%\">\n" +
        "    <img id=\"swipe-finger-img\" width=\"4%\" class=\"swipe-finger-img position-absolute linear-move\" src=\"images/swipe_icon.png\">\n" +
        "    <img id=\"bottle-img\" width=\"6%\" class=\"bottle-img position-absolute\" src=\"images/flasche_kontur.png\">\n" +
        "    <img id=\"full-bottle-img\" width=\"5.6%\" class=\"bottle-img zero-opacity position-absolute\" src=\"images/flasche_hibiskus.png\">\n" +
        "    <img id=\"wisch-text-img\" class=\"wisch-text-img position-absolute\" src=\"images/wisch_text.png\" width=\"15%\">\n" +
        "    <img id=\"frutzea-img\" class=\"frutzea-img position-absolute\" src=\"images/fuzetea.png\" width=\"4%\">\n" +
        "    <img id=\"background-img\" class=\"background-img\" src=\"images/background.png\" width=\"20%\">";
    document.body.appendChild(div);
}

//function to handle img animation
function startAnimation() {
    // step 0
    document.getElementById("wisch-text-img").className += " fade-out-slow";
    document.getElementById("swipe-finger-img").classList.remove('linear-move');
    document.getElementById("swipe-finger-img").className += " fade-out-fast";
    document.getElementById("bottle-img").className += " fade-out-slow";

    let fruits = document.getElementsByClassName("fruits");
    for (let i = 0; i < fruits.length; i++) {
        fruits.item(i).className += " show-linear rotating";
    }
    document.getElementById("full-bottle-img").className += " show-linear-slow ";

    //step 1
    setTimeout(function () {
        for (let i = 0; i < fruits.length; i++) {
            fruits.item(i).className += " transform-180 fade-out";
        }
        document.getElementById("combo").className += " show-linear";
    }, 5000);

    //from step 2
    setTimeout(function () {
        document.getElementById("ueberrascht-text").className += " show-linear";
    }, 7000);

    //step 3
    setTimeout(function () {
        document.getElementById("full-bottle-img").className += " fade-out-fast";
        document.getElementById("combo").className += " fade-out-slow";
        let secondaryImages = document.getElementsByClassName("secondary-img");
        for (let i = 0; i < secondaryImages.length; i++) {
            secondaryImages.item(i).className += " show-linear";
        }
    }, 10000);

    // step 4
    setTimeout(function () {
        document.getElementById('fuzetea').href = 'https://www.coca-cola-oesterreich.at/fuzetea';
        document.getElementById('fuzetea').setAttribute('target', '_blank');
        document.getElementById("cta-btn").className += " show-linear";
    }, 15000);
}

// function to handle swipe detection
function swipeDetect(el, callback) {
    let touchScreen = el,
        swiped,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance for swipe
        restraint = 300, // maximum distance allowed
        allowedTime = 300, // maximum time allowed to travel
        elapsedTime,
        startTime,
        handleSwipe = callback || function (swipedir) {
        };

    touchScreen.addEventListener('touchstart', function (e) {
        let touchObj = e.changedTouches[0];
        swiped = 'none';
        let dist = 0;
        startX = touchObj.pageX;
        startY = touchObj.pageY;
        // record time when finger first makes contact with screen
        startTime = new Date().getTime();
        e.preventDefault()
    }, false);

    touchScreen.addEventListener('touchmove', function (e) {
        e.preventDefault() // prevent scrolling when inside DIV
    }, false);

    touchScreen.addEventListener('touchend', function (e) {
        let touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX; // get horizontal dist
        distY = touchObj.pageY - startY; // get vertical dist
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime) { // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                swiped = (distX < 0) ? 'left' : 'right' // if dist traveled is negative,left swipe
            } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                swiped = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, up swipe
            }
        }
        handleSwipe(swiped);
        e.preventDefault()
    }, false)
}

// call function to create html code
createHtmlCode();

// add swipe detect on view
let el = document.getElementById('swipe-finger-img');
swipeDetect(el, function (swipedir) {
    startAnimation();
});
