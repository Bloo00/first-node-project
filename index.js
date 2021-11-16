const numbers = [1,2,3,4,6,33,34];
const person  = {
    nane: "John Doe",
    age: 39,
    food: ["burgers", "fries"],
    car: {
        name: "tesla",
        model: "model S",
        year : 2020
    }
}

console.log(numbers);
console.log(person.food)

const myModule = require('./utils/myModule.js');

console.log(myModule);

myModule.hello(); // string

console.log(myModule.hello());