//Short cut
let $ = document
//Selector Elements
let listElem = $.querySelector('.list')
let listItemsElem = $.querySelectorAll('.list-items')
let inputElem = $.querySelector('.input-task')


inputElem.addEventListener("keydown", function (event) {

  if (event.key === 'Enter') {
    // console.log('test')
    let ValueInput = inputElem.value
    let newItems = $.createElement("li")
    let Itemsspan = $.createElement("span")
    let Itemsdiv = $.createElement("div")
    let Itag1 = $.createElement("i")

    Itemsdiv.append(Itag1)
    newItems.append(Itemsspan, Itemsdiv)

    Itemsspan.innerHTML = ValueInput
    newItems.classList = "list-items"
    Itemsdiv.classList = "icons"

    Itag1.classList = "bi bi-trash"

    listElem.append(newItems)
    inputElem.value = ''
    SelectNewIconTrash ()
  }

})

function SelectNewIconTrash () {
  let trashIcon = $.querySelectorAll('.bi-trash')
  trashIcon.forEach(function (icon){
    icon.addEventListener('click',function(event){
      event.target.parentElement.parentElement.remove()
    })
  })
}

SelectNewIconTrash ()