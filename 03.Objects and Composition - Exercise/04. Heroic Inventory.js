function solve(array) {
    let newArr = [];
    array.forEach(str => {
        let [name, level, items] = str.split(' / ');
        level = Number(level);
        let itemsArr = (!items) ? [] : items.split(', ');
        let obj = {};
        obj['name'] = name;
        obj['level'] = level;
        obj['items'] = itemsArr;
        newArr.push(obj);

    });

    let output = JSON.stringify(newArr);
    return output;

}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));
console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));