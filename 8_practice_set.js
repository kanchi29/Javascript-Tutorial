//Problem 1
let marks={
    harry:90,
    rohan:70,
    aakash:7
}
 for (let i=0;i<Object.keys(marks).length;i++){
   // console.log("The marks of " + Object.keys(marks)[i] + " are " +marks[Object.keys(marks)[i]])
 }

// Problem 2

for (let key in marks){
   // console.log("The marks of "+ key + " are " + marks[key])
}

//Problem 3
let cn=28;
let i;
i = prompt("Enter a number");
while(i!=cn){
    console.log("Try Again");
    i = prompt("Enter a number");
}
console.log("You have entered the correct number");

//Problem 4
const mean = (a,b,c,d,e)=>{
    let m;
    m=(a+b+c+d+e)/5
    return m;
}
console.log(mean(1,2,3,4,5));