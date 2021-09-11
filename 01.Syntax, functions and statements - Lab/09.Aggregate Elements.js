function solve(input) {
    let sum = 0;
    let sumA = 0;
    let concat = '';
    input.forEach((num) => {
        sum += num;
        sumA += 1 / num;
        concat += `${num}`;
    });

    console.log(sum);
    console.log(sumA);
    console.log(concat);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);
