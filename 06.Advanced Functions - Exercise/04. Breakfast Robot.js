function solution() {

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            order: ['carbohydrate', 'flavour']
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            order: ['carbohydrate', 'flavour']
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            order: ['carbohydrate', 'fat', 'flavour']
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            order: ['protein', 'fat', 'flavour']
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carbohydrate', 'fat', 'flavour']
        }
    }

    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function manager(instruction) {
        let [command, element, quantity] = instruction.split(' ');
        if (command === 'restock') {
            microelements[element] += Number(quantity);
            return 'Success';
        }
        if (command === 'prepare') {
            let required = Object.assign({}, recipes[element]);

            required.order.forEach((key) => required[key] *= Number(quantity));
            for (let el of required.order) {
                if (microelements[el] < required[el]) {
                    return `Error: not enough ${el} in stock`;
                }
            };
            required.order.forEach(key => microelements[key] -= required[key]);

            return 'Success'

        }
        if (command === 'report') {
            return `protein=${microelements['protein']} carbohydrate=${microelements['carbohydrate']} fat=${microelements['fat']} flavour=${microelements['flavour']}`;
        }
    }

}

let manager = solution();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4 '));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('report'));