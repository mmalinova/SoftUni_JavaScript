(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        return this.padStart(this.length + str.length, str);
    };
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        return this.padEnd(this.length + str.length, str);
    };
    String.prototype.isEmpty = function () {
        if (this.length) {
            return false;
        }
        return true;
    };
    String.prototype.truncate = function (n) {
        if (n < 4) {
            let str = '';
            for (let i = 0; i < n; i++) {
                str += '.';
            }
            return str.toString();
        }
        if (this.length > n) {
            let words = this.toString().split(' ');
            if (words.length === 1) {
                return this.toString.slice(0, n - 3) + '...';
            }
            let output = '';
            for (const word of words) {
                let nextLen = output.length + word.length + 3;
                if (nextLen <= n) {
                    output += word + ' ';
                } else {
                    output = output.slice(0, -1);
                    output += '...';
                    return output;
                }
            }
        } else {
            return this.toString();
        }
    };
    String.format = function (string, ...params) {
        let words = string.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (words[i].includes('{') && words[i].includes('}')) {
                if (params.length) {
                    words[i] = params.shift();
                }
            }
        }
        return words.join(' ');
    };
}());

// let str = 'my string';
    // str = str.ensureStart('my');
    // console.log(str);
    // str = str.ensureStart('hello ');
    // console.log(str);
    // str = str.truncate(16);
    // console.log(str);
    // str = str.truncate(14);
    // console.log(str);
    // str = str.truncate(8);
    // console.log(str);
    // str = str.truncate(4);
    // console.log(str);
    // str = str.truncate(2);
    // console.log(str);
    // str = String.format('The {0} {1} fox', 'quick', 'brown');
    // console.log(str);
    // str = String.format('jumps {0} {1}', 'dog');
    // console.log(str);
