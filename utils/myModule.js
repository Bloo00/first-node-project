function hello() {
    return "hellow world";
}

function helloworld() {
    return "hellow world";
}

function addNumbers(n1, n2) {
    return n1 + n2;
}
class Human {
    constructor(name) {
        this.name = name;
    }
}

const person = {
    name: "John Doe",
    age: 39,
    foods: ['burgers', 'fries'],
    car: {
        name: 'Tesla',
        model: 'Model S',
        year: 2020
    }
}
// exporting the function

module.exports = {
    hello,
    world: helloworld, // renames hellow world to hello
    Human,
    addNumbers,
    person
}

