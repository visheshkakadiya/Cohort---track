const obj = {}
// console.log(obj.__proto__);

const parent = {
    greet() {
        console.log(`hello from parent!`);
    }
}

const child = {
    __proto__: parent
}
// child.greet()
// console.log(child.__proto__ === parent);



// __proto__ Lookup Order
// => JavaScript first checks inside the object itself. If the property doesn’t exist, it checks __proto__.

const animal = {
    sound: "Roar"
}

const lion = {
    __proto__: animal
}
lion.sound = "Grow"
// console.log(lion.sound)      Grow
delete lion.sound
// console.log(lion.sound)         Roar

// ==> If lion.sound exists in lion, it is used. If deleted, it falls back to __proto__.



const object1 = {
    name: "No Prototype",
}

object1.__proto__ = null;

// console.log(object1.name)
// console.log(object1.toString);
// console.log(object1.__proto__);



function Car(brand) {
    this.brand = brand
}

Car.prototype.getBrand = function() {
    return this.brand;
}

const myCar = new Car("Porche")
// console.log(myCar.getBrand());

