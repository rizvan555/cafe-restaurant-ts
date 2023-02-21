import React from 'react';
import styled from 'styled-components';
import food1 from '../../../resource/images/food1.jpg';
import food2 from '../../../resource/images/food2.jpg';
import food3 from '../../../resource/images/food3.jpg';
import food4 from '../../../resource/images/food4.jpg';

const FoodImageStyled = styled.ul`
  display: flex;
  padding: 10px 20px;
  gap: 25px;
  list-style-type: none;


  li img {
    width: 18vw;
  }
`;
function FoodImageContainer() {
  return (
    <FoodImageStyled>
      <li>
        <a href="">
          <img src={food1} alt="food1" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={food2} alt="food2" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={food3} alt="food3" />
        </a>
      </li>
      <li>
        <a href="">
          {' '}
          <img src={food4} alt="food4" />
        </a>
      </li>
    </FoodImageStyled>
  );
}

export default FoodImageContainer;
