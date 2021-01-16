const solve = (first, second) => {
    let firstNumber = Number(first);
    let secondNumber = Number(second);
    while(firstNumber != 0) {
        let temp = firstNumber;
        firstNumber = secondNumber % firstNumber;
        secondNumber = temp;
    }

    return secondNumber;
}

console.log(solve(2154, 458));