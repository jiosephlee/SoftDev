// Team "." - Tammy Chen & Joseph Lee
// SoftDev pd9
// K13: Ask Circles [Change || Die]
// 2020-03-31

var pic = document.getElementById('vimage');
var clear_button = document.getElementById("clear");

var draw = function(e) {
  if (e.target == pic){
    var x = e.offsetX; // mouse xcor
    var y = e.offsetY; // mouse ycor
    // make circle
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    c.addEventListener('click', changeCircle); // add fxn
    pic.appendChild(c);
  }
};

var changeCircle = function(e) {
  if (e.target.getAttribute("fill") == "blue"){   // if circle blue
    e.target.setAttribute("fill", "cyan");
  }
  else { // if circle != blue
    e.target.setAttribute("cx", Math.floor(Math.random() * 450));
    e.target.setAttribute("cy", Math.floor(Math.random() * 450));
    e.target.setAttribute("fill", "blue");
  }
};

var clear = function(){
  while (pic.firstChild){
    pic.removeChild(pic.firstChild);
  }
}

pic.addEventListener('click', draw);
clear_button.addEventListener('click', clear);
