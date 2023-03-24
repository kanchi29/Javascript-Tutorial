//window is a global object. Everything in javascript comes inder window object. Provides a way to control your browser window
//There are two categories under window object - DOM , BOM.
//DOM - Document Object Model. Our whole html is made into a javascript object caled document 
window.console.log(window)
console.log(document)
console.log(document.body)
document.body.style.backgroundColor = "grey"

//BOM - Browser Object Modedl. Other objects provided by browser/host-browser to work with everything excdept the document
//Ex- alert,prompt,confirm are BOM objects provided by browser
