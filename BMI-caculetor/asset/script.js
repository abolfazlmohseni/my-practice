var heightElem = document.querySelector(".height");
var weightElem = document.querySelector(".weight");
var rezaltElem = document.querySelector(".rezaltBMI");
var heightValueElem = document.querySelector(".heightValue");
var weightValueElem = document.querySelector(".weightValue");

var weightValue;
var heightValue; 

heightElem.addEventListener("change", function () {
    heightValue = heightElem.value;
    calculetor();
    heightValueElem.innerHTML = heightElem.value;
});

weightElem.addEventListener("change", function () {
    weightValue = weightElem.value;
    calculetor();
    weightValueElem.innerHTML = weightElem.value;
});

function calculetor() {
    var heightMetr = heightValue / 100;
    let BMI = weightValue/ (heightMetr * heightMetr) ;
    rezaltElem.innerHTML = BMI.toFixed(2);
};