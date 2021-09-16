function solve(input) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];    
    let firstPlayerMark = 'X';
    let secondPlayerMark = 'O';
    let counterX = 0;
    let counterO = 0;
    let countWinsX;
    let countWinsO;

    for (let n = 0; n < input.length; n++) {

        let [i, j] = input[n].split(' ').map(x => Number(x));
        if (checkForTikTakToeWinner(dashboard) === true) {
            break;
        }
        if (dashboard[i][j] === false) {
            if (counterX == 0 || counterX === counterO) {
                dashboard[i][j] = firstPlayerMark;
                counterX++;
            } else if (counterX < counterO) {
                dashboard[i][j] = firstPlayerMark;
                counterX++;
            } else {
                dashboard[i][j] = secondPlayerMark;
                counterO++;
            }

        } else if (dashboard[i][j] === false) {
            if (counterO === 0) {
                dashboard[i][j] = secondPlayerMark;
                counterO++;
            } else if (counterO < counterX) {
                dashboard[i][j] = secondPlayerMark;
                counterO++;
            } else {
                dashboard[i][j] = firstPlayerMark;
                counterX++;
            }

        } else if (dashboard[i][j] !== false && n < 9) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
      
    }

    if (checkForTikTakToeWinner(dashboard) === false) {
        console.log('The game ended! Nobody wins :(');
        dashboard.forEach((x) => {
            x = x.join('\t');
            console.log(x);
        });
    };

    if (checkForTikTakToeWinner(dashboard) === true) {
        if (countWinsO > countWinsX) {
            console.log('Player O wins!');
        } else {
            console.log('Player X wins!');
        }
        dashboard.forEach((x) => {
            x = x.join('\t');
            console.log(x);
        });

    }

    function checkForTikTakToeWinner(board) {
        let isWinnerX = false;
        let isWinnerO = false;
        countWinsX = 0;
        countWinsO = 0;
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === 'X' && board[i][1] === 'X' && board[i][2] === 'X') {
                isWinnerX = true;
                countWinsX++;
                break;
            }
            if (board[i][0] === 'O' && board[i][1] === 'O' && board[i][2] === 'O') {
                isWinnerO = true;
                countWinsO++;
                break;
            }
            if (board[0][i] === 'X' && board[1][i] === 'X' && board[2][i] === 'X') {
                isWinnerX = true;
                countWinsX++;
                break;
            }
            if (board[0][i] === 'O' && board[1][i] === 'O' && board[2][i] === 'O') {
                isWinnerO = true;
                countWinsO++;
                break;
            }
        }
        if (!isWinnerX) {
            if ((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
                (board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === 'X')) {
                isWinnerX = true;
                countWinsX++;
            }
        }
        if (!isWinnerO) {
            if ((board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
                (board[2][0] === 'O' && board[1][1] === 'O' && board[0][2] === 'O')) {
                isWinnerO = true;
                countWinsO++;
            }
        }
        return isWinnerX
            ||
            isWinnerO;
    }
}

solve([
    '0 1', '0 0', '0 2',
    '2 0', '1 0', '1 1',
    '1 2', '2 2', '2 1',
    '0 0', ''
]);
solve([
    '0 0', '0 0', '1 1',
    '0 1', '1 2', '0 2',
    '2 2', '1 2', '2 2',
    '2 1'
]);
solve([
    '0 1', '0 0', '0 2',
    '2 0', '1 0', '1 2',
    '1 1', '2 1', '2 2',
    '0 0'
]);