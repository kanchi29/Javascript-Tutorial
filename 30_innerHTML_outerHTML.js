// console.log shows element DOM tree
// console.dir shows the element as an object with its properties

let x = document.getElementsByTagName('span')[0]
console.log(x);
let y = document.getElementsByTagName('span')[0]
console.dir(y)

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

//innerHTML is valid for element nodes only. It gives the inner HTML of that element
//outerHTML gives the element as well as the html inside it

// first.innerHTML
// ='<b>Hi</b> Hey I am span'
// first.innerHTML = "<i>Hey I am span</i>"
// ='<i>Hey I am span</i>'
// first.outerHTML
// ='<span id="first"><i>Hey I am span</i></span>'

// For other types of nodes, like text node and comment node we can use data or nodeValue. 
// Example: document.body.firstChild.data
// ='\n    Hello World\n    '
// document.body.firstChild.nodeValue
// ='\n    Hello World\n    '