function solve(arr) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]
    ];

    let freePositions = 9;
    let isWin = false;

    let currentPlayer = '';
    let another = 0;

    for (let i = 0; i < arr.length; i++) {
        another = 0;
        let current = arr[i];
        let x = current[0];
        let y = current[2];
        if (dashboard[x][y] === false) {

            if (another === 0) {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }

            dashboard[x][y] = currentPlayer;
            freePositions--;

            if (checkRows(y, currentPlayer) === true || checkCols(x, currentPlayer) === true || checkMainDiagonal(currentPlayer)
                === true || checkSecondDiagonal(currentPlayer) === true) {
                isWin = true;
                console.log(`Player ${currentPlayer} wins!`);
                print();
                return;
            }
            
            if (freePositions <= 0 && !isWin) {
                console.log("The game ended! Nobody wins :(");
                print();
                return;
            }
        } else {
            console.log('This place is already taken. Please choose another!');
            another++;
        }
    }

    function print() {
        for (const item of dashboard) {
            console.log(item.join('\t'));
        }
    }

    function checkCols(x, currentPlayer) {
        for (let col = 0; col < dashboard.length; col++) {
            if (dashboard[x][col] !== currentPlayer) {
                return false;
            }
        }
        return true;
    }

    function checkRows(y, currentPlayer) {
        for (let row = 0; row < dashboard.length; row++) {
            if (dashboard[row][y] !== currentPlayer) {
                return false;
            }
        }
        return true;
    }

    function checkMainDiagonal(currentPlayer) {
        for (let row = 0; row < dashboard.length; row++) {
            for (let col = 0; col < dashboard.length; col++) {
                if (row === col && dashboard[row][col] !== currentPlayer) {
                    return false;
                }
            }
        }
        return true;
    }

    function checkSecondDiagonal() {
        for (let row = 0; row < dashboard.length; row++) {
            for (let col = 0; col < dashboard.length; col++) {
                if (row + col === dashboard.length - 1 && dashboard[row][col] !== currentPlayer) {
                    return false;
                }
            }
        }
        return true;
    }
}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)