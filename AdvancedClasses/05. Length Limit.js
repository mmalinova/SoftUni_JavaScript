class Stringer {
    constructor(str, initialLength) {
        this.innerString = str;
        this.innerLength = initialLength;
        this.str = str;
    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString() {
        if (this.innerLength === 0) {
            return '...';
        } else if (this.innerString.length > this.innerLength) {
            this.str = this.str.substring(0, this.innerLength);
            this.str += '...';
            return this.str;
        }
        return this.innerString;
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
