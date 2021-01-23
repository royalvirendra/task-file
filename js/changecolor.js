function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changecolor() {
    getRandomColor();
    let colorvalue = getRandomColor();
    document.body.style.backgroundColor = colorvalue;
}