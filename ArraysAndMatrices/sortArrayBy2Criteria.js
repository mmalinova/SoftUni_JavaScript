function solve(arr) {

    return arr.sort((a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    })
    .join('\n');
}

console.log(solve(['test',
    'Deny',
    'omen',
    'Default']

));