// const nums = [25, 3, 50, 100, 7];
// nums.sort();
// console.log(nums);

// const arr = [1, 2, 3];
// const result = arr.map(num => ({ value: num * 2}))
// console.log(result);

// const numbers = [1, 2, 3];
// const mapped = numbers.map(num => num * 2);
// const forEachResult = numbers.forEach(num => num * 2);
// console.log(mapped)
// console.log(forEachResult)

// const newArr = [1, 2, 3, 4, 5];
// const res = arr.reduce((acc, num, index) => {
//   if (index % 2 === 0) acc.push(num);
//   return acc;
// }, []);
// console.log(res);

// console.log([1, 2] + [3, 4])

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))