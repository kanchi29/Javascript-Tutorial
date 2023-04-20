let p = fetch("https://https://bible-api.com/john%203:16")
p.then((value1)=>{
    console.log(value1.status)
    console.log(value1.ok)
    return value1.json
}).then((value2)=>{
    console.log(value2)
})

//AJAX- Asynchonous JavaScript and XML
//fetch is used to get data over the network
//let promise = fetch(url,[options])