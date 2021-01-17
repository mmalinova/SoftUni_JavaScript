function solve(rowDimension, colDimension) {
    let index = 1;
    let result = [];
    for (let row = 0; row < rowDimension; row++) {
        result[row] = [];
        for (let col = 0; col < colDimension; col++) {
            result[row][col] = 0;
        }
    } 
    console.log(result);
}

solve(5, 5)