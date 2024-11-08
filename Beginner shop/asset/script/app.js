import { products } from "./database.js";
const mainElem = document.querySelector(".main");

let rowElem;

products.forEach(function(item, index)  {
    // هر چهار محصول یک بار یک باکس جدید ایجاد کن
    if (index % 4 === 0) {
        rowElem = document.createElement("div");
        rowElem.classList.add("row");
        mainElem.appendChild(rowElem);
    }

    // ساختار HTML محصول
    const productHTML = `
        <div class="Products-items">
            <div><img src="${item.src}" alt="${item.name}"></div>
            <div>
                <p>${item.name}</p>
                <p data-price="${item.price}">${item.price}</p>
            </div>
            <div class="add-basket">
                <p>Add to basket</p>
            </div>
        </div>
    `;

    // اضافه کردن محصول به باکس ردیف
    rowElem.insertAdjacentHTML("beforeend", productHTML);
});



