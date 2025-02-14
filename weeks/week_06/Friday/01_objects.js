// 1️⃣ What is an Object in JavaScript?
// what is object :- Objects are collection of key-value pairs. the keys are called properties and they store values

const person = {
    name: "Alice", // Property: key is "name", value is "Alice"
    age: 25,       // Property: key is "age", value is 25
    isStudent: true // Property: key is "isStudent", value is true
  };

// console.log(person.name)
// console.log(person.age)


// 2️⃣ Adding, Modifying, and Deleting Properties

const car = {};
car.brand = "Toyota";
car["model"] = "Corolla";

// console.log(car);            { brand: 'Toyota', model: 'Corolla' }

car.brand = "Honda"
// console.log(car.brand)       Honda

const newCar = car
newCar.brand = "Cadillac"
// console.log(car);            { brand: 'Cadillac', model: 'Corolla' }
// console.log(newCar)          { brand: 'Cadillac', model: 'Corolla' }


const oldCar = {
    ...car
}
//console.log(oldCar.brand)     Cadillac
oldCar.brand = "Porche"
// console.log(car)             { brand: 'Cadillac', model: 'Corolla' }
// console.log(oldCar)          { brand: 'Porche', model: 'Corolla' }

//info =>
//console.log(car["model"]);      if key is give in string format

// delete
delete car.model;
//console.log(car);               { brand: 'Cadillac' }


// 3️⃣ Objects Can Hold Any Data Type

const user = {
    name: "Daku mangal singh",
    hobbies: ["robberies", "Looting"],
    greet: function() {
        return "bol be"
    },
    address: {
        village: "Dholukpur"
    },
}

// console.log(user.hobbies[0])         robberies
// console.log(user.greet());           [Function: greet](if we just log user.greet)  other than on user.greet() => bol be 
// console.log(user.address.village);   Dholukpur

// 4️⃣ Checking if a Property Exists

// console.log("name" in user);            true
// console.log("age" in user);             false

// console.log(user.hasOwnProperty("name"));   true
// console.log(user.hasOwnProperty("age"));    false