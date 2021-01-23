var images = ['image1', 'image2', 'image3', 'image4'];
var n = 0;
var getimage = document.getElementById("myimg");
var element1 = document.getElementById("btn1");
var element2 = document.getElementById("btn2");


function show() {
    if (element1.style.visibility == "visible") {
        element1.style.visibility = "hidden";
    } else {
        element1.style.visibility = "visible";
    }
    if (element2.style.visibility == "visible") {
        element2.style.visibility = "hidden";
    } else {
        element2.style.visibility = "visible";
    }
}


function onprevbtnclick() {
    if (n >= 1) {
        getimage.src = "./images/" + images[--n] + ".png";
        getimage.style.width = "100%";
        getimage.style.height = "auto";
    } else {
        n = images.length - 1;
        getimage.src = "./images/" + images[n] + ".png";
    }
}

function onnextbtnclick() {
    let x = images.length - 2;
    if (n <= x) {
        getimage.src = "./images/" + images[++n] + ".png";
    } else {
        getimage.src = "./images/" + images[0] + ".png";
        n = 0;
    }

}