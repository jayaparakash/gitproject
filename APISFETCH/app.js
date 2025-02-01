// APIS

//Fetch
//Fetch gives promises 
// Fetch returns data once promises gets revloved

let randomQuote = Math.round(Math.random()*102)

let quotesData = fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
.then(res =>{
    return res.json()
}).then(data =>{
    console.log(data.quotes[randomQuote].quote);
    console.log(data.quotes[randomQuote].author);
})

console.log(randomQuote);