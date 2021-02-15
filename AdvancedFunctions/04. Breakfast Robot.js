function solution() {
    let recipes = {
        apple: '1 carbohydrate, 2 flavour',
        lemonade: '10 carbohydrate, 20 flavour',
        burger: '5 carbohydrate, 7 fat, 3 flavour',
        eggs: '5 protein, 1 fat, 1 flavour',
        turkey: '10 protein, 10 carbohydrate, 10 fat, 10 flavour',
    };

    let products = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function (arg) {
        let myObj = {
            restock: function (microelement, quantity) {
                products[microelement] = products[microelement] + quantity;
                return 'Success';
            },
            prepare: function (recipe, quantity) {
                if (!recipes.hasOwnProperty(recipe)) {
                    return;
                }
                let needed = recipes[recipe].split(', ');
                for (const item of needed) {
                    let q = item.split(' ')[0] * quantity;
                    let element = item.split(' ')[1];
                    if (products[element] >= q) {
                        products[element] = products[element] - q;
                    } else {
                        return 'Error: not enough ' + `${element}` + ' in stock';
                    }
                }
                return 'Success';
            },
            report: function () {
                let result = [];

                for (const [key, value] of Object.entries(products)) {
                    result.push(`${key}` + '=' + `${value}`);
                };

                return result.join(' ');
            }
        };

        let input = arg.split(' ');
        let command = input[0];

        if (!myObj.hasOwnProperty(command)) {
            return;
        }

        return myObj[command](input[1], Number(input[2]));
    };
}

let manager = solution();
manager('restock flavour 50');
manager('prepare lemonade 4');
manager('restock carbohydrate 10');
manager('restock flavour 10');
manager('prepare apple 1');
manager('restock fat 10');
manager('prepare burger 1');
manager('report');

