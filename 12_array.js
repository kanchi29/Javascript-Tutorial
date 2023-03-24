let a = [90,82,45,78,null,"Absent"] //can contain more than 1 datatype
console.log(a);
console.log(a[3]);
console.log("Length of array is :", a.length);
a[6] = 95;
console.log("Length of array after adding a new value is :", a.length);
a[1] = 56;
console.log(a);

//Arrays are mutable and can be changed
// Datatype of array is object

console.log(typeof a)

for(let i = 0; i<a.length; i++){
    console.log(a[i])
}