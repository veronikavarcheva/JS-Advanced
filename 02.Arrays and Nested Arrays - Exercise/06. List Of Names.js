function solve(input) {
    input.sort((a, b) => a.localeCompare(b));
    let num = 1;
    input.forEach(element => {
        console.log(`${num}.${element}`);
        num++;
    });
}

solve(["John", "Bob", "Christina", "Ema"]);