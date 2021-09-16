function solve(input) {
    let arr = [];
    for (let el of input) {
        let [command, str] = el.split(' ');
        switch (command) {
            case 'add':
                arr.push(str);
                break;
            case 'remove':
                arr = arr.filter(x => x !== str);
                break;
            case 'print':
                console.log(arr.join(','));
                break;

        }
    }

}

let result1 = solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
let result2 = solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
