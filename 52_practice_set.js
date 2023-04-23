// let p = fetch("https://www.boredapi.com/api/activity");
// p.then((value)=>{
//    return value.json()
// }).then((value)=>{
//     console.log(value)
//     console.log(value.activity)
// })

alert(` You note is currently ${localStorage.getItem("Note")}`)
let a = prompt("Enter a note")
localStorage.setItem("Note",a);

let c = confirm("Do you want to delete this note?")
if(c){
    localStorage.removeItem("Note")
    alert("Note deleted successfully!")
}