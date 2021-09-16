function solve(input) {
    input.sort((a, b) => a - b);
    let numOfElToMove;
    if (input.length % 2 === 0) {
        numOfElToMove = input.length / 2 - 1;
    } else {
        numOfElToMove = input.length / 2;
    }

    let lastEl;
    let index = 1;
    for (let i = 1; i <= numOfElToMove; i++) {
        lastEl = input.pop();
        input.splice(index, 0, lastEl);
        index += 2;
    }

    return input;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));