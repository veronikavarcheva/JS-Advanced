function solve(number, oper1, oper2, oper3, oper4, oper5) {
    number = Number(number);
    let operationsArr = [];
    operationsArr.push(oper1, oper2, oper3, oper4, oper5);
    operationsArr.forEach((oper) => {
        switch (oper) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number *= 0.80;
                console.log(number);
                break;
        }
    });

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');