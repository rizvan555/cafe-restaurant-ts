import React, { useEffect } from 'react';
import styled from 'styled-components';
import backgroundMexican from '../resource/images/backgroundMexican.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThirdPageStyle = styled.div`
  background-image: url(${backgroundMexican});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 300px 20px 50px 20px;
  gap: 3vw;
  font-family: Arial, Helvetica, sans-serif;

  section {
    @font-face {
      font-family: 'Kalam';
      src: url('../resource/fonts/kalam/Kalam-Regular.ttf');
    }
    width: 29vw;
    color: #fff;
    padding: 20px 30px 40px 30px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;

    .head {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    .third_page_h1 {
      font-family: 'Kalam', cursive;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.5rem;
      border-radius: 50%;
      background-color: red;
      padding: 20px;
      width: 80px;
      height: 80px;
      animation: bounceInLeft;
      animation-duration: 2s;
    }
    .third_page_h2 {
      font-size: 1.8rem;
      font-weight: 200;
      animation: bounceInRight;
      animation-duration: 2s;
      letter-spacing: 2px;
    }
    .third_page_p {
      color: #dddddd;
      opacity: 0.8;
      font-size: 1.2rem;
      font-style: italic;
      margin: 5vh 0 8vh 0;
    }
    a {
      font-size: 1.4rem;
      color: #fff;
    }
  }

  @media only screen and (max-width: 667px) {
    background-image: url(${backgroundMexican});
    background-position: center;
    background-size: cover;
    gap: 3vw;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: -40vh;

    section {
      @font-face {
        font-family: 'Kalam';
        src: url('../resource/fonts/kalam/Kalam-Regular.ttf');
      }
      width: 50vw;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 5px;
      padding: 20px;

      .head {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
      }

      .third_page_h1 {
        font-family: 'Kalam', cursive;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        border-radius: 50%;
        background-color: red;
        padding: 5px;
        width: 50px;
        height: 50px;
      }
      .third_page_h2 {
        font-size: 1.2rem;
        font-weight: 200;
        letter-spacing: 2px;
      }
      .third_page_p {
        color: #dddddd;
        opacity: 0.8;
        font-size: 0.8rem;
        font-style: italic;
        margin: 5vh 0 8vh 0;
      }
      a {
        font-size: 0.8rem;
        color: #fff;
      }
    }
  }
`;

function ThirdPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const menuWindows = [
    {
      number: '01',
      title: 'Fresh Food',
      text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
      link: 'Learn More',
    },
    {
      number: '02',
      title: 'Dinner Meals',
      text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
      link: 'Learn More',
    },
    {
      number: '03',
      title: 'Classic Menu',
      text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
      link: 'Learn More',
    },
    {
      number: '04',
      title: 'Chefs Special',
      text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
      link: 'Learn More',
    },
    {
      number: '05',
      title: 'Pasta & Pizza',
      text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
      link: 'Learn More',
    },
    {
      number: '06',
      title: 'Vegan Dishes',
      text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
      link: 'Learn More',
    },
  ];
  return (
    <ThirdPageStyle>
      {menuWindows.map((menu) => {
        return (
          <section>
            <div className="head">
              <h1 className="third_page_h1" data-aos="fade-left">
                {menu.number}
              </h1>
              <h2 className="third_page_h2" data-aos="fade-right">
                {menu.title}
              </h2>
            </div>
            <p className="third_page_p">{menu.text}</p>
            <a href="#">{menu.link}</a>
          </section>
        );
      })}
    </ThirdPageStyle>
  );
}

export default ThirdPage;
