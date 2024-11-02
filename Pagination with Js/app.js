let database = [
    { name: "1پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "2پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "3پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "4پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "5پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },

    { name: "6پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "7پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "8پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "9پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "10پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },

    { name: "44پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "11پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "12پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "13پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "14پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },

    { name: "15پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "16پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },
    { name: "17پیشفرض", hour: "12:00", date: "1402/01/01", day: "شنبه" },

]

let numberOfBtn = Math.ceil(database.length / 5)

const BtnCon = document.querySelector(".BtnCon")
let i = 1
numberOfBtn++
while (i < numberOfBtn) {
    let BtnPageGhange = document.createElement("div")
    BtnPageGhange.innerHTML = i
    BtnPageGhange.classList = "BtnPageGhange"
    BtnCon.appendChild(BtnPageGhange)
    i++

}

let numberpage = 1
let BtnPageGhange = document.querySelectorAll(".BtnPageGhange")

BtnPageGhange.forEach(function (item) {
    item.addEventListener("click", function (event) {
        itemCon.innerHTML = ""
        numberpage = event.target.innerHTML
        event.classList = "BtnPageGhange"
        PageGhange()
    })
});
let itemCon = document.querySelector(".itemCon")

function PageGhange() {
    let endIndexItem = numberpage * 5
    let startIndexItem = endIndexItem - 5
    let slice = database.slice(startIndexItem, endIndexItem)
    let i = 0
    while (i < slice.length) {
        let items = document.createElement("div")
        items.classList = "items"

        let name = document.createElement("div")
        let hour = document.createElement("div")
        let date = document.createElement("div")
        let day = document.createElement("div")

        name.innerHTML = slice[i].name
        hour.innerHTML = slice[i].hour
        date.innerHTML = slice[i].date
        day.innerHTML = slice[i].day

        items.append(name, hour, date, day)
        itemCon.appendChild(items)
        i++
    }
}
PageGhange() 