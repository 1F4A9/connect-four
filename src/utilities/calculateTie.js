export function calculateTie(gameBoard) {
  const cellsLeft = [];

  gameBoard.forEach(element => {
    if (!element) {
      cellsLeft.push(element)
    }
  })

  if (cellsLeft.length < 1) {
    return 'tie'
  }
}