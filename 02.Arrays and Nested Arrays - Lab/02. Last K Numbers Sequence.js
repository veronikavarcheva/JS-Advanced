function solve(n, k) {
    let arr = [1];

    let arrLength = n;
    for (let i = 1; i < arrLength; i++) {
        arr[i] = 0;
        for (let j = i; j > i - k; j--) {
            if (arr[j - 1] !== undefined) {

                arr[i] += arr[j - 1];
            }
        }


    }
    return arr;
}

let result1 = solve(6, 3);
let result2 = solve(8, 2);
console.log(result1);
console.log(result2);
