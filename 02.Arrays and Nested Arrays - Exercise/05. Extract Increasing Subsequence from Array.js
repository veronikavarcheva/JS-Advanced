function solve(numbers) {
    let filteredNumbers = numbers.reduce((acc, curr) => {
        if (curr / acc[acc.length - 1] >= 1) {
            acc.push(curr);
        }
        return acc;
    }, [numbers.shift()]);
    return filteredNumbers;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
console.log(solve([1,
    2,
    3,
    4]
));
console.log(solve([20,
    3,
    2,
    15,
    6,
    1]));