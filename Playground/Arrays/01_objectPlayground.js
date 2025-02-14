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
    console.log(key, ":", book[key]);
}

const keys = Object.keys(book)
console.log(keys);

const values = Object.values(book)
console.log(values)

const entries = Object.entries(book)
console.log(entries);