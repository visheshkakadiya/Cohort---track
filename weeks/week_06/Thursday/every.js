// every()
// Signatur :- return fails if any condition fails, if not then true
// Passes element, index, and full array to userFn.

if(!Array.prototype.myEvery) {
    Array.prototype.myEvery = function (userFn) {

        if(typeof userFn !== "function") {
            throw new TypeError(userFn + " is not a function")
        }
        
        for(let i = 0; i < this.length; i++) {
            if(i in this && !userFn(this[i], i, this)) {
                return false
            }
        }
        return true;
    }
}

const testArr = [1, 30, 39, 29, 10, 13];
const result = testArr.myEvery((e) => e < 40)
console.log(result);