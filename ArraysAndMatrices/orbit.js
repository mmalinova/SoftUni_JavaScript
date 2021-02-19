function solve(arr) {
    let rows = arr[0];
    let cols = arr[1];
    let startRow = arr[2];
    let startCol = arr[3];
 
    let matrix = [];
    for(let i = 0; i < rows; i++) {
        matrix.push([]);
    }
 
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1;
        }
    }
 
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

solve([5, 5, 2, 2]);