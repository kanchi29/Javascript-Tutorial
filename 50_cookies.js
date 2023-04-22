//Cookies are small strings of data stored directly in the browser
//In javascript, document.cookie provides access to cookies
//document.cookie contains key value paires separated by ';'

console.log(document.cookie)
document.cookie = "name=kanchi123456789" //This is a set call //By doing this we are not overwriting the existing cookies,rather we are adding more cookies
document.cookie = "name2=kanchi123456789"  //This will only make the value of cookie name and name2 as kanchi123456789
console.log(document.cookie)
document.cookie = "name=kanchi"  //this will update the previous value of cookie name with kanchi
console.log(document.cookie)
let key = prompt("Enter key")
let value = prompt("Enter value")
//abradocument.cookie = `${key} = ${value}`
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}` 
//We use encodeURIComponent to encode special characters so that they can be added as cookies without any failure
//These encoded cookies can later on be decoded using DecodeURIComponent  
console.log(document.cookie) 