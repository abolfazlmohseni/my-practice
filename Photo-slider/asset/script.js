const srcImag = [
    "../asset/img/imag1.webp",
    "../asset/img/imag2.jpg",
    "../asset/img/imag3.jpg",
    "../asset/img/imag4.jpg"
];
var nextButton = document.querySelector(".next");
var pervesButton = document.querySelector(".per");
var imagBox = document.querySelector("img");
var flag = 0;


function sliderindex() {
    if (flag < 4) {
        imagBox.src = srcImag[flag];
    } else {
        flag = 0
        imagBox.src = srcImag[flag];
    }
}



function nextSlid() {
    flag++
    sliderindex()
}
function perviosSlid() {
    if (flag == 0) {
        flag = 3;
        imagBox.src = srcImag[flag];
    } else {
        flag--
        imagBox.src = srcImag[flag];
    }
}

nextButton.addEventListener("click", nextSlid)

pervesButton.addEventListener("click", perviosSlid)

setInterval(function () {
    nextSlid()
    sliderindex()

}, 3000)



