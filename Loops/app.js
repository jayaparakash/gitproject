// loops

// For Loop
// WhileLoop
// dowhileLoop

// es6
// for in loop
// for Of loop
// AI
// ForEach

// let courses = ['html','css','javascript','ReactJS','bootstrap','sass']

// length 5


// i = 0  , 0 < 6 true  = html 0++
// i = 1  , 1 < 6 true  = css 1++
// i = 2  , 2 < 6 true  = js 2++
// i = 5  ,  5 <6 true = sass 5++

//  6<6 false    


// console.log(courses);


// for(let i=0; i<courses.length; i++){
//     console.log(courses[i]);
// }


// whileLoop



// let products = [
//     { title: 'iphone', price: 25000 },
//     { title: 'nokia', price: 26000 },
//     { title: 'redmi', price: 28000 },
// ]

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }

// let index =0 

// while (true) {
//     console.log(index);
//     if (products[index].title == 'redmi') {
//         console.log(products[index]);
//     }
//     index++
// }



// do while
// let num = 11;
// do {
//     console.log(num);
//     num++
// } while (num <= 10)


// let i =11;


// while (i<=10) {
//     console.log(i);
//     i++
// }


// Break, continue

// let courses = ['html', 'css', 'java', 'javascript','springBoots']


// for (let i = 0; i < courses.length; i++) {
//     // console.log(courses[i]);

//     if (courses[i] === 'java') {
//         continue
//     }
// console.log(courses[i]);
// }



// let products = [
//     { title: 'iphone', price: 25000 },
//     { title: 'nokia', price: 26000 },
//     { title: 'redmi', price: 28000 },
// ]

// let mobile = ''
// for (let i = 0; i < products.length; i++) {
//         // console.log(products[i].title);
//         if (products[i].title === 'nokia') {
//             mobile = products[i].title
//             break;
//         }
//         console.log(i);
// }

// console.log(mobile);


// For of Loop => which iterates only array data  cant use Obj keys and Values
// for in loop =>  which iterates only objects data $ array & objects


// let movies = ['anji','baahubali','ega','kalki']

// for(let i of obj){
//     console.log(i);
// }



// let obj = {
//     name:'lakshman',
//     role:'dev',
//     loc:'hyd',
//     age:60,
// }

// for(let i in movies){
//     console.log(movies[i]);
// }

// let n = 10

// for (let i = 1; i<=n; i++) {
//     let space = ''.repeat(n-i)
//     let star = "*".repeat(2*i-1)
//     console.log(space+star);
// }


// let products = [
//     { title: 'iphone', price: 25000,  storage:'6gb', img:''},
//     { title: 'nokia', price: 26000 ,  storage:'4gb', img:''},
//     { title: 'redmi', price: 28000 ,  storage:'8gb', img:''},
//     { title: 'ei', price: 28000 ,  storage:'8gb', img:''},
//     { title: 'red', price: 28000 ,  storage:'8gb', img:''},
//     { title: 'mi', price: 28000 ,  storage:'8gb', img:''},
// ]



// products.forEach((mobile)=>{
// console.log(mobile.title);
// })
