import React from 'react';
import styled from 'styled-components';
import LearnMoreButton from '../components/shared/secondPageShared/learnMoreButton';
import delivery1 from '../resource/images/delivery1.jpg';
import burger3 from '../resource/images/burger3.jpg';

const EighthPageStyled = styled.div`
  height: 100vh;
  position: relative;
  padding: 80px 50px;

  .eighthPage__article {
    width: 50vw;
    padding: 40px 50px 40px 120px;
    background-color: #e5e5e5;
    position: absolute;
    right: 140px;
    top: 180px;
    word-break: keep-all;
  }

  .eighthPage__red-round {
    background-color: #ff0000;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    right: 20px;
    top: 40px;
    margin-top: 20px;
    animation: backInRight;
    animation-duration: 2s;
  }

  .eighthPage__image1 {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 5px solid #fff;
    position: absolute;
    top: 50px;
    left: 100px;
    animation: bounceInLeft;
    animation-duration: 2s;
  }
  .eighthPage__image2 {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid #fff;
    position: absolute;
    top: 400px;
    animation: bounceInLeft;
    animation-duration: 2.5s;
  }
  .eighthPage__article__h2 {
    font-size: 3rem;
    margin-bottom: 30px;
  }
  .eighthPage__article__p {
    font-size: 1.2rem;
    margin-bottom: 80px;
  }
  .little-button {
    display: none;
  }

  @media only screen and (max-width: 667px) {
    .eighthPage__article {
      width: 50vw;
      padding: 20px 20px 20px 30px;
      right: 10vw;
      top: 20vh;
      word-break: keep-all;
    }
    .eighthPage__red-round {
      width: 70px;
      height: 70px;
      position: absolute;
      right: 20px;
      top: 6px;
      margin-top: 20px;
    }
    .eighthPage__image1 {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: absolute;
      left: 10vw;
    }
    .eighthPage__image2 {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: absolute;
      top: 60vh;
      left: 5vw;
    }
    .eighthPage__article__h2 {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }
    .eighthPage__article__p {
      font-size: 0.6rem;
      margin-bottom: 8vh;
    }
    .little-button {
      display: block;
    }
    .big-button {
      display: none;
    }
  }
`;

function EighthPage() {
  return (
    <EighthPageStyled>
      <div className="eighthPage__red-round"></div>
      <article className="eighthPage__article">
        <h2 className="eighthPage__article__h2">Delivery Services</h2>
        <p className="eighthPage__article__p">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <span className="big-button">
          <LearnMoreButton style={{ width: '200px', padding: '15px' }} />
        </span>
        <span className="little-button">
          <LearnMoreButton />
        </span>
      </article>
      <img
        src={delivery1}
        alt="image-delivery"
        className="eighthPage__image1"
      />
      <img src={burger3} alt="" className="eighthPage__image2" />
      <div className="eighthPage__red-white-round"></div>
    </EighthPageStyled>
  );
}

export default EighthPage;
