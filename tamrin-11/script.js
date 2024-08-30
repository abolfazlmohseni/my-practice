let $ = document

const bodyElem = $.querySelector('body')
const titelElem = $.querySelector('.titel-content')
const keyElem = $.querySelector('.key')
const locationElem = $.querySelector('.location')
const codeElem = $.querySelector('.code')
const whichElem = $.querySelector('.which')
const keyconteyner = $.querySelector('.key-conteyner')
const help = $.querySelector('.help')

bodyElem.addEventListener('keydown',function(event){
    event.preventDefault()

    keyconteyner.style.display = 'flex'
    help.style.display = 'none'
    titelElem.style.display = 'block'

    titelElem.innerHTML = event.keyCode
    keyElem.innerHTML = event.key
    locationElem.innerHTML = event.location
    codeElem.innerHTML = event.code
    whichElem.innerHTML = event.which
})