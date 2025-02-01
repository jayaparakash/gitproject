// Events

// pointerEvents
    // click
    //dleclick

// MouseEvents
    // mouseOver
    // mouseOut
    // mouseup
    //mousedown

//keyBoard
    //keypress
    // keyup
    //keydown

// WindowEvents
    //load
    //resize
    //scroll

// FocusEvents
    // /focus
    // blur


    // function trigger(event) {
    // console.log(event.key);
    // }


        // addEventListener

// let btn = document.getElementById('btn')

// btn.addEventListener('dblclick',()=>{

//     alert('the click is triggerred')

// })




// window.addEventListener('scroll',()=>{
//   alert(' "warning " :Dont resize u r window');
// })



let input = document.getElementById('input')

input.addEventListener('focus',()=>{
    // console.log('Input element focused');

    input.value =  input.value.toUpperCase()
    
})


input.addEventListener('blur',()=>{
    // console.log('Input element blur');
    input.value =  input.value.toLowerCase()
})


