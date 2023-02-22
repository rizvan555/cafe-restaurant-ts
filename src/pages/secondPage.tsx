import React from 'react';
import styled from 'styled-components';
import LearnMoreButton from '../components/shared/secondPageShared/learnMoreButton';
import food5 from '../resource/images/food5.jpg';
import 'animate.css';

const SecondPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c5c5c5;
  height: 100vh;
  padding: 40px;
  position: relative;

  .second_page__article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 24vw;
    padding: 10px 30px 30px 30px;
    font-size: 1.6rem;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    left: 110px;
    top: 250px;
    animation: backInLeft;
    animation-duration: 2s;

    p {
      font-size: 1.2rem;
      margin-bottom: 40px;
      word-spacing: 3px;
    }
  }
  .second_page__image {
    width: 40vw;
    height: 75vh;
    z-index: 1;
    position: absolute;
    top: 150px;
    animation: backInUp;
    animation-duration: 2s;
  }

  .second_page__red-round {
    background-color: #ff0000;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: absolute;
    right: 250px;
    top: 10px;
    margin-top: 20px;
    animation: backInRight;
    animation-duration: 2s;
  }
`;

function SecondPage() {
  return (
    <SecondPageStyle>
      <article className="second_page__article">
        <h3>Breakfast</h3>
        <p>
          Breakfast is one of the most special meals of our restaurant. Our menu
          includes local delicacies as well as international fare. Our guests
          can choose from fresh fruit juices, hot drinks, basic breakfast items
          such as bread, butter, jam and many other delicious options. The
          breakfast served in our restaurant is healthy and satisfying. Our
          guests can enjoy a pleasant breakfast experience in a beautiful
          atmosphere.
        </p>
        <LearnMoreButton />
      </article>
      <img className="second_page__image" src={food5} alt="image5" />
      <div className="second_page__red-round"></div>
    </SecondPageStyle>
  );
}

export default SecondPage;
