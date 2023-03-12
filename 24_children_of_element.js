console.log(document.body.firstChild) //First child here is text because there is space between div and body that is hidden text space
console.log(document.body.lastChild) //Gives last child of body
console.log(document.body.childNodes) //gives list of child nodes in the document body

//elem.childNodes[0] === elem.firstChild
//Method elem.hasChildNodes() is used to check whether it contains any child nodes or not.
console.log(document.body.hasChildNodes) 

//child Nodes looks like an array but its not an array but a collection.
//To convert it into an array:
let arr =  Array.from(document.body.childNodes)
console.log(arr);