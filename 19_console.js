 //console.log(console)
 //error
 console.error('This is an error')

 //assert
 console.assert(55>87)  //assertion will fail
 console.assert(77<90)  //no problem

 //clear
 //console.clear()  // the whole console will be cleared

let obj = {
    a:1,
    b:2,
    c:3
};

console.table(obj)  // it will show the data in this object in tabular form

//warn
console.warn("This is a warning")

console.info('This is info') //similar to log

//time and timeEnd

console.time("A")
for(let i=0;i<5;i++){
    console.log(i)
}
console.timeEnd("A")