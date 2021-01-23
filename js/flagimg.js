var flaglist = ['flag1', 'flag2', 'flag3'];
var listofinputid = ['image1input', 'image2input', 'image3input'];
var imageid = ['image1', 'image2', 'image3'];
var valueofinput = ['usa', 'india', 'UK'];
var myfunctions = ['image1func', 'image2func', 'image3func'];
var wrapper = document.getElementById("results");
var lengthofarr = (flaglist.length) - 1;
var myHTML = '';


function show(e) {


    var element1 = document.getElementById((e.id) + 'input');

    if (element1.style.visibility == "visible") {
        element1.style.visibility = "hidden";
    } else {
        element1.style.visibility = "visible";
    }
}

for (var i = 0; i <= lengthofarr; i++) {
    myHTML += '<div class="col-sm-4 container"><img src="./images/' + flaglist[i] + '.png " width= "100%" height= "auto" id="' + imageid[i] + '" onmouseover="show(this)" onmouseout="show(this)"/><input type = "text" id="' + listofinputid[i] + '" value ="' + valueofinput[i] + '" class="form-control" /></div>';
}

wrapper.innerHTML = myHTML