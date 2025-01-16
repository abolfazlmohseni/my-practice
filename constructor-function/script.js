function User(userName, userAge, userJob) {
    this.name = userName
    this.age = userAge
    this.job = userJob

    this.getName = function () {
        return this.name
    }
    
    this.getAge = function () {
        return this.age
    }

    this.getJob = function () {
        return this.job
    }

    this.setNmae = function (newName) {
        this.name = newName
    }
    this.setAge = function (newAge) {
        this.age = newAge
    }
    this.setJob = function (newJob) {
        this.job = newJob
    }
}

let userOne = new User('abolfazl', 17, 'web developer');

userabol.setJob('Web designer');

console.log(userabol.getJob());

