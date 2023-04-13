let p1 = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("Resolved after 2 seconds");
        resolve(56)
    }, 2000);
})

p1.then((value) => {
    console.log(value)
    let p2 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Promise 2")
        },2000)
    })
    return p2;
    }).then((value)=>{
        console.log("We are done")
}).then(function(value){
    console.log("We are done final")
})