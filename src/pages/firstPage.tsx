import React, { useEffect } from 'react';
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
  padding: 10px 60px 10px 30px;
  .header__left-box {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .logo {
    width: 5vw;
    color: #000;
    z-index: 4;
  }
  .logo1 {
    position: fixed;
    width: 5vw;
    color: #000;
    z-index: 4;
  }
  .restaurant {
    letter-spacing: 2px;
    color: #ff0000;
    font-style: italic;
  }

  @media only screen and (max-width: 667px) {
    padding: 10px 60px;

    .header__left-box {
      gap: 10px;
    }
    .logo {
      width: 5vw;
    }
    .restaurant {
      font-size: 1.2rem;
    }
  }
`;
const Main1 = styled.main`
  .first_page__section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 80px 30px;
    gap: 90px;
  }
  .first_page__article {
    width: 60%;
    font-size: 1rem;
  }
  .first_page__article h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 30px;
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
      width: 30vw;
      height: 53vh;
      border-radius: 50%;
      position: relative;
      animation: bounceInDown;
      animation-duration: 2s;
    }
  }
  @media only screen and (max-width: 667px) {
    .first_page__section {
      padding: 30px 10px;
    }
    .first_page__article {
      width: 40%;
    }
    .first_page__article h1 {
      font-size: 1rem;
      margin-bottom: 20px;
    }
    .first_page__article p {
      margin-bottom: 30px;
      font-size: 0.6rem;
    }
    .center-box {
      margin-bottom: -20px;
    }
    .first_page__chef-image-box {
      width: 40vw;
      height: 30vh;
      background-color: #ff0000;

      .first-page__img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        position: relative;
      }
    }
  }
`;

function FirstPage() {
  return (
    <FirstPageStyle>
      <Header>
        <div className="header__left-box">
          <img src={ChefLogo} className="logo" />
          <img src={ChefLogo} className="logo1" />
          <h1 className="restaurant">Restaurant</h1>
        </div>
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
