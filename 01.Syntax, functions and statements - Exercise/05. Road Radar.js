function solve(currentSpeed, area) {
    currentSpeed = Number(currentSpeed);
    let isThereStatus = true;
    let limit;
    let status;

    switch (area) {
        case 'residential':
            limit = 20;
            speedStatus(currentSpeed);
            return;
        case 'city':
            limit = 50;
            speedStatus(currentSpeed);
            return;
        case 'interstate':
            limit = 90;
            speedStatus(currentSpeed);
            return;
        case 'motorway':
            limit = 130;
            speedStatus(currentSpeed);
            return;
    }

    function speedStatus(speed) {
        let differenceOverLimit = currentSpeed - limit;
        if (differenceOverLimit <= 0) {
            isThereStatus = false;
        } else if (differenceOverLimit > 0 && differenceOverLimit <= 20) {
            status = 'speeding';
        } else if (differenceOverLimit > 20 && differenceOverLimit <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        (!isThereStatus) ? console.log(`Driving ${speed} km/h in a ${limit} zone`) :
            console.log(`The speed is ${differenceOverLimit} km/h faster than the allowed speed of ${limit} - ${status}`);

    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');

