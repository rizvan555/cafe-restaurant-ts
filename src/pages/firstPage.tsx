import React from 'react';
import styled from 'styled-components';
import FoodImageContainer from '../components/shared/firstPageShared/foodImageContainer';
import MenuButton from '../components/shared/firstPageShared/menu-button';
import chef1 from '../resource/images/chef1.jpg';
import LongMenu from '../components/shared/firstPageShared/longMenu';
import ChefLogo from '../resource/images/chef-logo.png';

const FirstPageStyle = styled.div``;
const Header = styled.header`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  .logo {
    width: 5vw;
    color: #000;
  }
`;
const Main1 = styled.main`
  .first_page__section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px 20px;
    gap: 40px;
  }
  .first_page__article {
    width: 50%;
    font-size: 1rem;
  }
  .first_page__article h1 {
    font-size: 3rem;
  }
  .first_page__article p {
    margin-bottom: 30px;
  }
  .center-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
  .first_page__chef-image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35vw;
    height: 25vh;
    background-color: #ff0000;

    .first-page__img {
      width: 25vw;
      height: 45vh;
      border-radius: 50%;
    }
  }
`;
function FirstPage() {
  return (
    <FirstPageStyle>
      <Header>
        <img src={ChefLogo} className="logo" />
        <LongMenu />
      </Header>
      <Main1>
        <section className="first_page__section">
          <div className="center-box">
            <article className="first_page__article">
              <h1>Welcome to our restaurant's website!</h1>
              <p>
                We are thrilled to share our passion for food and hospitality
                with you. Our menu is filled with delicious dishes that are
                crafted with care using only the freshest ingredients. At our
                restaurant, we believe that every meal should be a special
                occasion. Whether you're joining us for a quick lunch or a
                romantic dinner, our friendly staff will make sure that you have
                an unforgettable dining experience. Thank you for visiting our
                website. We look forward to welcoming you to our restaurant and
                sharing our love for food with you.
              </p>
              <MenuButton />
            </article>
            <div className="first_page__chef-image-box">
              <img className="first-page__img" src={chef1} alt="image1" />
            </div>
          </div>
          <FoodImageContainer />
        </section>
      </Main1>
    </FirstPageStyle>
  );
}

export default FirstPage;
