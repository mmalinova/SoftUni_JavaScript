function solve(arr) {
    let result = [];

    const columnsName = arr.shift();

    let index = 0;

    for (const item of arr) {
        let row = item.split('|');
        for (let current of row) {
            current = current.trim();
            if (current) {
                switch (index) {
                    case 0:
                        Town = current;
                        index++;
                        break;
                    case 1:
                        Latitude = Math.round(Number(current) * 100 + Number.EPSILON) / 100;
                        index++;
                        break;
                    case 2:
                        Longitude = Math.round(Number(current) * 100 + Number.EPSILON) / 100;
                        index = 0;
                        break;
                }

            }
        }
        result.push({ Town, Latitude, Longitude });
    }
    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))