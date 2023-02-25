import React, { useEffect } from 'react';
import styled from 'styled-components';
import ViewMenuButton from '../components/shared/fifthPageShared/viewMenuButton';
import backgroundBurger from '../resource/images/backgroundBurger.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FifthPageStyle = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding: 220px 0 150px 50px;
  background-image: url(${backgroundBurger});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;

  h1 {
    font-size: 6rem;
    letter-spacing: 1px;
    margin-bottom: 20px;
    animation: bounceInLeft;
    animation-duration: 2s;
  }
  h2 {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 1.4rem;
    margin-bottom: 90px;
  }
`;

function FifthPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <FifthPageStyle>
      <h2>MUST-TRY AMERICAN FOODS</h2>
      <h1 data-aos="fade-left">Fast Food</h1>
      <h3>Just try it once</h3>
      <ViewMenuButton />
    </FifthPageStyle>
  );
}

export default FifthPage;
