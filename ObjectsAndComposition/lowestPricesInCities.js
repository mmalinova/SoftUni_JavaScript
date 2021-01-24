function solve(arr) {
    let result = [];
    let storage = {};

    while (arr.length) {
        let [town, product, price] = arr.shift().split(' | ');
        price = Number(price);

        if (!storage.hasOwnProperty(product)) {
            storage[product] = {};
        }

        storage[product][town] = price;
    }

    for (let product of Object.keys(storage)) {
        let sorted = Object.entries(storage[product]).sort((a, b) => a[1] - b[1]);
        result.push(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }

    return result.join('\n');
}

console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
))