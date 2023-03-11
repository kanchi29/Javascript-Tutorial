alert("This is an alert"); //Used to invoke a mini window with a message

console.log(prompt("Enter any number"))  //takes a respond from user

alert("Enter a value for a");
a=prompt("Enter value of a here","28")  //second argument is the default value and will change when user enters a value
a=Number.parseInt(a)
alert("a is of type: " + (typeof a))
document.write(a)  //this will write the value of a into the html document we load it into

let c = confirm("Do you want a number?")  //Takes a yes or no type of response from the user
if(c){
    console.log(a)
}
else{
    console.log("Please allow me to write")
}