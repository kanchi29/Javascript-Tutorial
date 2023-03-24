const changeBodyRed=()=>{
    document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("First child of b is: ", b.firstChild)  // Could be text node, element node, comment node
console.log("First element child of b is: ", b.firstElementChild)  // Will give only element node
