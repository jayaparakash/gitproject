let products = [
{id:1,title:'iphone',price:10000,storage:'2gb',img:'./download.jpg',dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ratione?'},
{id:2,title:'iphone2',price:20000,storage:'4gb',img:'./download.jpg',dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ratione?'},
{id:3,title:'iphone3',price:30000,storage:'5gb',img:'./download.jpg',dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ratione?'},
{id:4,title:'redmi',price:40000,storage:'6gb',img:'./download.jpg',dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ratione?'},
{id:5,title:'nokia',price:50000,storage:'7gb',img:'./download.jpg',dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ratione?'},
{id:6,title:'samsung',price:60000,storage:'14gb',img:'./download.jpg',dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ratione?'},
]

let cart = []

// rendering products => map
function  renderProducts(productsData) {
    let container = document.getElementById('container')
 container.innerHTML = ''
  return  productsData.map((item)=>{
        container.innerHTML +=`
        <div id='product'>
                <img src=${item.img} alt=${item.title} width='100%'; height:150px>
                <h1>${item.title}</h1>
                <mark class="bg-warning"> RS:${item.price}</mark>
                <p>${item.dec}</p>
                <button class='btn btn-danger' onclick=addProduct(${item.id})>ADD Product</button>
        </div>
        `
    })   
}
renderProducts(products)


// filter
function filterProducts() {
    let searchBar = document.getElementById('searchBar').value.toLowerCase()
    let tempdata = products.filter(item => item.title.toLowerCase().includes(searchBar))
    renderProducts(tempdata)
}

// adddtoCart

function addProduct(product) {
    let tempdata = products.find(item => item.id === product)
    cart.push(tempdata)
    alert(`product Added ${tempdata.title}`)
    console.log(cart);   
    total() 
}


//finalAmount Reduce

function total() {
    let sum = cart.reduce((sum,value)=> sum+value.price ,0)
    console.log(`total Amount : ${sum}`);
    
}


