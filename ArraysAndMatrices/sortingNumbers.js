function solve(arr) {
    arr.sort((a, b) => a - b);

    let middle = Math.floor(arr.length / 2);
    let result = [];
    
    for (let i = 0, j = arr.length - 1; i < j, j > i; i++, j--) {
        result.push(arr[i]);
        result.push(arr[j]);
    }

    if (arr.length % 2 !== 0) {
        result.push(arr[middle]);
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));  
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 33]));