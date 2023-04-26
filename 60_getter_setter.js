class Animal{
    constructor(name){
        this._name=name;
    }
    fly(){
        alert("Mai udd raha hun")
    }
    get name(){
        return this._name   //We use syntax _name to avoid collision of name function and getter setter method 
    }
    set name(newName){
        this._name = newName
    }
}

let a = new Animal("Kanchi")
console.log(a.name)
a.name="Jack"
console.log(a.name)
let c =56;

class Rabbit extends Animal{
    jump(){
        console.log("Rabbit is jumping")
    }
}

let j = new Rabbit();

console.log(a instanceof Animal)
console.log(c instanceof Animal)
console.log(j instanceof Animal)  

//instanceOf is used to check whether an object belongs to a certain class or not
//It will give true if an object belongs to that class or is inheriting from that class