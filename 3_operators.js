console.log("Operators in js");

//Arithmetic operators
let a= 45;
let b= 4;
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a**b=", a**b);
console.log("a%b=", a%b);
console.log("a++=", a++);
console.log("a--=", a--);
console.log("++a=", ++a);

//Assignment Operators
let c = 25;
console.log("c = ", c += 5);
console.log("c = ", c -= 5);
console.log("c = ", c *= 2);
console.log("c = ", c /= 5);
console.log("c = ", c **= 2);

//Comparison Operators
let x = 5;
let y = "5";
console.log( "x and y are: ", x,"&",  y);
console.log("x == y is", x==y);
console.log("x != y is", x!=y);
console.log("x === y is", x===y);
console.log("x !== y is", x!==y);

//Logical Operators
console.log(a>b && b>0);  //AND - All wxpressions must be true for result to be true
console.log(b>a || a>0);  //OR - Atleast one expression is true
console.log(!(a>b));      //NOT - Turns true to false and false to true