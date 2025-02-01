
import productsData from "./data.js";

export function renderData() {
    let cont = document.getElementById('container')
    productsData.map(item =>{
        cont.innerHTML += `
        <div>
        <h1>${item.title}</h1>
        <mark>${item.price}</mark>
        <p>${item.desc}</p>
        </div>
        `
    })    
}


export function calAdd(a,b){
        console.log(a+b); 
}


export function calsub(a,b){
    console.log(a-b); 
}





