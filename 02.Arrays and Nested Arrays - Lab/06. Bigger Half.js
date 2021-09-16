function solve(input) {
    let lengthInput = input
        .sort((a, b) => a - b)
        .length;
    let result;
    if (lengthInput % 2 === 0) {
        result = input.slice(-lengthInput / 2);
    } else {
        result = input.slice(-Math.ceil(lengthInput / 2));
    }

    return result;
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));