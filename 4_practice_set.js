// Question-1
let a= parseInt(prompt("What is your age?"))
if(a>10 && a<20){
    console.log("Your age lies between 10 & 20");
}
else{
    console.log("Your age doesn't lie between 10 & 20");
}

//Question 2
let a= prompt("What is your age?")
switch(a){
    case '1': console.log("Your age is 1")
    break;
    case '2': console.log("Your age is 2")
    break;
    case '3': console.log("Your age is 3")
    break;
    default: console.log("Special case")
    break;
}

//Question 3
let a = parseInt(prompt("Enter a number: "))
if(a%2==0 && a%3==0){
    console.log("Divisible by 2 & 3")
}
else{
    console.log("Not divisible by 2 & 3")
}

//Question 4
let a = parseInt(prompt("Enter a number: "))
if(a%2==0 || a%3==0){
    console.log("Divisible by 2 or 3")
}
else{
    console.log("Not divisible by 2 or 3")
}

//Question 5
let age = parseInt(prompt("Your age is:"))
let x=(age>18)?"You can drive":"You cannot drive";
console.log(x);