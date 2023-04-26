class Animal{
    constructor(name){
        this.name=Animal.capitalize(name);
    }
    walk(){
        console.log(`Animal ${Animal.capitalize(this.name)} is walking `)
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,this.name.length)
    }
}

j=new Animal("jack");
j.walk();

//Static methods are for the whole class and not for individual objects
//It can be accessed with class' name
//Static is used to make it available insie the class but not for objects 
//j.capitalize will not work as it is not available for objects