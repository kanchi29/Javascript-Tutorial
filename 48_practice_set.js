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
console.log("hello")
let p = ()=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hello World")
        reject(new Error("This is an error!"))
    },3000)
  })
}
let a = async ()=>{
    try{
        let c = await p()
        console.log(c)
    }
    catch(err){
        console.log("This error has been handled")
    }
}
a()