let a = document.getElementsByTagName('div')[0]
//a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
a.appendChild(div);  // inserting a child element div in 'a'

//a.append(div);
//a.prepend(div);  //Adds it as first child of container 'a'

//a.before(div); //This will add it just before the container ,i.e, outside the container
//a.after(div); //Just after and outside the container

a.replaceWith(div); //This will replace the container 'a' with this div element 
