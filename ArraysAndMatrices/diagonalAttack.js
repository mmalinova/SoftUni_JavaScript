function solve(arr) {
    let temp = [];
    for (let row = 0; row < arr.length; row++) {
        let current = arr[row].split(' ');
        for (const item of current) {
            temp.push(Number(item));
        }
    }

    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix[i] = [];
        for (let j = 0; j < arr.length; j++) {
            matrix[i][j] = undefined;
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            matrix[row][col] = temp.shift();
        }
    }
    let sumMainDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (row === col) {
                sumMainDiagonal += Number(matrix[row][col]);
            }
            if (row + col === matrix.length - 1) {
                sumSecondDiagonal += Number(matrix[row][col]);
            }
        }
    }

    if (sumMainDiagonal === sumSecondDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row !== col && row + col !== matrix.length - 1) {
                    matrix[row][col] = sumSecondDiagonal;
                }
            }
        }
    }
    print();

    function print() {
        for (const item of matrix) {
            console.log(item.join(' '));
        }
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)

solve(['1 1 1',
    '1 1 1',
    '1 1 0']
)