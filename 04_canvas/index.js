
const clear = function(){
  var c = document.getElementById("slate");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.heigth);
}

const dot = function(x,y){
  let c = document.getElementById("slate");
  let ctx = c.getContext("2d");
  ctx.drawRect(x,y,1,1);
}

const rect = function(x,y,width,height){
  let c = document.getElementById("slate");
  let ctx = c.getContext("2d");
  ctx.drawRect(x,y,width,height);
}

var cbutton = document.getElementById("clear");
cbutton.addEventListener("click",clear);
