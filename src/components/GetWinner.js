import { WIDTH, HEIGHT } from '../constants/Constants';

function allEqual(ar) {
  if (ar[0] === 'yellow' && ar[1] === 'yellow' && ar[2] === 'yellow' && ar[3] === 'yellow') {
    return 'yellow';
  }

  if (ar[0] === 'red' && ar[1] === 'red' && ar[2] === 'red' && ar[3] === 'red') {
    return 'red';
  }
}

export function checkWinner(gameBoard) {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH - 3; x++) {
      const ar = gameBoard.slice(y * WIDTH + x, y * WIDTH + x + 4);

      if (allEqual(ar)) {
        console.log(allEqual(ar))
      }
    }
  }

  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT - 3; y++) {

      const ar = [
        gameBoard[y * WIDTH + x],
        gameBoard[(y + 1) * WIDTH + x],
        gameBoard[(y + 2) * WIDTH + x],
        gameBoard[(y + 3) * WIDTH + x],
      ];

      if (allEqual(ar)) {
        console.log(allEqual(ar))
      }
    }
  }
}