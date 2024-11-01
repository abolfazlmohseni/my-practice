const BtnOpenElem = document.querySelector(".right-side")
const BtnCloseElem = document.querySelector(".bi-x-circle")
const MenuElem = document.querySelector(".list")

BtnOpenElem.addEventListener('click', function () {
    MenuElem.style.animationName = "loadanime"
    MenuElem.style.display = "flex"
})

BtnCloseElem.addEventListener("click", function () {
    MenuElem.style.animationName = "closeanime"
    setInterval(function () {
        MenuElem.style.display = "none"
        clearInterval
    }, 3000);
})