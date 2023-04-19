try {
    let a =0
    console.log(program)  //this is the error in this code which we will try to catch in catch block
    console.log("Program ran successfully")
   
} catch (error) {
    console.log("This is an error") 
    console.log(p) //this is an error within catch which will obstruct any further code from executing
}

//to avoid this situation of an error within catch stopping further code from executing, we put a finally clause

//in finally clause, the code will run even if there is an error in catch
finally {
    console.log("This is inside finally clause")
}

//finally is used to for final cleanup. Its the part of the program that will run under any circumstances

//let's say we put the whole code above inside a function and put return statement inside try
//in that case, finally will still run despite the return statement being before finally clause.
//finally will run before exiting the loop just before executing return, so that code outside the loop will run after it
//It can be used for things like:
//close a file; exit a loop; write to the log file

