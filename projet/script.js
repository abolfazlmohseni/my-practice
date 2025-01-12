const input = document.querySelector("input");
const listConteyner = document.querySelector(".list");
//ravesh ghadim
//
// function eventtest() {
//     let nameList = document.querySelectorAll("li");

//     nameList.forEach(function (name) {
//         name.addEventListener("click", function (event) {
//             event.target.remove();
//         });
//     });
// }
// eventtest()
//
//  ravesh jadid

listConteyner.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.remove();
    };
});



input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        let newLi = document.createElement("li");
        newLi.innerHTML = event.target.value;
        listConteyner.append(newLi);

        event.target.value = '';

        // eventtest();
    };
});

