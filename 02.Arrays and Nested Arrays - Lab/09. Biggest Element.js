function solve(matrix) {
    let biggestElement = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i <= matrix.length - 1; i++) {
        for (let j = 0; j <= matrix[i].length - 1; j++) {
            biggestElement = matrix[i].reduce((acc, curr) => {
                if (Number(acc) <= Number(curr)) {
                    return curr;
                } else if (Number(acc) > Number(curr)) {
                    return acc;
                } else {
                    return undefined;
                }
            }, biggestElement);

        }
    }
    console.log(biggestElement);
}

solve([[20, 50, 10], [8, 33, 145]]);
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);