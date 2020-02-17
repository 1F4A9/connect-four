import React from 'react';
import styled from 'styled-components';

import Discs from './Discs';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 574px;
  background-color: #037ee8;
  overflow: hidden;
  padding: 6px;
  border: 2px solid #383838;
  border-radius: 8px;

  box-shadow:  5px 5px 10px #515050, -5px -5px 10px #f2efef;
`;

const Cell = styled.div`
  position: relative;
  display: flex;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #383838;
  margin: 6px;
  box-shadow: inset 5px 5px 3px 0px rgba(0,0,0,0.75), 0px 0px 2px 5px #0387f7, -3px -3px 3px 1px #fff;
`;

function Grid({ state, addDiscs }) {

  const { gameBoard } = state;

  const onClick = (i) => {
    addDiscs(i)
  }

  return(
    <Container>
      {gameBoard.map((_, i) => 
        <Cell onClick={() => onClick(i)} key={i}>
          <Discs state={state} activePlayer={gameBoard[i]}/>
        </Cell>
      )}
    </Container>
  )
}

export default Grid;