//Team SubtleAsianCoders - yaru luo && josephSpelledMyNameWrongSoIDisownhimAsMyPartner
//SoftDev1 pd1
//K29 -- Sequential Progression III: Season of the Witch
//2019-12-12

var lis = document.getElementsByTagName( 'li');
for( var i=0; i<lis.length; i++){
    console.log( lis[ i]);
    lis[ i].addEventListener( 'mouseover', function(){  // when mouse goes over an item in list,
	                                           h.innerHTML = this.innerHTML;                   // heading changes at top into the item text
                                           });
    lis[ i].addEventListener( 'mouseout',               // when mouse no longer over the list item,
			           () => revertHeading());   // heading changes back to default "Hello World!"
    lis[ i].addEventListener( 'click', function(){      // when list item is clicked,
	                                       this.remove()                                   // it is removed from the DOM
	                                       console.log( 'removed item')
                                       });
}
var revertHeading = function(){
    var header = document.getElementById( 'h');
    header.innerHTML = 'Hello World!';
};

// WORD
var thebutton = document.getElementById("b");          // retrieves The button element by id name
thebutton.addEventListener( "click", () => addItem());
var addItem = function() {
    var list = document.getElementById( "thelist");
    console.log(list);
    var item = document.createElement( "li");    // (when button is pushed) adds new list element in HTML
    item.innerHTML = "WORD";
    list.appendChild( item);                            // writes text in the HTML element
    item.addEventListener( 'click', function(){
                          this.remove()
                          console.log( 'removed item')});   // remove if clicked

    item.addEventListener( 'mouseover', function(){  // when mouse goes over an item in list,
                                             h.innerHTML = this.innerHTML;                   // heading changes at top into the item text
                                           });
    item.addEventListener( 'mouseout',               // when mouse no longer over the list item,
                 () => revertHeading());   // heading changes back to default "Hello World!"
}

// fibonacci - recursive
var fib = function(num){
    if (num == 0) return 0;
    else if (num < 3) return 1;
    else return fib(num-1) + fib(num-2);
}
var index = 1;  // current list number on the fib list
var fibbutton = document.getElementById("fb");
fibbutton.addEventListener("click", () => addFib(index));
var addFib = function( input){
    console.log( input + " fib #: " + fib( input));
    var list = document.getElementById( "fiblist");
    var item = document.createElement( "li");    // (when button is pushed) adds new list element in HTML
    if(index == "1"){
      item.innerHTML += index + "st term of fib: " + fib( input);
    } else if (index == "2"){
      item.innerHTML += index + "nd term of fib: " + fib( input);
    } else if (index == "3"){
      item.innerHTML += index + "rd term of fib: " + fib( input);
    } else{
      item.innerHTML += index + "th term of fib: " + fib( input);
    }
    item.addEventListener( 'click', function(){
                          this.remove()
                          console.log( 'removed item')});   // remove if clicked

    item.addEventListener( 'mouseover', function(){  // when mouse goes over an item in list,
                                             h.innerHTML = this.innerHTML;                   // heading changes at top into the item text
                                           });
    item.addEventListener( 'mouseout',               // when mouse no longer over the list item,
                 () => revertHeading());   // heading changes back to default "Hello World!"
    list.appendChild(item);
    index++;
}

var fibarray=[ 0, 1, 1];

// fibonacci - dynamic programming
var fib2 = function( n){
    if( fibarray[ n]){
	return fibarray[ n];
    }
    fibarray.push( fibarray[ n-1] + fibarray[ n-2]);
    return fibarray[ n];
}

// factorial
var fact = function( num){
    if( num < 2){
	return 1
    }
    return num * fact( num - 1)
}
var factIndex = 1; // current list number on the factorial list
var factbutton = document.getElementById( 'factB');
factbutton.addEventListener( 'click', () => addFact( factIndex));
var addFact = function( input){
    console.log( input + " fact #: " + fact( input));
    var list = document.getElementById( 'factlist');
    var item = document.createElement( "li");    // (when button is pushed) adds new list element in HTML
    item.innerHTML += "factorial of " + factIndex + ": " + fact( input);
    item.addEventListener( 'click', function(){
                          this.remove()
                          console.log( 'removed item')});   // remove if clicked

    item.addEventListener( 'mouseover', function(){  // when mouse goes over an item in list,
                                             h.innerHTML = this.innerHTML;                   // heading changes at top into the item text
                                           });
    item.addEventListener( 'mouseout',               // when mouse no longer over the list item,
                 () => revertHeading());   // heading changes back to default "Hello World!"
    list.appendChild(item);
    factIndex++;
}

// triangular numbers: objects that can form an equilateral triangle
var tri = function( n){
    return( n * ( n+1) / 2);
};
var triIndex = 1; // current list number on the triangular number list
var tributton = document.getElementById( 'tb');
tributton.addEventListener( 'click', () => addTri( triIndex));
var addTri = function( input){
    console.log( input + " triangular #: " + tri( input));
    var list = document.getElementById( 'trilist');
    var item = document.createElement( "li");    // (when button is pushed) adds new list element in HTML
    if(triIndex == "1"){
      item.innerHTML += triIndex + "st term of Triangular Numbers Sequence: " + fib( input);
    } else if (triIndex == "2"){
      item.innerHTML += triIndex + "nd term of Triangular Numbers Sequence: " + fib( input);
    } else if (triIndex == "3"){
      item.innerHTML += triIndex + "rd term of Triangular Numbers Sequence: " + fib( input);
    } else{
      item.innerHTML += triIndex + "th term of Triangular Numbers Sequence: " + fib( input);
    }
    item.addEventListener( 'click', function(){
                          this.remove()
                          console.log( 'removed item')});   // remove if clicked

    item.addEventListener( 'mouseover', function(){  // when mouse goes over an item in list,
                                             h.innerHTML = this.innerHTML;                   // heading changes at top into the item text
                                           });
    item.addEventListener( 'mouseout',               // when mouse no longer over the list item,
                 () => revertHeading());   // heading changes back to default "Hello World!"
    list.appendChild(item);
    triIndex++;
}

// the lazy caterer's sequence: max number of pieces formed when slicing a pancake w n cuts
var slices = function( n){
    return( n * ( n+1)) / 2 + 1;
};
var pancakeIndex = 1; // // current list number on the lc list
var lcbbutton = document.getElementById( 'lcb');
lcbbutton.addEventListener( 'click', () => addPancakeSlices( pancakeIndex));
var addPancakeSlices = function( input){
    console.log( "cuts: " + input + ", # of slices: " + slices( input));
    var list = document.getElementById( 'pancakelist');
    var item = document.createElement( "li");    // (when button is pushed) adds new list element in HTML
    if(pancakeIndex == "1"){
      item.innerHTML += pancakeIndex + "st term of Lazy Carterer's Sequence: " + fib( input);
    } else if (pancakeIndex == "2"){
      item.innerHTML += pancakeIndex + "nd term of Lazy Carterer's Sequence: " + fib( input);
    } else if (pancakeIndex == "3"){
      item.innerHTML += pancakeIndex + "rd term of Lazy Carterer's Sequence: " + fib( input);
    } else{
      item.innerHTML += pancakeIndex + "th term of Lazy Carterer's Sequence: " + fib( input);
    }
    item.addEventListener( 'click', function(){
                          this.remove()
                          console.log( 'removed item')});   // remove if clicked

    item.addEventListener( 'mouseover', function(){  // when mouse goes over an item in list,
                                             h.innerHTML = this.innerHTML;                   // heading changes at top into the item text
                                           });
    item.addEventListener( 'mouseout',               // when mouse no longer over the list item,
                 () => revertHeading());   // heading changes back to default "Hello World!"
    list.appendChild(item);
    pancakeIndex++;
}
