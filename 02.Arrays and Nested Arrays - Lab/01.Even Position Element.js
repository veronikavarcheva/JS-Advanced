function solve(input) {
    let str = '';
    for (let index in input) {
        if (index % 2 === 0) {
            str += input[index] + ' ';
        }
    }
    console.log(str);

}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);