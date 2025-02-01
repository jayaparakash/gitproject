//NodeLists => text 
    //parentNodes
    //childNodes
    //firstChild
    //lastChild
    // nextsibiling

// HtmlCollections
    //parentElement
    // children
    // lastElementChild
    //fistElementChild
    // nextsibiling

// let ul = document.getElementById('mobiles')
// console.log(ul);

// let nodeList = ul.nextSibling
// console.log(nodeList);

// let HtmlCollection = ul.nextElementSibling
// console.log(HtmlCollection);

// Real Dom & virtualDom 

// createElement
// setattribute('type','name')
// innerText,innerHtml,textContent

// append ,appendChild

// let btn = document.getElementById('btn')
// btn.addEventListener('click',()=>{
    // createElement
//     let div = document.createElement('div')
//         div.setAttribute('class','div')

//     let h2 = document.createElement("h2")
//         h2.textContent="Box"  
//     console.log(div);
//     div.appendChild(h2)
// document.body.append(div)
// let img = document.createElement('img')
// img.setAttribute('src','./download.jpg')
// document.body.append(img)
// })


// prepend
// append,appendChild
// insertBefore
// after
// createElement
// classList,className
// innerHtml, innertext,textContent
// setAttribute,getAttribute






let div =  document.createElement('div')
    div.style.border = "10px solid red"
    div.style.height = '100px'
    div.style.width = '100px'

document.body.append(div)