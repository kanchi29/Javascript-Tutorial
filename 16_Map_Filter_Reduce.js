let arr = [12,34,56]
let a = arr.map((value,index,array)=>{     // map makes a new array out of the previous one after performing some action on it
    console.log(value,index,array)  
    return value+index;
})
// console.log(a)


// map is different from foreach because it makes a new Array
// but forEach works on exsting array

let a2 = arr.filter((a)=>{  //Gives new array, doesn't modify existing array
    return a<40;
})
// console.log(a2);

// Array Reduce method
let a3 = arr.reduce((h1,h2)=>{   //reduces an array to a single value
    return h1+h2;
})
console.log(a3);