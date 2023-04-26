class RailwayForm{
    constructor(givenname,trainno,address){
        console.log("Constructor called.")
        this.name=givenname;
        this.trainno=trainno;
        this.address=address;
    }
    //Constructor method is automatically called when we create a new object by keyword 'new'
    // 

    preview(){
        alert(this.name + ": Your form for train no.: " + this.trainno + " and your address is " + this.address)
    }
    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel(){
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
        this.trainno=0;
    }

}

//Create and fill a form for harry
let harryForm = new RailwayForm("Harry",12230,"Delhi-201302");

//Create and fill a form for kanchi
let kanchi = new RailwayForm("Kanchi",12239,"Lucknow-226020");

harryForm.preview();
harryForm.submit();
harryForm.cancel();
harryForm.preview();
