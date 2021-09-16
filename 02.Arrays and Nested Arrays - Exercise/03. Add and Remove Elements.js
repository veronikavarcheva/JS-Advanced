function solve(input) {
    let arr = [];
    let el = 0;
    input.forEach(command => {

        if (command === 'add') {
            el += 1;
            arr.push(el);
        } else if (command === 'remove') {
            arr.pop();
            el += 1;
        }
    });

    if (arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}

solve(['add',
    'add',
    'add',
    'add']
);
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);
solve(['remove',
    'remove',
    'remove']
);