function solve(array) {
    let headings = dropIntoParts(array[0]);
    let rows = array.slice(1)
        .map(row => dropIntoParts(row)
            .reduce((acc, curr, i) => {
                acc[headings[i]] = curr;
                return acc;
            }, {}));

    return JSON.stringify(rows);

    function dropIntoParts(str) {
        return str.split(/\s*\|\s*/gim)
            .filter(x => x !== '')
            .map(x => isNaN(Number(x)) ? x : Number(Number(x).toFixed(2)));
    }
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
console.log(solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));