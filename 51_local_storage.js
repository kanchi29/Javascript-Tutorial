//Local Storage sets the data in the local storage and it does not go away even when the page is reloaded or reopened 

let key = prompt("Enter key you wanna set?")
let value = prompt("Enter key you wanna set?")

localStorage.setItem(key,value);  //Method to set item 
console.log(`The value at ${key} is ${localStorage.getItem(key)}`) //Method to get item 

if (key=='red' || key=='blue'){
    localStorage.removeItem(key) //Method to remove item from local storage 
}

if (key==0){
    localStorage.clear();  //Method to clear the local storage
}

console.log(localStorage.length); //method to give length of local storage

console.log(localStorage.key(1)); //Method to give index of key and get the value of key at that index 

//Both key and value here must be string
//We can use two JSON methods to store objects in localStorage:
//JSON.stringify(object) --> converts objects to JSON strings
//JSON.parse(string) --> converts string to JSON object