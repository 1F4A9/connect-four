import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

import { upperCaseFirst } from '../utilities/upperCaseFirst';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  left: 50%;
  margin-left: -150px;
  top: 50%;
  margin-top: -150px;
  text-align: center;
  border-radius: 7px;
  background: #55b9f3;
  z-index: 2;
  display: flex;
  flex-direction: column;

  animation-name: ${fadeIn};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;

  i {
    font-size: 60px;
    margin-top: 45px;
    cursor: pointer;
  }
}
`;

export function Message({ state, newGame }) {
  const { winner, tie } = state;

  let msg = null;

  if (winner) {
    msg = `${upperCaseFirst(winner)} wins!`;
  } else if (tie) {
    msg = `We have a ${tie}!`;
  }

  return ReactDOM.createPortal (
      <Container msg={msg}>
        <h2>{msg}</h2>
        <i className="fas fa-redo" onClick={() => newGame()}></i>
      </Container>,
    document.getElementById('portal-root')
  )
}