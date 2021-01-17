function solve(array) {
    let rowsSum = 0;
    let sum = 0;
    let colsSum = 0;

    console.log(array.reduce((acc, el) => acc + el));

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array.length; col++) {
            if (row === 0) {
                sum += array[row][col];
            }
            rowsSum += array[row][col];
        }
        if (sum !== rowsSum) {
            return false;
        }
        rowsSum = 0;
    }

    for (let col = 0; col < array.length; col++) {
        for (let row = 0; row < array.length; row++) {
            colsSum += array[row][col];
        }
        if (sum !== colsSum) {
            return false;
        }
        colsSum = 0;
    }
    return true;
}

console.log(solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
))