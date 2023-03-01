import React from 'react';
import styled from 'styled-components';

const ViewMenuButtonStyle = styled.button`
  width: 18vw;
  border-radius: 25px;
  border: none;
  padding: 20px 30px;
  background-color: #ff0000;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  
  @media only screen and (max-width: 667px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 4vh;
    border-radius: 25px;
    border: none;
    padding: 15px 30px;
    background-color: #ff0000;
    color: #fff;
    font-weight: bold;
    font-size: 0.5rem;
  }
`;
function ViewMenuButton() {
  return (
    <ViewMenuButtonStyle>
      <span>VIEW MENU</span>
    </ViewMenuButtonStyle>
  );
}

export default ViewMenuButton;
