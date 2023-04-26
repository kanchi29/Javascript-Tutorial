class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        console.log(this.name + " is running!")
    }
    jump(){
        console.log(this.name + " is jumping everywhere!")
    }
}

//'extends' keyboard is used for inheritance
//class child extends parent
class Monkey extends Animal{           
    eatBanana(){  
        console.log(`${this.name} is eating a banana`)
    }
}

let a = new Animal("Pingu","Blue");
let b = new Monkey("Chimpu","Black");

a.run();
b.eatBanana();
b.jump();