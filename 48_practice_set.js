// const loadscript = async (src)=>{
//     return new Promise((resolve,reject)=>{
//     let script = document.createElement("script")
//     script.src = src;
//     script.onload = ()=>{
//         resolve(src+ " Done")
//     }
//     document.head.append(script)
// })
// }
//Problem 1
//  let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(value)
//     alert("Script loaded")
// })

//Problem 2
// const main2=async()=>{
// let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
// console.log(a) 
// }
// main2()

//Problem 3
// console.log("hello")
// let p = ()=>{
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Hello World")
//         reject(new Error("This is an error!"))
//     },3000)
//   })
// }
// let a = async ()=>{
//     try{
//         let c = await p()
//         console.log(c)
//     }
//     catch(err){
//         console.log("This error has been handled")
//     }
// }
// a()

//Problem 4

let p1 = async()=>{  
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)
})
}
let p2 = async()=>{  
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },1000)
    })
    }
let p3 = async()=>{  
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30)
        },3000)
    })
}

const run = async ()=>{
    console.time("run")
    // let a1 = await p1() //Fetch 10 new products from the database
    // let a2 = await p2() //Fetch another 10 new products from the database
    // let a3 = await p3() //Fetch yet another 10 new products from the database
    // console.log(a1,a2,a3)
    //this above method of inidividual await takes more time than if its done at once through promise.all
    
    //through promise.all we can schedule them all parallely, it will get done in the time that has largest setTimeout
    let a1 = p1() //Fetch 10 new products from the database
    let a2 = p2() //Fetch another 10 new products from the database
    let a3 = p3() //Fetch yet another 10 new products from the database
    let a1a2a3 = await Promise.all([a1,a2,a3]) //We will get result of all three at once in an array in this variable a1a2a3
    console.log(a1a2a3)
    console.timeEnd("run")
}

run()