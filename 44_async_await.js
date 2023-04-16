//an async function ensures that it returns a promise 
// async function harry(){
//     return 5;
// }

// harry().then(function(x){
//     console.log(x)
// })

async function harry()
{
    let delhiWeather=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("27 deg")
},2000)
})
let bangaloreWeather=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("21 deg")
},5000)
})
// delhiWeather.then(alert)
// bangaloreWeather.then(alert)
let delhiW = await delhiWeather //this will get the promise result in variable delhiW
let bangaloreW = await bangaloreWeather //this will execute only after delhiWeather has been executed as we used await
return[delhiW,bangaloreW]
}

console.log("Welcome to weather control room")
let a = harry() //this aync function will always return a promise
a.then((value)=>{
    console.log(value) 
})

//await and async is used to control the flow of execution