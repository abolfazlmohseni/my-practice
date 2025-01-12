let userInput = document.querySelector("input");
let conteynerUl = document.querySelector("ul");

function trim(val) {
    return val.trim();
}

function lowercase(val) {
    return val.toLowerCase();
}

function htmlsaz(todoval) {
    return '<li>' + todoval + '</li>'
}

function test(event) {
    if (event.charCode === 13) {
        conteynerUl.insertAdjacentHTML("beforeend", htmlsaz(lowercase(trim(userInput.value))))
        userInput.value = ''
    }
}

userInput.addEventListener("keypress", test)