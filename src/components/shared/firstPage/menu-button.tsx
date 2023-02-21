import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 25vw;
  border-radius: 25px;
  border: none;
  padding: 15px 30px;
  background-color: #ff0000;
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
`;

function MenuButton() {
  return (
    <ButtonStyled>
      <span>VIEW MENU</span>
    </ButtonStyled>
  );
}

export default MenuButton;
