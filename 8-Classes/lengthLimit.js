class Stringer{
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(number) {
        this.innerLength += number;
    }

    decrease(number) {
        if (this.innerLength - number < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= number;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.substring(0, this.innerLength)}...`;
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); 
test.decrease(3);
console.log(test.toString()); 
test.decrease(5);
console.log(test.toString()); 
test.increase(4);
console.log(test.toString()); 