var shops = [
    { id: 1, name: 'laptop', prise: 12000000 },
    { id: 2, name: 'phone', prise: 1800000 },
    { id: 3, name: 'milk', prise: 98000 },
    { id: 4, name: 'whate', prise: 20000 },
    { id: 5, name: 'cola', prise: 70000 },
    { id: 6, name: 'coolpad', prise: 120000 }
]

var userbascket = [
    { id: 1, name: 'laptop', prise: 12000000 },
    { id: 2, name: 'milk', prise: 98000 },
    { id: 3, name: 'cola', prise: 70000 }
]

var newbascket = prompt("enter name")

var prodactdata;

var isbascket = shops.some(function (shop) {

    if (shop.name == newbascket) {
        prodactdata = shop
        return true
    }

    return shop.name == newbascket

})

var addbascket = {
    id: 4,
    name: prodactdata.name,
    prise: prodactdata.prise
}

userbascket.push(addbascket)

var filterbascket = userbascket.filter(function(bascket){
    return bascket.prise > 99999
})

var test = filterbascket.forEach(function(bask){
    bask.prise +=1000
    console.log(bask)
})


console.log(userbascket)