// what will be the output of :
console.log("har\"".length) // = 

//Problem 2
let str = "Written all over your face";
let word = "ALL"
console.log(`The word "${word}" ${str.includes(word)?"is":"is not"} present in the sentence `)
console.log(str.startsWith("Written"));
console.log(str.endsWith("Written"));
console.log(word.toLowerCase());
let str1= "Please give Rs 1000"
let amt =parseInt(str1.slice(15))
console.log(amt);
console.log(str.replace(str[3],'s' )) 