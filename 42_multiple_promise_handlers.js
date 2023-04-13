let p1 = new Promise(function(resolve,reject){
    console.log("Promise 1 is pending")
    setTimeout(function(){
        resolve('1')
    },2000)
})

p1.then((value)=>{
    console.log("Promise 1 is done")
}).then((value)=>{                          //This is promise chaining
    console.log("Promise 2 is pending")
    setTimeout(function(){
        console.log("Promise 2 is done")
    },3000)
})

p1.then((value)=>{                          //This is multiple promise handler for p1
    console.log("Hurray")
})