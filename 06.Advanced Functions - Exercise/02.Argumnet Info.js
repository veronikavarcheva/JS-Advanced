function solve() {
    let arr = [];
    let obj = {};
    [...arguments].forEach((argument) => {
        arr.push({ type: typeof argument, value: argument });
    });

    arr.forEach(el => {
        console.log(`${el.type}: ${el.value}`);
        if (!obj.hasOwnProperty(el.type)) {
            obj[el.type] = 0;
        }
        obj[el.type] += 1;
    });


    let entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (let kvp of entries) {
        console.log(`${kvp[0]} = ${kvp[1]}`);
    }

}


solve('cat', 42, function () { console.log('Hello world!'); });