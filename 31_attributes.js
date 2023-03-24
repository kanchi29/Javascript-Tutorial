let first = document.getElementById("first")
let a = first.getAttribute("class")
console.log(a);
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
//first.setAttribute("hidden","true")
first.setAttribute("class","base")
first.removeAttribute("class","hey")

//We can make custom attributes too. Refer to code with harry notes video - 42