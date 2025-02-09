var userinfo = {
    name: "abolfazl",
    lastName: "mohseni",
    age: 16
}
const button = document.querySelector('button');

button.addEventListener('click',async function () {

    const respon = await fetch('https://mohseniapi-default-rtdb.firebaseio.com/regester', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userinfo),

    })
    if (respon.ok) {
        alert("OK")
    } else {
        alert("falsed")
    }




})




