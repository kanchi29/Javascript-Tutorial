document.write("Hello")

// let a = setTimeout(function(){
//     alert("I am inside set timeout")
// },5000)

// let b = prompt("do you want to run set timeout?")
// if(b=='n'){
//     clearTimeout(a)
// }
// console.log(a);
// syntax of setTimeout :
// let timerId = setTimeout(function,<delay>,<arg 1>, <arg 2>)

const sum = (a,b)=>{
    console.log("Yes i am running ", (a+b))
}
let timerId = setTimeout(sum,5000,4,6);
console.log(timerId);

clearTimeout(timerId) //to cancel the execution

    // setInterval(function (){
    //     alert("This is set interval")
    // },3000)
