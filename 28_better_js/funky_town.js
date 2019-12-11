//Team SDU - Joseph Lee & Vishwaa Sofat
//SoftDev1 pd1
//K27 -- Sequential Progression
//2019-12-10


var fact = function(n){
    if (n < 2) return 1;
    return (n * (fact(n - 1)));
}

var fib = function(n){
    if (n == 0){
        return 0;
    }
    else if (n == 1){
        return 1;
    }
    else{
        return fib(n-1) + fib(n-2);
    }
}

var gcd = function (a,b){
    if (b > a) return gcd(b, a);
    if (a % b == 0) return b;
    return gcd(b, a % b);
}

var randStudent = function (list){
	return list[Math.floor(Math.random()*list.length)];
}

var factbutton = document.getElementById("fact");
var fibbutton = document.getElementById("fib");
var gcdbutton = document.getElementById("gcd");
var randbutton = document.getElementById("randStudent");
if (factbutton) {
    factbutton.addEventListener('click',console.log(fact(5)));
}
