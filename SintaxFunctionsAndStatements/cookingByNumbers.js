function solve(number, firstOperator, secondOperator, thirdOperator, fourthOperator, fifthOperator) {
    number = Number(number);
    let arr = [firstOperator, secondOperator, thirdOperator, fourthOperator, fifthOperator];

    for (const command of arr) {
        if (command === 'chop') {
            number /= 2;
        } else if (command === 'dice') {
            number = Math.sqrt(number);
        } else if (command === 'spice') {
            number++;
        } else if (command === 'bake') {
            number *= 3;
        } else if (command === 'fillet') {
            number -= number * 0.2;
        }
        console.log(number);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');