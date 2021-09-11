function solve(number = 5) {
    let output = '';
    let sign = '*';
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= number; j++) {
            output += sign + ' ';
        }
        output += '\n';
    }
    console.log(output);
}

solve(1);
solve(2);
solve(5);
solve();