import React from 'react';
import styled from 'styled-components';

const LearButtonStyled = styled.button`
  width: 12vw;
  border-radius: 25px;
  border: none;
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
`;
function LearnMoreButton() {
  return (
    <LearButtonStyled>
      <span>LEARN MORE</span>
    </LearButtonStyled>
  );
}

export default LearnMoreButton;
