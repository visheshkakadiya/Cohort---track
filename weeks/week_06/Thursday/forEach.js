// forEach()
// Signature :- no return, index, value
// calls fn for every value, throws error on variable storing

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFn) {
        if (typeof userFn !== "function") {
            throw new TypeError(userFn + " is not a function");
        }

        for (let i = 0; i < this.length; i++) {
            userFn(this[i], i, this); // Also pass original array
        }
    };
}

const testArr = [1, 2, 3, 4, 5];
testArr.myForEach((e, i, arr) => 
    console.log(`this is value ${e} at index ${i}, full array: ${arr}`)
);
