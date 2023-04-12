let p1 = new Promise(function(resolve,reject){
    console.log("Promise is pending.")
    setTimeout(function(){
        console.log("Promise is fulfilled.")
        resolve(true)
    },5000)
}) 
//In this the promise is being fulfilled and we are getting the message after promise is executed
console.log(p1) //we will get two parameters of promises: state and result
//state can be pending initially, then either fulfilled or rejected
//result is undefined initially, then changes to value(resolved) or error(rejected) 

let p2 = new Promise(function(resolve,reject){
    console.log("Promise is pending.")
    setTimeout(function(){
        console.log("Promise is Rejected.")
        reject(new Error("There is an error"))
    },5000)
})
//In this the promise is rejected and error is received.

//Now, we use 'then' to get the value after promise is fulfilled.
p1.then(function(value){
    console.log(value)
})
//we can also write p1.then(alert) to get the value as alert instead of writing our own function

//We will receive the value 'true' in console when p1 is fulfilled.

//We use 'catch' to catch the errors before they can be shown on the console.
p2.catch(function(error){
    console.log("Some error has occured in p2")
})
//We will not get any error in console now as it has already been catched and instead it will show a message about the error.

//We can also catch the error like this when we want to put condition to check for job done or failed.
p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})