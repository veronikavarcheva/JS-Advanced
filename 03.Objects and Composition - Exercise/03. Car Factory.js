function solve(object) {
    let { model, power, color, carriage, wheelsize } = object;
    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };


    if (power <= 90) {
        object.engine = smallEngine;
    } else if (power > 90 && power <= 120) {
        object.engine = normalEngine;
    } else if (power > 120 && power <= 200) {
        object.engine = monsterEngine;
    }

    delete object.power;


    if (carriage === 'hatchback') {
        object.carriage = {};
        object.carriage.type = 'hatchback';
        object.carriage.color = `${object.color}`;
    } else {
        object.carriage = {};
        object.carriage.type = 'coupe';
        object.carriage.color = `${object.color}`;
    }
    delete object.color;


    if (`${Number(wheelsize)}` % 2 !== 0) {
        object.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    } else {
        wheelsize--;
        object.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    }
    delete object.wheelsize;

    return object;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));
