// Team Jo - Joseph Lee
// SoftDev pd1
// K14: Ask Circles [Change || Die] While Moving, etc.
// 2020-04-31

var pic = document.getElementById("vimage");
var clear_button = document.getElementById("clear");
var move_button = document.getElementById("move");
var xtra_button = document.getElementById("extra");
var id = 0;

pic.innerHTML = '';

var draw = function(e){
  if (e.target == pic){
    var x = e.offsetX;
    var y = e.offsetY;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "15");
    c.setAttribute("fill", "blue");
    c.setAttribute("inc_x", 1);
    c.setAttribute("inc_y", 1);
    c.addEventListener('click', change);
    pic.appendChild(c);
  }
};

var change = function(e){
  if (e.target.getAttribute("fill") = "blue"){
    e.target.setAttribute("fill", "cyan");
  }
  else{
    e.target.setAttribute("cx", Math.floor(Math.random() * 450));
    e.target.setAttribute("cy", Math.floor(Math.random() * 450));
    e.target.setAttribute("fill", "blue");
  }
};

var move = function(e){
  var d = document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "circle");
  for (i = 0; i < d.length; i++){
    var dot = d[i];
    var x = parseInt(dot.getAttribute("cx"));
    var y = parseInt(dot.getAttribute("cy"));
    var inc_x = parseInt(dot.getAttribute("inc_x"));
    var inc_y = parseInt(dot.getAttribute("inc_y"));
    if (x > 480){
      dot.setAttribute("inc_x", -1);
    }
    else if (x < 20){
      dot.setAttribute("inc_x", 1);
    }
    if (y > 480){
      dot.setAttribute("inc_y", -1);
    }
    else if (y < 20){
      dot.setAttribute("inc_y", 1);
    }
    x += inc_x;
    y += inc_y;
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
  }
  if (id != 0) {
    id = window.requestAnimationFrame(move);
  }
};

var xtra = function(e){
  var d = document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "circle");
  for (var i = 0; i < d.length; i++){
    var dot = d[i];
    dot.setAttribute("r", Math.floor(Math.random() * 50) + 1);
  }
};


pic.addEventListener('click', draw);
xtra_button.addEventListener('click', xtra);

var clear = function(e){
  pic.innerHTML='';
  window.cancelAnimationFrame(id);
  id = 0;
};

clear_button.addEventListener('click', clear);

move_button.addEventListener('click', function(e){
    window.cancelAnimationFrame(id);
    id = window.requestAnimationFrame(move);
  }
);
