// find()
// Signatur :- returns first element which mathes condition, Passes element, index, and full array to userFn.

if(!Array.prototype.myFind) {
    Array.prototype.myFind = function(userFn) {

        if(typeof userFn !== "function") {
            throw new TypeError(userFn + " is not a function");
        }

        for(let i = 0; i < this.length; i++) {
            if(i in this && userFn(this[i], i, this)) {
                return (this[i])
            }
        }
        return undefined;
    }
}

const testArr = [23, 15, 20, 18, 12]
const result = testArr.myFind((e) => e > 15)
console.log(result)