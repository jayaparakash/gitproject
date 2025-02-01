

import { renderData, calAdd , calsub} from "./operations.js"

let btn  = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    renderData()
    calAdd(5,10)
    calsub(5,10)
})




// constructor


function  PersonDetails(name,age,role,loc) {
    this.name = name
   this.age  = age
   this.role = role
    this.loc  = loc
}

let person1 =  new PersonDetails('jp','25','dev','hyd')
let person2 =  new PersonDetails('p','2','dev','hyd')
console.log(person1);
console.log(person2);

