function solve(arr, number) {

    let result = [];
    for (let i = 0; i < arr.length; i += number) {
        result.push(arr[i]);
    }

    return result;
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));