// Map

// Signature :- returns new array, input as userFn
// it iterates this from myarr

if(!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        if (typeof userFn !== "function") {
            throw new TypeError(userFn + " is not a function");
        }
        const newArray = []

        for(let i = 0; i < this.length; i++) {
            const value = userFn(this[i], i, this)
            newArray.push(value)
        }
        return newArray;
    }
}

const myarr = [1, 2, 3, 4, 5]

const resultMap = myarr.myMap((e, i, arr) => `Index: ${i}, Value: ${e * 2}`)
console.log(resultMap)