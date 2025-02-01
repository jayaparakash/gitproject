async function cardsData() {
try {
    let apiData=  await fetch('https://dummyjson.om/products?limit=10')
    let {products} = await apiData.json()
    console.log(products);
 
    let cont = document.createElement('div')
    products.map(items => {
         cont.innerHTML += `
             <h1>${items.title}</h1>
             <img src=${items.thumbnail} alt=${items.title}>
             <p>${items.description}</p>
         `
    })
    document.body.append(cont)
} catch (error) {
    console.log(error);
    
}
}
cardsData()