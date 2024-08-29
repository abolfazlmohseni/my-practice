
let Operation = document.querySelector('.Operation')
let inputOperation = document.querySelector('.inputOperation')
let changeBtn = document.querySelector('.changeBtn')
let resstBtn = document.querySelector('.resstBtn')
let confirmBtn = document.querySelector('.confirmBtn')
let rezaltNumber = document.querySelector('.rezaltNumber')
let flag = true


changeBtn.addEventListener('click', function () {
    if (flag === true) {
        flag = false
        Operation.innerHTML = 'F به C'
        document.title = 'F به C'
        inputOperation.placeholder = 'F'

    } else {
        flag = true
        Operation.innerHTML = 'C به F'
        document.title = 'C به F'
        inputOperation.placeholder = 'C'
    }
})
resstBtn.addEventListener('click', function () {
    inputOperation.value = ''
    rezaltNumber.innerHTML = ''
})

confirmBtn.addEventListener('click',
    function () {
        if(inputOperation.value == ''){
            rezaltNumber.innerHTML = 'بدون محتوا'
            rezaltNumber.style.color = 'red'
        }else {
            if (flag === true) {
                let rezaltinpute = inputOperation.value * 9 / 5 + 32
                rezaltNumber.innerHTML = rezaltinpute
            } else if (flag === false) {
                let num1 = inputOperation.value - 32
                let num2 = 1.8
                let rezalt = num1 / num2
                rezaltNumber.innerHTML = rezalt
            }
        }

    })



