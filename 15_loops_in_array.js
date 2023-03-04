let num = [12,34,56,78,90]
// for(let i =0; i<num.length;i++){
//     console.log(num[i]);
// }

//ForEach loop 
num.forEach((square)=>{
    console.log(square*square)
})

//Array.from is used for HTML collections to make them array, basically to make any object an array 
let name = "Kanchi"
let arr = Array.from(name)
console.log(arr)

// for-of loop
for(let i of num){
    console.log(i)
}

// for-in loop
for(let i in num){
    console.log(i) // for-in gives keys of array ,i.e, index
    console.log(num[i]) 
}