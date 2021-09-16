function solve(input) {
    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop());
    let sum = firstElement + lastElement;
    return sum;
}

let result1 = solve(['20', '30', '40']);
let result2 = solve(['5', '10']);
console.log(result1);
console.log(result2);
