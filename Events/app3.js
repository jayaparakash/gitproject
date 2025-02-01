
let p = document.getElementById('parent')
let c = document.getElementById('child')
let sC = document.getElementById('subChild')


// Bubbling&Capturing

p.addEventListener('click',(e)=>{
    console.log(`Triggered: Parent`);
 
})


c.addEventListener('click',(e)=>{
    console.log(`Triggered: Child`);
    e.stopPropagation()
})

sC.addEventListener('click',(e)=>{
    console.log(`Triggered: SubChild`);
    e.stopPropagation()
})