class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = Number(length);
    }

    increase(num) {
        this.innerLength += Number(num);
        return this.innerLength;
    }

    decrease(num) {
        this.innerLength -= Number(num);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
        return this.innerLength;
    }

    toString() {
        if (this.innerLength === 0) {
            this.innerString = '...';
            return this.innerString;
        } else if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + '...';
            // let sliced = this.innerString.substr(this.innerLength);
            // this.innerString = this.innerString.replace(sliced, '...');
            // return this.innerString;
        }

        return this.innerString;
    }


}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
