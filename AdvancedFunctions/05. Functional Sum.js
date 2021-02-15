function add(number) {
    let internalSum = number;

    function sum(number) {
        internalSum += number;
        return sum;
    }

    sum.toString = function() { return internalSum; };
    return sum;
}

console.log(add(1)(6)(-3));