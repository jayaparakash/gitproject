let fruitsInput = document.getElementById('fruitsInput')
let addFruits = document.getElementById('btn')
let fruitsList = document.getElementById('fruitsList')

// webstorage

let fruits = JSON.parse(localStorage.getItem('fruits')) || [] ;

// function


function renderFruits(){
    fruitsList.innerHTML = '' // it will not rerender the data

    fruits.forEach((fruit)=>{
        let li = document.createElement('li')
        li.innerHTML = fruit
        fruitsList.append(li)
    })
}
// eventlistener

addFruits.addEventListener('click',()=>{
    let fruit = fruitsInput.value.trim()

    if (fruit) {
        fruits.push(fruit)
        localStorage.setItem('fruits',JSON.stringify(fruits))
        renderFruits()
        // fruitsInput.value = ''        
    }

})

renderFruits()