function solve(arr) {
    let producedCars = {};

    for (const line of arr) {
        let [brand, model, car] = line.split(' | ');
        let cars = Number(car);

        if (!producedCars[brand]) {
            producedCars[brand] = [];
            producedCars[brand].push({ [model]: cars });
        } else {
            let have = false;

            for (const obj of producedCars[brand]) {
                if (obj.hasOwnProperty(model)) {
                    have = true;
                    obj[model] += cars;
                }
            }
            if (!have) {
                producedCars[brand].push({ [model]: cars });
            }
        }
    }

    let result = [];

    Object.entries(producedCars).forEach(([key, values]) => {
        result.push(`${key}\n`);
        for (const model of values) {
            Object.entries(model).forEach(([k, v]) => {
                result.push(`###${k} -> ${v}\n`);
            });
        }
    });

    return result.join('');
}

console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)
);