let username = document.querySelector('.userName')
let password = document.querySelector('.password')
let modal = document.querySelector('.modal')

function loginfunk (){
    let valueuserinput = username.value
    let valuepasswordinput = password.value
    
    if(valueuserinput.length >15 || valuepasswordinput.length > 15){
        modal.innerHTML = "ورود موفغیت امیز است"
    
        modal.style.display = 'block'

        setInterval(function(){
            modal.style.display = 'none'
        },3000)        
    }else{ 
        modal.innerHTML = "رمز یا نام کاربری کمتر اشتباه است"
        modal.style.display ='block'
        setInterval(function(){
            modal.style.display = 'none'
        },3000)
    }

}