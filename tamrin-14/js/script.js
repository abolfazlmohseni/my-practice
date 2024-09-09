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
    let Itag2 = $.createElement("i")

    Itemsdiv.append(Itag2, Itag1)
    newItems.append(Itemsspan, Itemsdiv)

    Itemsspan.innerHTML = ValueInput
    newItems.classList = "list-items"
    Itemsdiv.classList = "icons"

    Itag2.classList = "bi bi-square"
    Itag1.classList = "bi bi-trash"

    listElem.append(newItems)
    inputElem.value = ''
    SelectNewIconTrash()
    SelectNewIconCheckBox()

  }

})

function SelectNewIconTrash() {
  let trashIcon = $.querySelectorAll('.bi-trash')
  trashIcon.forEach(function (Trash) {
    Trash.addEventListener('click', function (event) {
      event.target.parentElement.parentElement.remove()
    })
  })
}

function SelectNewIconCheckBox() {
  let CheckBoxIcon = $.querySelectorAll(".bi-square")
  CheckBoxIcon.forEach(function (Check) {
    Check.addEventListener('click', function (event) {

      let ParentCheck = event.target.parentElement.parentElement

      if (event.target.classList == "bi bi-square") {
        ParentCheck.style.color = "#aaa"
        ParentCheck.style.backgroundColor = "#0e061e"
        event.target.classList = "bi bi-check2-square"
      } else {
        ParentCheck.style.color = "#fff"
        ParentCheck.style.backgroundColor = "#421c8f"
        event.target.classList = "bi bi-square"
      }
    })
  })
}



SelectNewIconTrash()
SelectNewIconCheckBox()