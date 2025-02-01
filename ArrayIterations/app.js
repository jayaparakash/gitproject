// ARRAY ITERATIONS Methods

//es6

// ForEach
// Map
// Fillter
// find
// reduce
// Some
// Every


// let batch =['uday','rajesh','surya','santhi']
// batch.pop()
// console.log(batch);

// log

// ForEach =>cannot return new array
// value,index,array

// let a = batch.forEach((value,index,array)=>{
//     return value
// })

// console.log(a);


// MAP


let mobiles = [
{id:1, title:'iphone', price:10000, storage:'2gb', img:'./', desc:'dkjbwdkjbwkjdb' },
{id:2, title:'iphone1', price:20000, storage:'3gb', img:'./', desc:'dkjbwdkjbwkjdb' },
{id:3, title:'iphone2', price:30000, storage:'4gb', img:'./', desc:'dkjbwdkjbwkjdb' },
{id:4, title:'redmi', price:40000, storage:'5gb', img:'./', desc:'dkjbwdkjbwkjdb' },
{id:5, title:'nokia', price:50000, storage:'6gb', img:'./', desc:'dkjbwdkjbwkjdb' },
{id:6, title:'opp', price:60000, storage:'8gb', img:'./', desc:'dkjbwdkjbwkjdb' },
]



// let mobilesData = mobiles.filter(phone=>{
//     return phone.price < 40000
// }).map(x=>{
// //   document.body.innerHTML+=`<h1>${x.title}</h1>`
// return 
// })

// console.log(mobilesData);

// find

// let mobilesData = mobiles.find(phone=>{
//     return phone.title === 'redmi'
// })
// console.log(mobilesData);


// reduce => acc => intial value , value

// let totalAmount = mobiles.reduce((acc,value)=>{
//     return acc+value.price
// },0)

// console.log(totalAmount);


// Some  =>
// Every =>Boolean 

let num = [1,2,3,4,5]

// let someNum = num.some(value=>{
//     console.log(value);   
//     return value < 4
// })

// console.log(someNum);

// let everyNum =  num.every((value)=>{
//     console.log(value);
//     return value < 4
// })

// console.log(everyNum);









