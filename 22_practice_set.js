//Problem 1
let a = Number.parseInt(prompt("Enter your age"))
const canDrive=(a)=>{
    if(a>=18){
        return true;
    }
    else{
        return false;
    }
}
if(canDrive(a)){
    alert("You can drive!")
}
else{
    alert("You cannot drive yet!")
}

//Problem 2
let d = true;
const canDrive=(a)=>{
    if(a>=18){
        return true;
    }
    else{
        return false;
    }
}
while(d){
    let a = Number.parseInt(prompt("Enter your age"))
if(canDrive(a)){
    alert("You can drive!")
}
else{
    alert("You cannot drive yet!")
}
d=confirm("Do you want to see the prompt?")
}

//Problem 3
let d = true;
const canDrive=(a)=>{
    if(a>=18){
        return true;
    }
    else{
        return false;
    }
}
while(d){
    let a = Number.parseInt(prompt("Enter your age"))
if(a<0){
    console.error("Enter a valid age")
    break;
}
    if(canDrive(a)){
    alert("You can drive!")
}
else{
    alert("You cannot drive yet!")
}
d=confirm("Do you want to see the prompt?")
}

//Problem 4
let a = Number.parseInt(prompt("Enter your age"))
if(a>4){
    location.href="http://www.google.com"
}

//Problem 5
let color = prompt("Enter background color")
document.body.style.backgroundColor= color;