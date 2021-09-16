function solve(matrix) {
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    for (let i = 0; i <= matrix.length - 1; i++) {
        sumMainDiagonal += matrix[i][i];
        sumSecondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }
    console.log(`${sumMainDiagonal} ${sumSecondaryDiagonal}`);

}

solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);