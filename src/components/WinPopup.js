import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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
`;

export function WinPopup({ winner }) {
  return ReactDOM.createPortal (
    <Container>
      <h2>{winner}</h2>
    </Container>,
    document.getElementById('portal-root')
  )
}