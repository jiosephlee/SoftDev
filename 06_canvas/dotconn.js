/*
Manfred Tan, Joseph Lee
SoftDev1 pd1
K#06 -- Dot Dot Dot
2020-02-11
*/

var c = document.getElementById("playground")
var ctx = c.getContext("2d")
ctx.fillStyle = "#8a28e6"

//Connect Circles
var first = true;
var lastX = 0.0;
var lastY = 0.0;

//Clear canvas
var clear = function(e) {
    console.log("HELLO!!!");
    ctx.clearRect(0,0,600,600);
    first = true;
    return null;
};
var button  = document.getElementById("clear");
button.addEventListener('click', clear);

//Draw shape
var draw = function(e) {
    console.log("draw")
    x = e.offsetX;
    y = e.offsetY;
    if (x > 8 && x < 608 && y > 8 && y < 608) { //in box
        console.log("CIRC");
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();

        if (first == true) {
            console.log("TRUE")
            lastX = x;
            lastY = y;
            first = false;
        }
        else if (first == false) {
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x,y);
            ctx.lineWidth = 0;
            ctx.stroke();
            ctx.closePath();
            lastX = x;
            lastY = y;
        }
    };
};

c.addEventListener('click', draw);
