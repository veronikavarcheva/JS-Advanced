function solve(input) {
    let sortedArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArray.join('\n'));
}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);