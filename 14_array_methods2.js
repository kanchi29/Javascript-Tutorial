//let num = [1,2,3,4,5,6]
//console.log(num.length)
//delete num[0]; // it is not a method, it is an operator
//console.log(num);
//console.log(num.length)
//let num2 = [7,8,9]
//let new_num = num.concat(num2); // doesn't change existing array
//console.log(new_num);

let num = [11,2,23,14,65,26]
num.sort(); //modifies the original array and sorts it alphabetically, not in order of greater or lower number as it treats the array as a string
console.log(num); 
 // To sort in ascending order:
 compare=(a,b)=>{
    return a-b;
 }
 num.sort(compare)
 console.log(num);
 // Reversde method
 //num.reverse() //To reverse the array
 //console.log(num);

 // Splice: To add new items to an array
// num.splice(position to add, no. of elements of remove, elements to add)
let a = num.splice(2,3,103,543,735,726) // it modifies the array and returns deleted items
console.log(num);
console.log(a);

//Slice = slice out a piece from an array, it creates a new array
console.log(num.slice(2));
console.log(num.slice(2,4));