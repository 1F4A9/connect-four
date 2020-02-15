import React, { useReducer } from 'react';
import styled from 'styled-components';

import { WIDTH, HEIGHT } from '../constants/Constants';
import { reducer } from '../reducers/app';
import { GlobalStyle } from '../shared/GlobalStyle';
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

function App() {
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
  
  return (
    <Container>
      <GlobalStyle />
      <h1>Connect Four</h1>
      {state.winner ? <p>{state.winner}</p> : null}
      <Grid state={state} addDiscs={addDiscs}/>
    </Container>
  );
}

export default App;

