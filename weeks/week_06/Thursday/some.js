// some()
// Signatur :- returns true or false if at least one element statisfy condition
//  Passes element, index, and full array to userFn.

if(!Array.prototype.mySome) {
    Array.prototype.mySome = function(userFn) {

        if(typeof userFn !== "function") {
            throw new TypeError(userFn + " is not a function")
        }

        for(let i = 0; i < this.length; i++) {
            if(i in this && userFn(this[i], i, this)) {
                return true;
            } 
        }
        return false;
    }
}

const testArr = [12, 5, 4, 1, 8]
const result = testArr.mySome((e, i, arr) => e % 2 === 0)
console.log(result);