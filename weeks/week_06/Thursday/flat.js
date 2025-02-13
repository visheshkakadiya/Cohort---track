// flat()
// Signature :- A new array with sub-array elements concatenated up to the specified depth.


if (!Array.prototype.myFlat) {
    Array.prototype.myFlat = function (depth) {

        let newArr = [];

        for (let i = 0; i < this.length; i++) {
            if (i in this) {
                if (Array.isArray(this[i]) && depth > 0) {
                    newArr.push(...this[i].myFlat(depth - 1))
                } else {
                    newArr.push(this[i])
                }
            }
        }
        return newArr;
    }
}

const testArr = [1, [2, [3, [4]]], 5];
const result = testArr.myFlat((1));
console.log(result);