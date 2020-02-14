import React, { useReducer } from 'react';
import styled from 'styled-components';

import { WIDTH, HEIGHT } from './constants/Constants';
import { reducer } from './reducers/app';
import Grid from './components/Grid';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
      <Grid state={state} addDiscs={addDiscs}/>
    </Container>
  );
}

export default App;

