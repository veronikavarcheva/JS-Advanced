function solve(input) {
    let result = [];
    for (let index in input) {
        if (index % 2 !== 0) {
            result.push(input[index]);
        }
    }
    result = result
        .map(el => el * 2)
        .reverse();

    return result;
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));