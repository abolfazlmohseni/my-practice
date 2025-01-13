//Spread syntax

let numbers = [10,20,30,40,50,60]


// let CopyNumbers = numbers

// let CopyNumbers = [...numbers]

// let num1 = [1,2,3,4,5]
// let num2 = [6,7,8,9,10]

// let allNumbers = [...num1,...num2]

// console.log(allNumbers)


let user = {
    id : 1,
    name : "mamad",
    age:18
}

let newUser = {...user}


newUser.neme = "abolfazl"

console.log("user: ",user)
console.log("new User: ",newUser)