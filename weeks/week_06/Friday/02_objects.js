// 5️⃣ Looping Through Object Properties
// Since objects are unordered, we can’t use a standard for loop like arrays. Instead, we use special loops and methods.

// 1️⃣ for...in Loop (Best for Objects)
// it bascically lets you iterate over all keys in objects

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (const key in person) {                             // name : Alice
//    console.log(key, ":", person[key])                  // age : 25 
}                                                       // city : New York


// 2️⃣ Object.keys() → Get All Keys as an Array
// This method returns an array of keys, which allows you to loop using forEach() or a regular for loop.

const keys = Object.keys(person)
//console.log(keys);            [ 'name', 'age', 'city' ]

// keys.forEach(key => console.log(key, ":", person[key]))


// 3️⃣ Object.values() → Get All Values as an Array
// This method returns an array of values.
const values = Object.values(person)
// console.log(values);         [ 'Alice', 25, 'New York' ]


// 4️⃣ Object.entries() → Get Key-Value Pairs as Arrays
// this returns an array of key-value pairs

const newPair = Object.entries(person)
// console.log(newPair);           [ [ 'name', 'Alice' ], [ 'age', 25 ], [ 'city', 'New York' ] ]


// 6️⃣ Dynamic Property Access
// if the property name is stored in variable then we must use ([]), instead of dot notation

const prop = "status"
const user = {
    name: "Alice",
    age: "21",
    [prop]: "Active"
}
const key = "name"
// console.log(user[key]);             Alice
// console.log(user.status);           Active


const newkeys = ["name", "age", "city"]
const newValues = ["John", 30, "Berlin"]

const newPerson = {}

for(let i = 0; i < newkeys.length; i++) {
    newPerson[newkeys[i]] = newValues[i]
}
console.log(newPerson)