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

  @media only screen and (max-width: 667px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    width: 13vw;
    border-radius: 25px;
    border: none;
    background-color: #ff0000;
    color: #fff;
    font-size: 0.25rem;
  }
`;
function LearnMoreButton(props: any) {
  return (
    <LearButtonStyled style={props.style}>
      <span>LEARN MORE</span>
    </LearButtonStyled>
  );
}

export default LearnMoreButton;
