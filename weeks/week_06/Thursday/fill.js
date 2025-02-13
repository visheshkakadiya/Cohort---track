// fill()
// Signature :- 

if (!Array.prototype.myFill) {
    Array.prototype.myFill = function (num, startIndex, endIndex) {

        let value;

        if (startIndex >= endIndex) return this;

        if (!startIndex && !endIndex) {
            for (let i = 0; i < this.length; i++) {
                this[i] = num;
            }
        } else {
            if (startIndex && endIndex) {
                for (let j = startIndex; j < endIndex; j++) {
                    this[j] = num;
                }
            }
        }
        return this;
    }
}

const testArr = [1, 2, 3, 4, 5]
const result = testArr.myFill(9, 2, 4)
console.log(result);