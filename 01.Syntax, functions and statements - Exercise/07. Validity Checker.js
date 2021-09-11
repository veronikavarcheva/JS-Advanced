function solve(x1, y1, x2, y2) {

    calculateDistance(x1, y1, 0, 0) ?
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
        : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    calculateDistance(x2, y2, 0, 0) ?
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
        : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    calculateDistance(x1, y1, x2, y2) ?
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);


    function calculateDistance(m1, n1, m2, n2) {
        let distance = Math.sqrt((m2 - m1) ** 2 + (n2 - n1) ** 2);
        return Number.isInteger(distance);
    }
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);