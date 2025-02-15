// 1. Use a for...in loop to print each key and value.
// 2. Use Object.keys() to print all keys.
// 3. Use Object.values() to print all values.
// 4. Use Object.entries() to print all key-value pairs.
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

for (const key in book) {
   // console.log(key, ":", book[key]);
}

const keys = Object.keys(book)
// console.log(keys);

const values = Object.values(book)
// console.log(values)

const entries = Object.entries(book)
// console.log(entries);




// Q-2 :- 
// 1. Print the employee's salary using dynamic property access.
// 2. Create an object where keys are dynamically generated from an array ["title", "year"] and values are ["Book", 2021].
// 3. Loop over the object and print all key-value pairs.

const property = "salary";
const employee = {
  name: "David",
  [property]: 5000
};
const newKeys = "salary"
console.log(employee[newKeys])

const prop = ["title", "year"]
const val = ["Book", 2011]

const person = {
    // [prop]: [val],
}
// console.log(person)

for(let i = 0; i < prop.length; i++) {
    person[prop[i]] = val[i]
}

console.log(person)