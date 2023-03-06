// Question 1
let arr = [];
let n = parseInt(prompt("Size of array: "))
for(let i=0;i<n;i++){
    arr[i] = parseInt(prompt("Value of arr["+i+"]" ))
}
console.log(arr)

//Question 2
let i = n-1;
do{
    i++;
    arr[i] = Number.parseInt(prompt("Enter an element: "))
}while(arr[i]!=0)
console.log(arr)

//Question 3
let arr2 = [10,23,20,35,45,80]
let a2 = arr2.filter((a)=>{
    if(a%10==0)
    return a;
})
console.log(a2);

//Question 4
let arr4 = [10,23,20,35,45,80]
let a4 = arr2.map((a)=>{
    return a*a;
})
console.log(a4);

//Question 5
let arr3 = [1,2,3,4,5]
let a3 = arr2.reduce((a,b)=>{
    return a*b;
})
console.log(a3);

