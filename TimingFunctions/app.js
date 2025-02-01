// IIFE
// Immedtily Invoked Function Expression

// ()=> 
//anynomousFun
//()


// (
//     function(){
//         console.log("Hii this is IIFE Funtion");
        
//     }
// )()

// var count = 10;

// function counter() {
//     count++
//     console.log(count);
// }
// counter()
// counter()
// counter()

// var count = 16;
// counter()

// (
//     function(){
//         var count = 10;

//         function counter() {
//             count++;
//             console.log(count);
          
            

//         }
//         counter()
//         counter()
//         counter()
//     }
// )()

// var count = 16

// function  return


// let btn =  document.getElementById('btn')
// let p =  document.getElementById('p')
// btn.addEventListener('click',()=>{
//     let FirstName = document.getElementById('FirstName').value
//     let LastName = document.getElementById('LastName').value

//     function data() {
//         // console.log(FirstName+LastName);
//         return FirstName+LastName
       
        
//     }
//     p.innerHTML = data()
// })



// setTimeOut
// clearTimout
// setInterval
// clearInterval


// setTimeout()
// ()=>{}, callBack Fun
// duration
//dynamic content

// let timeOut = (a)=>{
//     console.log('Hii i am Seting some amout of delay '+ a);
// }

// let clear = setTimeout(timeOut,1000,"function")

// let btn = document.getElementById('btn')
// btn.addEventListener('click',()=>{
//     clearTimeout(clear)
// })

// setInterval

// let interval = (a)=>{
//     console.log(`Hii this is SetINterval ${a}`);
    
// }

// let clear = setInterval(interval,1000, "function")


// let btn = document.getElementById('btn')
// btn.addEventListener('click',()=>{
//     clearInterval(clear)
// })


let carosuelImg = [
    "https://images.pexels.com/photos/30101044/pexels-photo-30101044/free-photo-of-aerial-view-of-rocky-coastline-and-waves.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/30101042/pexels-photo-30101042/free-photo-of-aerial-view-of-rocky-coastline-in-port-macquarie.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&w=600",
]

let count = 0;

setInterval(()=>{
    if (carosuelImg.length > count ) {
        document.getElementById('img').src = carosuelImg[count];
        count++
    } else {
        count=0;
    }
},1000)