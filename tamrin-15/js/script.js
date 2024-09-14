let contextMenu = document.querySelector(".context-menu")
let bodyElem = document.querySelector("body")

bodyElem.addEventListener('contextmenu', function (event) {
    var Xposion = event.pageX
    var Yposion = event.pageY
    contextMenu.style.top = Xposion
    contextMenu.style.left = Yposion
    contextMenu.style.display = 'block'

})

