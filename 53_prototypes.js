let obj ={
    name: "kanchi",
    branch: "information technology"
}
console.log(obj)

let p = {
    run:()=>{
        alert("run")
    }
}

obj.__proto__ = p;
//Here we will add prototype to 'p' which is already prototype of obj
p.__proto__ = {
    course:"B.Tech"
}
obj.run();

//Prototype gives us all the methods of an object and using __proto__ we can add methods to an object's prototype
//We can make prototype of a prototype

console.log(obj.course)