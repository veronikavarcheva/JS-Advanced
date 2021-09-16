function solve(input) {
    let newArr = [];
    input.filter(num => {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    });
    return newArr.join('\n');
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));