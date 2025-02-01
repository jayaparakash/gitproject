// synchrouns
// aSynchrouns

// Promises


// promise
// new Pormise
// reslove
// reject
// then

let p = new Promise((reslove,reject)=>{

    console.log('Payment Processing');
    

    setTimeout(()=>{
        console.log('payment successFull'); 
        reject()
    },2000)

}).then(()=>{
    console.log('Order summary'); 
})

// console.log(p);


