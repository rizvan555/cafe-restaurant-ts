import React from 'react';
import styled from 'styled-components';
import LearnMoreButton from '../components/shared/secondPageShared/learnMoreButton';

const SecondPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c5c5c5;
  padding: 10px;

  .second_page__article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 22vw;
    padding: 10px 30px 30px 30px;
    font-size: 1.3rem;
    background-color: #fff;

    p {
      font-size: 1rem;
      margin-bottom: 40px;
      word-spacing: 3px;
    }
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
      <image className="second_page__image">
        <img src="" alt="" />
      </image>
      <div className="second_page__red-round"></div>
    </SecondPageStyle>
  );
}

export default SecondPage;
