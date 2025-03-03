// Q-1 :- Given an array of student objects with name and grade, group students by their grade.

// expected output -
// {
//     "10th": ["Alice", "Charlie"],
//     "12th": ["Bob", "David"]
// }

const Newstudents = [
    { name: "Alice", grade: "10th" },
    { name: "Bob", grade: "12th" },
    { name: "Charlie", grade: "10th" },
    { name: "David", grade: "12th" }
];

function groupedNamed(Newstudents) {

    const grouped = {}

    for(const student of Newstudents) {
        const {grade, name} = student

        if(!grouped[grade]) {
            grouped[grade] = []
        }

        grouped[grade].push(name)
    }

    return grouped
}
// console.log(groupedNamed(Newstudents))



// Q-2 :- You are given an array of objects where each object has an id.
// Find all duplicate id values and return them.

function findDuplicateIds(items) {
    const idCount = {}; 
    const duplicates = new Set(); 

    for (const item of items) {
        if (idCount[item.id]) {
            duplicates.add(item.id);
        } else {
            idCount[item.id] = 1;
        }
    }

    return Array.from(duplicates); 
}

const items = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "C" },
  { id: 3, name: "D" },
  { id: 2, name: "E" }
];

// console.log(findDuplicateIds(items)); 

function findEvens(arr) {
    return arr.filter(num => num % 2 == 0)
}

// console.log(findEvens([1, 2, 3, 4, 5, 6]));


// Qus :- Write a function that takes an object and returns the number of properties (keys) in that object.

function countProperties(obj) {
    let count = 0
    for(let key in obj) {
        if(key) {
            count++
        }
    }
    return count
}

const obj = { a: 1, b: 2, c: 3 };
// console.log(countProperties(obj));


// Qus :- Write a function that reverses a given string.

function reverseString(str) {
    return str.split('').reverse().join('')
}

// console.log(reverseString("hello"));


const guests = [
    { name: "Alice", confirmed: true },
    { name: "Bob", confirmed: false },
    { name: "Charlie", confirmed: true },
    { name: "David", confirmed: false }
];

const filterList = guests.filter(allow => allow.confirmed === true)
const finalList = filterList.map(nam => nam.name)
// console.log(finalList)


// Qus :- A streaming service needs to filter out movies with a rating below 8 and then sort the remaining movies from highest to lowest rating.

const movies = [
    { title: "Inception", rating: 8.8 },
    { title: "Interstellar", rating: 8.6 },
    { title: "The Room", rating: 3.7 },
    { title: "Parasite", rating: 8.6 },
    { title: "Cats", rating: 2.8 }
  ];
  
const filterMovie = movies.filter(mov => mov.rating >= 8.0)
const sortMovie = filterMovie.sort((a, b) => b.rating - a.rating)
const mapMovie = sortMovie.map(mo => mo.title)
// console.log(mapMovie)


// Qus :- A company is giving a 10% bonus to employees earning less than $50,000. You need to update the salary for those employees.

const employees = [
    { name: "Alice", salary: 45000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 30000 },
    { name: "David", salary: 80000 }
  ];

const addBonus = employees.map(bon => ({
    ...bon,
    salary: bon.salary < 50000 ? bon.salary * 1.1 : bon.salary
}))
// console.log(addBonus) 


// Qus :- A school needs to find students who passed all subjects.
// Each student has a name and a marks array (list of subject scores). who has pass above 60

const students = [
    { name: "John", marks: [80, 75, 90] },
    { name: "Jane", marks: [60, 50, 85] },
    { name: "Mike", marks: [95, 90, 85] },
    { name: "Emma", marks: [45, 70, 80] }
  ];
  
const filterStudent = students.filter(s => s.marks.every(mark => mark > 60))
const mapStudents = filterStudent.map(n => n.name)
// console.log(mapStudents)


// Qus :- You have a list of products, each with a name and stock.
// Your task is to find out-of-stock products.

const products = [
    { name: "Laptop", stock: 10 },
    { name: "Phone", stock: 0 },
    { name: "Tablet", stock: 5 },
    { name: "Headphones", stock: 0 }
  ];

const emptyProd = products.filter(p => p.stock === 0)
const emty = emptyProd.map(n => n.name)
// console.log(emty)


// Qus :- You have an array of products, and you need to find the most expensive one.

const Newproducts = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 1200 },
    { name: "Headphones", price: 200 }
  ];

// const expProd = Newproducts.reduce((currExp, newExp) => {
//     return (currExp.price < newExp.price ? newExp.price : currExp.price)
// })
// console.log(expProd)


// Qus :- You have a list of products, and you need to group them into two categories:
// "expensive" (price ≥ 1000)
// "cheap" (price < 1000)

const diffProducts = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 1200 },
    { name: "Headphones", price: 200 }
  ];

const groupedProds = {
    expensive: [],
    cheap: []
}

const expProds = diffProducts.filter(e => e.price >= 1000)
const cheapProds = diffProducts.filter(e => e.price < 1000)
// console.log(expProds)
groupedProds['expensive'].push(...expProds)
groupedProds['cheap'].push(...cheapProds)
// console.log(groupedProds)