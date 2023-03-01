import React from 'react';
import styled from 'styled-components';

const AddToCardStyle = styled.button`
  width: 12vw;
  border-radius: 25px;
  border: none;
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  @media only screen and (max-width: 667px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14vw;
    height: 5vh;
    font-size: 0.3rem;
  }
`;
function AddToCardButton() {
  return (
    <AddToCardStyle>
      <span>ADD TO CARD</span>
    </AddToCardStyle>
  );
}

export default AddToCardButton;
