import React, { useReducer } from 'react';
import styled from 'styled-components';

import { WIDTH, HEIGHT } from '../constants/Constants';
import { reducer } from '../reducer';
import { GlobalStyle } from '../shared/GlobalStyle';
import { Message } from './Message';
import Grid from './Grid';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    font-family: 'Merienda One', cursive;
    font-size: 50px;
    margin-bottom: 30px;
  }
`;

function GameBoard() {
  const [state, dispatch] = useReducer(reducer, { 
    gameBoard: new Array(WIDTH * HEIGHT).fill(null),
    activePlayer: 'yellow',
  })

  function addDiscs(index) {
    dispatch({
      type: 'addDisc',
      index
    })
  }

  function newGame() {
    dispatch({
      type: 'newGame'
    })
  }
  
  return (
    <Container>
      <GlobalStyle />
      {state.winner || state.tie ? <Message state={state} newGame={newGame}/> : null}
      <h1>Connect Four</h1>
      <Grid state={state} addDiscs={addDiscs}/>
    </Container>
  );
}

export default GameBoard;