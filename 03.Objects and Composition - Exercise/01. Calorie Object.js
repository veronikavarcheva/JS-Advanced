function solve(array) {
    let obj = {};
    for (let index in array) {
        index = Number(index);
        if (index % 2 === 0) {
            obj[`${array[index]}`] = Number(array[(index + 1)]);
        }
    }
    console.log(obj);

}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);