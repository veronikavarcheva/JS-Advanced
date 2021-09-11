function solve(firstArg, secondArg, thirdArg) {
    let sumLength;
    let averageLength;
    let firstArgLength = firstArg.length;
    let secondArgLength = secondArg.length;
    let thirdArgLength = thirdArg.length;
    sumLength = firstArgLength + secondArgLength + thirdArgLength;
    averageLength = Math.floor(sumLength / 3);
    console.log(sumLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');