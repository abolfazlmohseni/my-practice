let userInput = document.querySelector('.userName')
let passwordInput = document.querySelector('.password')


let alertUser = document.querySelector('.alert-1')
let alertPass = document.querySelector('.alert-2')


function userfunk (){
let userInputValue = userInput.value
    if (userInputValue.length > 6) {
        alertUser.innerHTML = 'نام کاربری درست است'
        alertUser.style.color = 'green'
    }else{
        alertUser.innerHTML = 'نام کاربری درست نیست'
        alertUser.style.color = 'red'
        
    }
    console.log('tesr')
}


 function passfunk () {
let passwordInputvalue = passwordInput.value

    if (passwordInputvalue.length > 6) {
        alertPass.innerHTML = ' گذرواژه درست است'
        alertPass.style.color = 'green'
    }else{
        alertPass.innerHTML = 'گذرواژه درست نیست'
        alertPass.style.color = 'red'
        
    }
 }