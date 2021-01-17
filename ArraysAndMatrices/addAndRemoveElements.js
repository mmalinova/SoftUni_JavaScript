function solve(arr) {
    let number = 1;
    let result = [];

    for (const command of arr) {
        if (command === 'add') {
            result.push(number);
        } else if (command === 'remove') {
            result.pop();
        }
        number++;
    }

    if (result.length === 0) {
        return "Empty";
    } else {
        return result.join('\n');
    }
}

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));