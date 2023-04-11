//If we add even using event listener instead of using href

document.getElementById("btn1").addEventListener('click',function(){
    window.location = 'https://www.google.com'
    window.focus();
})

//Fetching data of a website every few seconds
setInterval(async function(){
    let url="https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
}, 3000);

