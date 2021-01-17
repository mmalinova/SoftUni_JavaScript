function solve(arr) {
    let result = [];
    arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < arr.length; i++) {
        result.push(`${++i}` + `.` + `${arr[--i]}`);
    }
    return result.join("\n");
}

console.log(solve(["John", "bob", "john", "Ema"]));