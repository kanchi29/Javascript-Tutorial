class Employee{
    constructor(name){
        console.log(`${name} Employee has arrived`)
        this.name=name
    }
    login(){
        console.log(`The employee has logged in `)
    }
    logout(){
        console.log(`The employee has logged out `)
    }
    RequestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee{
// constructor(...args){  ---> if there is no constructor in child class, this is created automatically, after which the constructor of parent class will execute
//     super(...args)
// }

//Below is constructor overriding
constructor(name){
    super(name)
    console.log(`This is a self made constructor`)
    this.name=name
}

//WE MUST ALWAYS USE THE super() IN CHILD CLASS' CONSTRUCTOR EVEN IF WE MAKE IT OURSELVES AND ESPECIALLY IF WE WANT TO USE this KEYWORD, FIRST USE super()

    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    RequestLeaves(leaves){                                   //This is method overriding. Overriding an inherited method's properties
        super.RequestLeaves(4)  //here what we're doing is we are using super keyword to use parent method as it is and then we've added more things to it in the next line
        console.log("One extra is granted")
        //console.log(`Employee has requested ${leaves+1} leaves(one extra)`)
    }
}

let e = new Programmer("Kanchi")
e.login();
e.RequestLeaves(3);
