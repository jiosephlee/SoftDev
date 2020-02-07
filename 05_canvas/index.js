// Joseph Lee and David Sontag -- Team Red
// SoftDev1 pd1
// K05 -- ...and I want to Paint It Better
// 2020-02-07
const canvas = document.getElementById('slate');
const ctx = canvas.getContext('2d');

//toggle button stores current mode
var toggle = function() {
  var mode = document.getElementById("toggle");
  var modeText = mode.innerHTML.split(':')[1];
  if (modeText == " Rectangle") {
    mode.innerHTML = "Current Mode: Dot";
  } else {
    mode.innerHTML = "Current Mode: Rectangle";
  }
};

// draws box or dot when canvas clicked
var draw = function(e) {
    // the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node
    mouseX = e.offsetX;
    // the offset in the Y coordinate of the mouse pointer between that event and the padding edge of the target node
    mouseY = e.offsetY;
    var mode = document.getElementById("toggle");
    var modeText = mode.innerHTML.split(':')[1];
    console.log(modeText);
    if (modeText == " Rectangle") {
      drawBox(mouseX, mouseY);
    } else {
      drawDot(mouseX, mouseY);
    }
};

// draws a box with upper left corner at mouse location
var drawBox = function(x, y) {
    console.log("drawing box");
    ctx.fillStyle = "#ff0000";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.fillRect(x, y, 50, 50);
    ctx.strokeRect(x, y, 50, 50);
}

// draws a dot with center at mouse location
var drawDot = function(x,y) {
    console.log("drawing dot");
    // starts a new path by emptying the list of sub-paths
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}

// clears the canvas
var clear = function() {
    console.log("clearing canvas");
    ctx.clearRect(0,0, canvas.width, canvas.height);
};

// sets event listener for canvas click
canvas.addEventListener('click', draw);

// sets event listeners for clear and toggle mode buttons
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', clear);

var togglemodeBtn = document.getElementById("toggle");
togglemodeBtn.addEventListener('click', toggle);
