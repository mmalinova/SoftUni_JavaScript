function solve(arr) {
    let storage = {
        // letter: [{
        //     product: [],
        //     price: []
        // }]
    };

    for (const item of arr) {
        let [product, price] = item.split(' : ');
        const firstLetter = product.charAt(0);
        price = Number(price);

        if (!storage[firstLetter]) {
            storage[firstLetter] = [];
        }

        storage[firstLetter].push({ product, price });
        storage[firstLetter].sort((a, b) => (a.product).localeCompare(b.product));
    }

    let result = [];
    // for (let letter in storage) {
    //     let values = storage[letter].map(product => `  ${product.product}: ${product.price}`);
    //     result.push(`${letter}\n${values.join('\n')}`);
    // }
    // return result.join('\n');

    Object.entries(storage).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        result.push(`${entry[0]}\n  ${entry[1].map(product =>  `${product.product}: ${product.price}`).join('\n')}`);
    });;

    return result.join('\n');
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
))