class Employee{
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
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    RequestLeaves(leaves){                                   //This is method overriding. Overriding an inherited method's properties
        super.RequestLeaves(4)  //here what we're doing is we are using super keyword to use parent method as it is and then we've added more things to it in the next line
        console.log("One extra is granted")
        //console.log(`Employee has requested ${leaves+1} leaves(one extra)`)
    }
}

let e = new Programmer()
e.login();
e.RequestLeaves(3);
