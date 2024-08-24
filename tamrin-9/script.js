let serchinput = document.querySelector('.serch-inp')
let serchbtn = document.querySelector('.serch-btn')
let rezaltbox = document.querySelector('.rezalt')
let citydatas = [
    {city:'neyshabor', dama:41,va:'warning'},
    {city:'tehran', dama:51,va:'sakses'}
]
serchbtn.addEventListener('click',function(){
    let valueserch =serchinput.value
    let mamad30=  citydatas.find(function(item){
             return item.city === valueserch
        })
        if(mamad30 === undefined){
            console.log('به جا نیوردم')
        }else{
            rezaltbox.innerHTML = ''
            rezaltbox.innerHTML += '<h1>'+mamad30.city+'<h1/>' 
            rezaltbox.innerHTML += '<p>'+mamad30.dama+'<p/>' 
            rezaltbox.innerHTML += '<p>'+mamad30.va+'<p/>' 
        }
})




