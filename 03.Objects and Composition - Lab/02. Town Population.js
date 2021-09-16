function solve(input) {
    let obj = {};
    input.forEach(element => {
        let [town, population] = element.split('<->');
        population = Number(population)

        if (obj[town] == undefined) {
            obj[town] = population;
        } else {
            obj[town] += population;
        }
    });

    let entries = Object.entries(obj);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }

}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);