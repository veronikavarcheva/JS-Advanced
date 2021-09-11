function solve(input) {
    let radius;
    let circleArea;
    let typeOfArg = typeof input;
    if (typeOfArg === 'number') {
        radius = input;
        circleArea = Math.pow(radius, 2) * Math.PI;
        // The Math.pow() function returns the base to the exponent power.
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArg}.`);
    }
}

solve(5);
solve('name');