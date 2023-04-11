//Synchronous programming - sequence one by one run
// const prompt=require('prompt-sync')();
// let a = prompt("What is your name? ");
// let b = prompt("What is your favorite color? ");
// let c = prompt("What is your age?" );
// console.log(a + " is " + c + " years old and their favorite color is " + b );

//Asynchronous programming - settimeout will be scheduled and run in background meanwhile the code ahead of it will keep running
// console.log("Start")
// setTimeout(function(){
//     console.log("Hey how are you? ");
// }, 3000)
// console.log("End")

// Callbacks
function loadScript(src, callback){
    let script = document.createElement('script')
    script.src=src
    script.onload=function(){
        console.log("Loaded script with SRC = " + src);
        callback();
    }
    document.body.appendChild(script)
}
function hello(){
    alert('hello world');
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",hello)

//callback is a function that we send as an arguement inside a function so that it is called inside the function when an action is completed
//we can also pass an arguement inside a callback function for example:
// //function loadScript(src, callback){
//     let script = document.createElement('script')
//     script.src=src
//     script.onload=function(){
//         console.log("Loaded script with SRC = " + src);
//         callback(src);
//     }
//     document.body.appendChild(script)
// }
// function hello(src){
//     alert('hello world'+src);
// }