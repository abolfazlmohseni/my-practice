// function sum(val1, val2, val3) {
//     let sumnumbers = 0;
//     let number = Array.from(arguments).forEach((items) => {
//         console.log(items);
//         sumnumbers += items;
//     });
//     console.log(sumnumbers);
// };

// sum(6, 8, 2, 4, 5, 1, 2);


const sum = (val1, val2, val3, ...args) => {
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(args);

};

sum(6, 8, 2, 4, 5, 1, 2);