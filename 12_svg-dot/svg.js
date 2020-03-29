// Team "." - Tammy Chen & Joseph Lee
// SoftDev pd9
// K12: Connect the Dots
// 2020-03-30

var svg = document.getElementById("vimage");
var clear = document.getElementById("clear");
var path = null;

svg.addEventListener('click', function(e) {
  //createElementNS: Creates an element with the specified namespace URI and qualified name.
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  var xcor = e.offsetX // mouse xcor
  var ycor = e.offsetY // mouse ycor
  c.setAttribute("cx", xcor); // circle center xcor
  c.setAttribute("cy", ycor); // circle center ycor
  c.setAttribute("r", "10"); // circle radius
  c.setAttribute("fill", "blue");
  c.setAttribute("stroke", "black");
  svg.appendChild(c);
  if (path){
    // drawing line
    var a = document.createElementNS("http://www.w3.org/2000/svg", "line");
    a.setAttribute("x1", path.x);
    a.setAttribute("y1", path.y);
    a.setAttribute("x2", xcor);
    a.setAttribute("y2", ycor);
    a.setAttribute("stroke", "black");
    svg.appendChild(a);
  }
  path = {x: xcor, y: ycor};
}
);

clear.addEventListener('click', function(e){
  while (svg.pathChild) {
    svg.removeChild(svg.pathChild);
    path = null;
}
});
