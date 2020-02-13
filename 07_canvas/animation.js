/*
Coby Sontag, Joseph Lee
SoftDev1 pd1
K#07
2020-02-12
*/
var id;
var radius = 10;
var factor = 1;
var animating=false;
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var start = document.getElementById("start");
var stop = document.getElementById("stop");

var pause = function(){
  if (id!=null){
    window.cancelAnimationFrame(id)
    animating=false;
  }//console.log(mode);
}
var animate = function(){
  radius += factor * 2
  ctx.clearRect(0,0,c.width,c.height);
  ctx.beginPath();
  ctx.arc(300, 300, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  if (radius == 300 || radius == 2){
      factor = factor * -1;
  }
  id=window.requestAnimationFrame(animate);
}
var draw = function(){
  if(!animating){
    animating=true;
    animate();
  }
}

stop.addEventListener('click', pause);
start.addEventListener('click', draw);
//console.log("F")
