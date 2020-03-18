/*
Coby Sontag, Joseph Lee
SoftDev1 pd1
K#07
2020-02-12
*/

var animating=false;
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var start2 = document.getElementById("start2");

var pause = function(){
  if (id!=null){
    window.cancelAnimationFrame(id)
    animating=false;
  }//console.log(mode);
}

var id;
var radius = 10;
var factor = 1; //For negating motion
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

var logo = new Image();
logo.src = "dvd_logo.png";
var x=300; var y=300;
var xFact = 1; var yFact = 1;
var animate2 = function(){
  ctx.clearRect(0,0,c.width,c.height);
  x += 3*xFact; y += 3*yFact;
  ctx.drawImage(logo,x,y,100,70);
  if(x <= 0 || x >= 500){
    xFact *= -1;
  }
  if(y <= 0 || y >= 530){
    yFact *= -1;
  }
  id=window.requestAnimationFrame(animate2);
}

var init = function(){
  if(animating){
    pause();
  }
  if(!animating){
    animating=true;
  }
}
var draw = function(){
  init();
  animate();
}
var draw2 = function(){
  init();
  x = Math.random()*600;
  y = Math.random()*600;
  xFact = 1;
  yFact = 1;
  animate2();
}

stop.addEventListener('click', pause);
start.addEventListener('click', draw);
start2.addEventListener('click',draw2)
//console.log("F")
