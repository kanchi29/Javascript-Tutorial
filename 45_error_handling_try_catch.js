setTimeout(()=>{
    console.log("Hacking your system.. Please wait")
},2000)

try{
    console.log(kanchi)  //try will catch the error and make the code run without halting due to this error.
}
//if there is an error inside try then error will be executed, if not then it will be ignored.
catch(error){
    console.log(error)
    // console.log("Error has been handled")
}

setTimeout(()=>{
    console.log("Hacked your system successfully")
  //  console.log(kanchi) //this is an error beacuse kanchi is not defined
},4000)



// try{
// setTimeout(()=>{
//     console.log("Hacking your system.. Please wait")
// },2000)
// }

//Above code won't work because try will only catch direct errors, not a statement within a statement