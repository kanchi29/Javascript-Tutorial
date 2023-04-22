// let p = fetch("https://https://bible-api.com/john%203:16")
// p.then((value1)=>{
//     console.log(value1.status)
//     console.log(value1.ok)
//     return value1.json
// }).then((value2)=>{
//     console.log(value2)
// })

//AJAX- Asynchonous JavaScript and XML
//fetch is used to get data over the network
//let promise = fetch(url,[options])

//Fetch API provides a fetch() method defined on the window object, which you can use to perform requests
//This method returns a 'Promise' that you can use to retrieve the response of the request

fetch('https://api.covid19api.com/summary').then((value)=>{
    //console.log(value)
    return value.json()
}).then((actualdata)=>{
    console.log(actualdata)
    //console.log(actualdatas.Countries[77])  This is the error line which wil execute catch
    console.log(actualdata.Countries[77])
    console.log(actualdata.Countries[77].CountryCode)
    //document.getElementById("example").innerHTML = actualdata.Countries[77].Country //To display it on document screen instead of console
    document.getElementById("example").innerHTML = `The country name is  ${actualdata.Countries[77].Country} and Total Confirmed cases are ${actualdata.Countries[77].TotalConfirmed}`
}).catch((error)=>{
    console.log(`The Error: ${error}`);
}); 


