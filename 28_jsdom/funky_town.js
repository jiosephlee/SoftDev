//Team SDU - Joseph Lee & Emory Walsh
//SoftDev1 pd1
//K27 -- Sequential Progression
//2019-12-10


var fact = function(n){
    if (n < 2) return 1;
    return (n * (fact(n - 1)));
}

var fib = function(n){
    if (n == 0) return 0;
    else if (n < 3) return 1;
    else return fib(n-1) + fib(n-2);
}

var gcd = function (a,b){
    if (b > a) return gcd(b, a);
    if (a % b == 0) return b;
    return gcd(b, a % b);
}

var randElement = function (list){
	return list[Math.floor(Math.random()*list.length)];
}

var factbutton = document.getElementById("fact");
var fibbutton = document.getElementById("fib");
var gcdbutton = document.getElementById("gcd");
var randbutton = document.getElementById("randStudent");

var errormessage = function(){
  document.getElementById("error").style.color="red";
  document.getElementById("error").innerHTML="Please fill out all fields correctly";
}
var factdemo = function(){
  var inputs = document.getElementById("factform").elements["factarg"];
  var factarg = parseInt(inputs.value);
  if (!isNaN(factarg)){
    console.log(fact(factarg));
  } else{
    errormessage();
  }
}
var fibdemo = function(){
  var inputs = document.getElementById("fibform").elements["fibarg"];
  var fibarg = parseInt(inputs.value);
  if (!isNaN(fibarg)){
    console.log(fib(fibarg));
  } else{
    errormessage();
  }
}
var gcddemo = function(){
  var input1 = document.getElementById("gcdform").elements["gcdarg1"];
  var input2 = document.getElementById("gcdform").elements["gcdarg2"];
  var gcdarg1 = parseInt(input1.value);
  var gcdarg2 = parseInt(input2.value);
  if (!isNaN(gcdarg1) && !isNaN(gcdarg2)){
    console.log(gcd(gcdarg1,gcdarg2));
  } else{
    errormessage();
  }
}
var randdemo = function(){
  var list = document.getElementById("randform").elements["randarg"].value.split(",");
  if (list != undefined && list.length != 0){
    console.log("List: " + list + "\nRandom Element: " + randElement(list));
  } else {
    errormessage();
  }
}
factbutton.addEventListener("click",factdemo);
fibbutton.addEventListener("click",fibdemo);
gcdbutton.addEventListener("click",gcddemo);
randbutton.addEventListener("click",randdemo);
