function solve(piesArr, startPie, endPie) {
    let indexStartPie = piesArr.indexOf(startPie);
    let indexEndPie = piesArr.indexOf(endPie);
    let resultArr = piesArr.slice(indexStartPie, indexEndPie + 1);
    return resultArr;
}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));

console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));
