class RailwayForm{
    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel(){
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    fill(givenname,trainno){
        this.name=givenname;
        this.trainno=trainno;
    }
}

let harry = new RailwayForm();
harry.fill("Harry",12230)

let kanchi = new RailwayForm();
kanchi.fill("Kanchi",12239)

harry.submit();
kanchi.submit();
kanchi.cancel();
