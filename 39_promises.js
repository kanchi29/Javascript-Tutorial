//promises- promise of code execution. it is a solution of callback hell.
//the code either executes or fails, in either case the subscriber will be informed.
//syntax is :
// let promise = new promise(function(resolve,reject){
    //executor
//});

//resolve and reject are two callbacks provided by javascript itself. 
//resolve  gives value for when job is fulfilled successfully
//reject  gives error for when the job has failed.

let promise = new Promise(function(resolve,reject){
    alert("HELLO");
    resolve(56)
})

console.log('Hello one')
setTimeout(function(){
    console.log("Hello Two in 3 seconds")
},3000)

console.log("My name is " + "Hello three");
console.log(promise);

// Use of promise is if we want to do the following tasks parallely:
// Fetch google.com homepage ==> when its done, do console.log("google.com homepage done")
// Fetch data from a data Api 
// Fetch pictures from the Server
// Print downloading
// Rest of the Script 
// All of this can be done parallely and in an organized manner using promises