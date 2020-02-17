import { WIDTH, HEIGHT } from '../constants/Constants';
import { calculateWinner } from '../utilities/calculateWinner';
import { calculateTie } from '../utilities/calculateTie';

export function reducer(state, action) {
  const newCells = [...state.gameBoard];

  switch (action.type) {
    case 'addDisc':
      if (state.winner) { 
        return state; 
      }
      
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
        
        const tie = calculateTie(newCells);
        const winner = calculateWinner(newCells);

        return {
          ...state,
          gameBoard: newCells,
          activePlayer: state.activePlayer === "red" ? "yellow" : "red",
          winner,
          tie
        }
      } else {
        return state;
      }

    case 'newGame':
      return {
        ...state,
        gameBoard: new Array(WIDTH * HEIGHT).fill(null),
        activePlayer: 'yellow',
        winner: null,
        tie: null,
      }

    default:
      return state;
  }
}