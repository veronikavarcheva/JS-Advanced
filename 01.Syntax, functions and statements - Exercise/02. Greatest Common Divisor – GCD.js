function solve(num1, num2) {
    for (let i = 9; i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i);
            break;
        } else {
            continue;
        }
    }
}

solve(15, 5);
solve(2154, 458);
