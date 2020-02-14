import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 490px;
`;

const Cell = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  border: 1px solid black;
  box-sizing: border-box;
`;

// y * width + x

//gameBoard[y * width + x]

// index + bredden === nästa rad undertill

function Grid({ state, addDiscs }) {

  const { gameBoard } = state;

  const onClick = (i) => {
    addDiscs(i)
  }

  return(
    <Container>
      {gameBoard.map((_, i) => 
        <Cell 
          style={{backgroundColor: gameBoard[i]}}
          onClick={() => onClick(i)}
          key={i}>
        </Cell>
      )}
    </Container>
  )
}

export default Grid;