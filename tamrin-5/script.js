let imag = document.getElementById('imag')
let flag = false

function changImag (){

    if (!flag) {
        imag.setAttribute ('src','imag-2.png')
        flag = true 
    }else{
        imag.setAttribute ('src','imag-1.png')
        flag = false
    }
}