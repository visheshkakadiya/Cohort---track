const arrNumber = [1, 2, 3, 4, 5]
const arrRandom = [23, 16, 20, 15, 12]
const arrString = ["Hitesh", "Piyush", "Mukul"]

const result = arrString.map((nam) => nam !== "Hitesh")
console.log(result) // [false, true, true]

// Filter() 
// => filter method returns a new array with all elements that pass the following condition/test cases
// => it creates a shallow copy of it, it creates a shallow copy of it, does not change original array

const arrFilter = arrNumber.filter(arr => arr >= 3)
console.log(arrFilter) // [ 3, 4, 5 ]


//Reduce()
// => the redeuce method process through each element and reduce array by single value
// => the first time in run callbacks has no return value, if supplied it uses in its place as initial value, or it will start from index 0 value as initial value

const reduceCheck = arrNumber.reduce((acc, curr) => acc + curr, 1)
console.log(reduceCheck) // 16


//forEach()
// => the forEach method executes a function through each element, and returns no new array

function greet(name) {
    console.log("Hello " + name) // 'Hello Hitesh', 'Hello Piyush', 'Hello Mukul'
}
arrString.forEach(greet)


// find()
// => find returns the first element which pass its condition, If no match is found, it returns undefined. (note- it does not return second element)

console.log(arrNumber.find(num => num >= 3)) // 3


// findIndex()
// => returns the index of first element which statisfy the condition

console.log(arrNumber.findIndex(num => num >= 3)) // 2


// some()
// => checks if at least one element passes the conditon, return true or false

console.log(arrNumber.some(num => num > 2)) // true


// every()
// => checks if every element passes condition, return true or false

console.log(arrRandom.every(num => num > 15)); // false 


// sort()
// => sorts element in place as strings by default
// => note- but sorting numbers we need to use comparison function

console.log(arrString.sort()) // ['Hitesh', 'Mukul', 'Piyush']

const nums = [10, 2, 50, 3];
console.log(nums.sort()); // [10, 2, 3, 50]

// we need to use comparision function to get proper sort
console.log(nums.sort((a, b) => a - b)); // [2, 3, 10, 50]


// flat()
// => flattens arrays upto give depth

const nested = [1, [2, 3], [[4, 5]]];
console.log(nested.flat()); // [1, 2, 3, [4, 5]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5]

// we can use infinity to get fully flatten array

console.log(nested.flat(Infinity)) // [1, 2, 3, 4, 5]


// flatMap()
// flatMap is a combination of map() and flat()

const arr = [1, 2, 3];

const flatMapped = arr.flatMap(num => [num, num * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6]

// if we use only map the output would be like [[1, 2], [2, 4], [3, 6]]