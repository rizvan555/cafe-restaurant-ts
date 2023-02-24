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
`;
function AddToCardButton() {
  return (
    <AddToCardStyle>
      <span>ADD TO CARD</span>
    </AddToCardStyle>
  );
}

export default AddToCardButton;
