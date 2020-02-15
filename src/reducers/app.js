import { WIDTH, HEIGHT } from '../constants/Constants';
import { checkWinner } from '../containers/CheckForWinner';

export function reducer(state, action) {
  const newCells = [...state.gameBoard];

  switch (action.type) {
    case 'addDisc':
      const column = action.index % WIDTH;

      let index = (HEIGHT - 1) * WIDTH + column;

      while (index >= 0) {
        if (!newCells[index]) {
          break;
        }
        index -= WIDTH;
      }

      if (index >= 0) {
        newCells[index] = state.activePlayer;

        const winner = checkWinner(newCells);

        return {
          ...state,
          gameBoard: newCells,
          activePlayer: state.activePlayer === "red" ? "yellow" : "red",
          winner,
        }
      } else {
        return state;
      }
    default:
      return state;
  }
}