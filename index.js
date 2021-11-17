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

// to make a local server

const http = require('http');

// http.createServer((req, res) => { 
//    res.write('Hello, World!');
//    res.end();
// })
// .listen(8000);

// read story .txt file

const fs = require('fs');

fs.readFile('story.txt', 'utf8', function(err, data){
    if(err) {
        console.log("There was a problem reading the file.");
    } else {
        console.log(data);
    }
});

// import
const faker = require('faker'); // random stuff
let randomName = faker.name.findName();
console.log(randomName);

const randomeAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode()
}

console.log(randomName);

// import the module
const axios = require('axios'); // allows to make API calls and retrieve data...

// There is a function that exist on the frontend that allows us to retrieve data. What function? - fetch

axios.get('https://api.github.com/users/Bloo00')
.then(function(response) {
    console.log(response.data);
})
.catch(function(err) {
    console.log(err);
});