function solve(arr, number) {
    for (let i = 0; i < number; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }

    return arr.join(' ');
}

console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)
);