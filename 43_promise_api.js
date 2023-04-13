//Promise api gives us some methods to use with promises.
//Promise all method: when we want to see the value of all the promises at the same time irrespective of their timeout difference.

let p1 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Value 1")
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        //resolve("Value 2")
        reject(new Error("Error"))
    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Value 3")
    },3000)
})

//if we use p1.then,p2.then and p3.then we will get value after 1, 2, 3 seconds respectively instead of together
//so we use promise.all method to create an array of all promises and then use .then on this array

//METHOD-1
let promise_all = Promise.all([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
})

//In case any of the promises doesn't resolves and instead rejects then promise.all won't work
//In this case we can use promise.allSettled method

//METHOD-2
let promise_settled = Promise.allSettled([p1,p2,p3])
promise_settled.then((value)=>{
    console.log(value)
})

//METHOD-3
//this method is Promise.race that gives the value of the promise that resolves first out of all
let promise_race = Promise.race([p1,p2,p3])
promise_race.then((value)=>{
    console.log(value)
})
//Here we will get Value 1 because p1 resolves the quickest in 1 second
//In case, there is an error in any promise race won't work. In that scenario use promise.any

//METHOD-4
let promise_any = Promise.any([p1,p2,p3])
promise_any.then((value)=>{
    console.log(value)
})

//METHOD-5
let promise_res= Promise.resolve(6)
promise_res.then((value)=>{
    console.log(value)
})

//METHOD-6
let promise_rej=Promise-reject(new Error("Hey"))
promise_rej.then((value)=>{
    console.log(value)
})