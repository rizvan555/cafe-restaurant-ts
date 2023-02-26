import React, { useEffect } from 'react';
import styled from 'styled-components';
import food1 from '../../../resource/images/food1.jpg';
import food2 from '../../../resource/images/food2.jpg';
import food3 from '../../../resource/images/food3.jpg';
import food4 from '../../../resource/images/food4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FoodImageStyled = styled.ul`
  display: flex;
  padding: 10px 20px;
  gap: 25px;
  list-style-type: none;

  li img {
    width: 18vw;
    animation: bounceInRight;
    animation-duration: 3s;
  }
  li img:hover {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
  }
  @media only screen and (max-width: 667px) {
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    gap: 25px;

    li img {
      width: 48vw;
      animation: bounceInRight;
      animation-duration: 3s;
    }
    li img:hover {
      transform: scale(1.1);
      transition: all 0.4s ease-in-out;
    }
  }
`;

function FoodImageContainer() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div>
      <FoodImageStyled>
        <li>
          <a href="#">
            <img src={food1} alt="food1" data-aos="fade-right" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={food2} alt="food2" data-aos="fade-right" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={food3} alt="food3" data-aos="fade-right" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={food4} alt="food4" data-aos="fade-right" />
          </a>
        </li>
      </FoodImageStyled>
    </div>
  );
}

export default FoodImageContainer;
