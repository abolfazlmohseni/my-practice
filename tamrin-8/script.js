let ostanselect = document.querySelector('.selectbox')
let cityselect = document.querySelector('.selectcity')


let citydata = {
    khorasan: ['نیشابور', 'مشهد', 'فیروزه'],
    tehran: ['تهران', 'کرج', 'زعفرانیه'],
    khozestan: ['قصر شیرین', 'اهواز', 'بلوچستان', 'زاهدان'],
    mazandaran: ['بابل', 'ساری', 'علی آباد']
}
ostanselect.addEventListener('change', function () {
    let valueselectbox = ostanselect.value
    let valueselectcity = citydata[valueselectbox]
    cityselect.innerHTML = ''
    valueselectcity.forEach(function (city) {
        cityselect.innerHTML += '<option>' + city + '<option/>'
    })
})