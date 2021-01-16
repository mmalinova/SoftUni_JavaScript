const solve = (number) => {
    let isTrue = true;

    let str = String(number);
    let sum = Number(str.charAt(str.length - 1));
    for (let i = 0; i < str.length - 1; i++) {
        sum += Number(str.charAt(i));
        if (str.charAt(i) !== str.charAt(++i)) {
            isTrue = false;
        }
        i--;
    }

    return `${isTrue}\n${sum}`;
}

console.log(solve(1234));