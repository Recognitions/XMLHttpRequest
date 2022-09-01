import {pages} from "./pages.js"

function load(file){
    var http = new XMLHttpRequest();
    http.onload = ()=>{
        document.querySelector("main").innerHTML = http.responseText
    }
    http.open("GET", `public/pages/${file}.html`, true);
    http.send()
}

document.addEventListener("DOMContentLoaded",()=>{
    pages.forEach((page)=>{
        const button = document.createElement("button")
        button.innerText=page
        document.querySelector("header").appendChild(button)
        button.addEventListener("click",()=>{
            load(page)
        })
    })
})