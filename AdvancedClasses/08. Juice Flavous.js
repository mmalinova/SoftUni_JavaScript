function solve(arr) {
    let products = {};
    let bottles = {};

    for (const line of arr) {
        let [name, quantity] = line.split(' => ');
        if (!products[name]) {
            products[name] = Number(quantity);
        } else {
            products[name] += Number(quantity);
        }
        while (products[name] >= 1000) {
            if (!bottles[name]) {
                bottles[name] = 1;
            } else {
                bottles[name] += 1;
            }
            products[name] -= 1000;
        }
    }

    let result = [];
    Object.entries(bottles).forEach(([key, value]) => {
        result.push(`${key} => ${value}`);
    });
    return result.join('\n');
}

console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])
);

console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
);