function solve(input) {
    let obj = {};
    let objSequance = {};
    input.forEach(line => {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);
        if (!obj[juice]) {
            obj[juice] = [];
            obj[juice].push(quantity);
        } else {
            obj[juice].push(quantity);
        }
        let sum = 0;
        for (let i = 0; i < obj[juice].length; i++) {
            sum += obj[juice][i];
        }

        if (sum >= 1000) {
            let bottles = Math.trunc(sum / 1000);
            objSequance[juice] = bottles;
        }
    });

    let entries = Object.entries(objSequance);
    for (let kvp of entries) {
        console.log(`${kvp[0]} => ${kvp[1]}`);
    }

}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);