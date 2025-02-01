function validation() {
    
let userName = document.getElementById('userName').value

// userName caps{1}small{6,5}
//password caps{2}small{6,5}
// mobileNumber [6-9][0-9]{9} \d
// adhaarNumber []
// pancard
// Email


// regex


// patternshouldbe written /      / 
// ^=>start
// $=>end 
//[A-Z] => caps alpha
//[a-z] => small
//{2}
//{5,8}
//[6-9]
//[0-9]
//(space) \s

// [A-Za-Z0-9_%#]+@[A-Za-Z0-9_+-$]+\.[A-Za-z]{2,}

let EmailPattern = /^[A-Za-z0-9+_#]+@[A-Za-z0-9%-&]+\.[A-Za-z]{2,}$/

if (EmailPattern.test(userName)) {
        alert(`${userName} Is successfully LogedIn`)
        return true
} else {
    alert(`${userName} Is not matched`)
    return false
}










// if (userName.trim() === '' || password.trim() === '') {
//         alert('U have Enter indvalid Details')
//         return false
// } else {
//     alert('SuccessFully logedIn')
//     return true
// }

}

