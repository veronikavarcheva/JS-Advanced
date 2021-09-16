function solve(array, number) {
    function rotate(arr, rotations) {
        for (let i = 1; i <= rotations; i++) {
            arr.unshift(arr.pop());
        }
    }

    rotate(array, number);
    console.log(array.join(' '));

}

solve(['1',
    '2',
    '3',
    '4'],
    2
);
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
);