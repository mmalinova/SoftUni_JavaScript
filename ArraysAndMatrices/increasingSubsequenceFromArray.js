function solve(arr) {
    let current = arr[0];
    let result = [];
    for (const number of arr) {
        if (number >= current) {
            result.push(number);
            current = number;
        }
    }

    return result;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)
)