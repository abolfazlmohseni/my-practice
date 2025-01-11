let Listwords = [
    'abolfazl',
    'ali',
    'mohamad',
    'danyal',
    'amir',
    'amin',
    'parsa',
    'moien',
    'majid',
    'ahmad',
    'reza'
]

let userinput = document.querySelector(".serchInput");
let conteyner = document.querySelector(".output");

userinput.addEventListener('keyup', function () {
    let userinputvlue = userinput.value;

    if (userinputvlue) {
        let filtered = Listwords.filter(function (word) {
            return word.toLocaleLowerCase().includes(userinputvlue.toLocaleLowerCase());
        });

        conteyner.innerHTML = '';

        filtered.forEach(function (items) {
            let newP = document.createElement('p');
            newP.classList.add("rezalt");
            newP.innerHTML = items;
            conteyner.appendChild(newP);
        });
    } else {
        conteyner.innerHTML = '';
    }
    let rezalts = document.querySelectorAll(".rezalt");

    rezalts.forEach(function (serch) {
        serch.addEventListener("click", function (event) {
            userinput.value = event.target.innerHTML;
        });
    });
});

