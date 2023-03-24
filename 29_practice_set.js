//Problem - 1
//document.body.firstElementChild.style.color = "red";

document.body.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

//Problem - 2
//Answer is No

//Problem - 3
document.body.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.body.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

//Problem - 4
Array.from(document.body.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = "cyan";
})