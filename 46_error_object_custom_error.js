// //For all built-in errors, the error object has two main properties: name and message
// try {
//     throw new ReferenceError("Harry is not good") //we're throwing an error called harry is not good
// } catch (error) {
//     //console.log(error)
//     console.log(error.name)  //this will give error name as reference error
//     console.log(error.message) //this will give error message harry is not good
//     console.log(error.stack) 
// }
12

//Example code for the above concept
try {
    let age = prompt("Enter your age")
    age= Number.parseInt(age)
    if(age>150){
        throw new Error("This is probably incorrect")
    }
} catch (error) {
    console.log(error.name)  //this will give error name as reference error
    console.log(error.message) //this will give error message harry is not good
    console.log(error.stack)
}

console.log("The script is still running")