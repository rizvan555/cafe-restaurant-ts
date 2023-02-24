import React from 'react';
import styled from 'styled-components';
import LearnMoreButton from '../components/shared/secondPageShared/learnMoreButton';
import food5 from '../resource/images/food5.jpg';

const FourthPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c5c5c5;
  height: 100vh;
  padding: 90px 30px 70px 30px;
  position: relative;

  .fourth_page__article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    padding: 30px;
    font-size: 1.6rem;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    right: 110px;
    bottom: 50px;
    animation: bounceInUp;
    animation-duration: 2.5s;

    .fourth_page_p {
      font-size: 1rem;
      margin: 3vh 0 8vh 0;
      word-spacing: 3px;
    }
  }
  .fourth_page__image {
    width: 65vw;
    height: 80vh;
    z-index: 1;
    position: absolute;
    top: 60px;
    left: 200px;
    animation: bounceInLeft;
    animation-duration: 2s;
  }
  .fourth_page__red-box {
    position: absolute;
    right: 0;
    background-color: #ff0000;
    width: 90vw;
    height: 60vh;
    animation: bounceInRight;
    animation-duration: 2s;
  }
`;

function FourthPage() {
  return (
    <FourthPageStyle>
      <article className="fourth_page__article">
        <h3 className="fourth_page_h3">Breakfast</h3>
        <p className="fourth_page_p">
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
      <img className="fourth_page__image" src={food5} alt="image5" />
      <div className="fourth_page__red-round"></div>
      <div className="fourth_page__red-box"></div>
    </FourthPageStyle>
  );
}

export default FourthPage;
