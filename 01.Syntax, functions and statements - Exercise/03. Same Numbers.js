function solve(number) {
    let stringReprNumber = number.toString();
    let flag = true;
    let sum = 0;
    
    for (let i = 0; i <= stringReprNumber.length - 1; i++) {
        sum += Number(stringReprNumber[i]);
    }

    for (let i = 0; i < stringReprNumber.length - 1; i++) {
        if (stringReprNumber[i] === stringReprNumber[i + 1]) {
            continue;
        } else {
            flag = false;
            console.log(false);
            console.log(sum);
            break;
        }
    }

    if (flag) {
        console.log(true);
        console.log(sum);
    }
}

solve(2222222);
solve(1234);
