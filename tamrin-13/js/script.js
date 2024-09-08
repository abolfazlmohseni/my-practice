//Short cut
let $ = document
//Selector Elements
let listElem = $.querySelector('.list')
let listItemsElem = $.querySelectorAll('.list-items')
let inputElem = $.querySelector('.input-task')
let trashIcon = $.querySelectorAll('.bi-trash')
let checkboxIcon = $.querySelectorAll('.checkbox')
let icons = $.querySelectorAll('.icons')

inputElem.addEventListener("keydown", function (event) {

  if (event.key === 'Enter') {
    // console.log('test')
    let ValueInput = inputElem.value
    let newItems = $.createElement("li")
    let Itemsspan = $.createElement("span")
    let Itemsdiv = $.createElement("div")
    let Itag1 = $.createElement("i")
    let Itag2 = $.createElement("i")

    Itemsdiv.append(Itag1, Itag2)
    newItems.append(Itemsspan, Itemsdiv)

    Itemsspan.innerHTML = ValueInput
    newItems.classList = "list-items"
    Itemsdiv.classList = "icons"
    Itag1.classList = "bi bi-app checkbox"
    Itag2.classList = "bi bi-trash"

    listElem.append(newItems)
    inputElem.value = ''
  }

})

icons.forEach(function (item) {
  let icons = $.querySelectorAll('.icons')
  item.lastElementChild.addEventListener('click', function (event) {
    event.target.parentElement.parentElement.remove()
  })
})