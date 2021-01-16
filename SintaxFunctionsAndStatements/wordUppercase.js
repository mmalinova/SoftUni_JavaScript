function solve(str) {

    let arr = [];
    let regex = /\w+/gm;
    arr = str.match(regex);

    let result = arr.join(', ');
    return result.toUpperCase();
}

console.log(solve('Hi, how are you?'));