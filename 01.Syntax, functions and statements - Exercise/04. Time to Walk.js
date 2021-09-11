function solve(steps, footprintLength, speed) {
    steps = Number(steps);
    footprintLength = Number(footprintLength);
    speed = Number(speed);
    let totalLengthMeters = steps * footprintLength;
    let breaksInSec = Math.floor(totalLengthMeters / 500);
    let timeInMetersPerSec = speed * 1000 / 3600;
    timeInSec = totalLengthMeters / timeInMetersPerSec + breaksInSec * 60;
    let hours = Math.floor(timeInSec / 3600);
    let minutes = Math.floor(timeInSec / 60);
    let seconds = Math.ceil(timeInSec % 60);

    function result(number) {
        if (number < 10) {
            return '0' + `${number}`;
        } else {
            return `${number}`;
        }
    }

    console.log(`${result(hours)}:${result(minutes)}:${result(seconds)}`);

}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);