// filter()
// Signatur :- new array returns, it does not change original array
// it passes value, index, array 


if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn) {
        if (typeof userFn !== "function") {
            throw new TypeError(userFn + " is not a function");
        }

        const newArr = [];
        for (let i = 0; i < this.length; i++) {
            if (i in this) { 
                if (userFn(this[i], i, this)) {
                    newArr.push(this[i]);
                }
            }
        }
        return newArr;
    };
}

const testArr = [13, 24, 18, 23, 22];
const result = testArr.myFilter((e, i, arr) => e > 20);
console.log(result); // [24, 23, 22]
