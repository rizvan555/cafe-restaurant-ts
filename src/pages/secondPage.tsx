import React, { useEffect } from 'react';
import styled from 'styled-components';
import LearnMoreButton from '../components/shared/secondPageShared/learnMoreButton';
import food5 from '../resource/images/food5.jpg';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecondPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c5c5c5;
  height: 100vh;
  padding: 15vh;
  position: relative;

  .second_page__article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 26vw;
    padding: 20px 25px 30px 25px;
    font-size: 1.6rem;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    left: 240px;
    bottom: 50px;
    animation: backInLeft;
    animation-duration: 2s;

    .second_page_p {
      font-size: 0.9rem;
      margin-bottom: 40px;
      word-spacing: 3px;
      word-break: keep-all;
    }
  }
  .second_page__image {
    width: 35vw;
    height: 70vh;
    z-index: 1;
    position: absolute;
    right: 350px;
    top: 130px;
    animation: backInUp;
    animation-duration: 2s;
  }

  .second_page__red-round {
    background-color: #ff0000;
    width: 200px;
    height: 200px;
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
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <SecondPageStyle>
      <article className="second_page__article" data-aos="fade-left">
        <h3 className="second_page_h3">Breakfast</h3>
        <p className="second_page_p">
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
      <img
        className="second_page__image"
        src={food5}
        alt="image5"
        data-aos="fade-up"
      />
      <div className="second_page__red-round" data-aos="fade-right"></div>
    </SecondPageStyle>
  );
}

export default SecondPage;
