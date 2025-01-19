// const promisTesti = new Promise((sucses, erorr) => {

//     let flag = true;

//     setTimeout(() => {

//         if (flag) {
//             sucses()
//         } else {
//             erorr()
//         }
//     }, 3000);

// });

// function sucsesval() {
//     alert("hale");
// };
// function erorrval() {
//     alert("ashtebag!");
// };
// promisTesti
//     .then(sucsesval)
//     .catch(erorrval)

// promisTesti.then(() => {
//     console.log("sucsse :)")
// }).catch(() => {
//     console.log("erorr :(")
// })

let books = [
    { id: 1, name: "ketab1", price: 10_000 },
    { id: 2, name: "ketab2", price: 20_000 },
    { id: 3, name: "ketab3", price: 40_000 },
    { id: 4, name: "ketab4", price: 70_000 },
    { id: 5, name: "ketab5", price: 40_000 }
]

function addbook(name, price) {
    let newbook = {
        id: books.length + 1,
        name,
        price
    }

    return new Promise((resolve, erorr) => {
        setTimeout(() => {

            if (books.push(newbook)) {
                resolve()
            } else {
                erorr()
            }
            console.log(books)
        }, 3000)
    })

}

addbook('salam', 350000).then(()=>{
    console.log("resolve :))")
}).catch(()=>{
    console.log("Erorr :((")
})
