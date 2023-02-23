import React from 'react';
import styled from 'styled-components';
import ViewMenuButton from '../components/shared/fifthPageShared/viewMenuButton';
import backgroundBurger from '../resource/images/backgroundBurger.jpg';

const FifthPageStyle = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding: 200px 0 150px 50px;
  background-image: url(${backgroundBurger});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;

  h1 {
    font-size: 1.8rem;
    margin-bottom: -20px;
  }
  h2 {
    font-size: 6rem;
    margin-bottom: -10px;
  }
  h3 {
    font-size: 1.4rem;
    margin-bottom: 60px;
  }
`;

function FifthPage() {
  return (
    <FifthPageStyle>
      <h1>MUST-TRY AMERICAN FOODS</h1>
      <h2>Fast Food</h2>
      <h3>Just try it once</h3>
      <ViewMenuButton />
    </FifthPageStyle>
  );
}

export default FifthPage;
