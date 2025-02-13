// reduce()
// Signature :- Returns a single value by accumulating array elements.
// Takes a callback function (accumulator, currentValue, index, array). Does not mutate the original array.

if(!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (userFn, initialAcc) {
        
        if(typeof userFn !== "function") {
            throw new TypeError(userFn + " is not a function")
        }

        let acc;
        let startIndex;

        if(typeof initialAcc !== "undefined") {
            acc = initialAcc;
            startIndex = 0;
        } else {
            if (this.length === 0) {
                throw new TypeError("Reduce of empty array with no initial value")
            }
            acc = this[0]
            startIndex = 1;
        }

        for(let i = startIndex; i < this.length; i++) {
            
            if(i in this) {
                acc = userFn(acc, this[i], i, this)
            }
        }
        return acc
    }
}

const testArr = [1, 2, 3, 4, 5]
const result = testArr.myReduce((acc, curr) => acc + curr, 10)
console.log(result)