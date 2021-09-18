function solve(input) {
    let obj = {};
    input.forEach(line => {
        let [brand, model, carsProduced] = line.split(' | ');
        carsProduced = Number(carsProduced);
        if (!obj.hasOwnProperty(brand)) {
            obj[brand] = { [model]: carsProduced };
        } else {
            if (!obj[brand].hasOwnProperty(model)) {
                obj[brand][model] = carsProduced;
            } else {
                obj[brand][model] += carsProduced;
            }
        }
    });
    for (let key in obj) {
        console.log(key);
        let entries = Object.entries(obj[key]);
        for (let kvp of entries) {
            console.log(`###${kvp[0]} -> ${kvp[1]}`);
        }
    }

}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);