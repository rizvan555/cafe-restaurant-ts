import React from 'react';
import styled from 'styled-components';
import backgroundMexican from '../resource/images/backgroundMexican.jpg';

const ThirdPageStyle = styled.div`
  background-image: url(${backgroundMexican});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 300px 30px 50px 30px;
  gap: 3vw;
  font-family: Arial, Helvetica, sans-serif;

  section {
    @font-face {
      font-family: 'Kalam';
      src: url('../resource/fonts/kalam/Kalam-Regular.ttf');
    }
    width: 25vw;
    color: #fff;
    padding: 20px 30px 40px 30px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;

    .head {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }

    h1 {
      font-family: 'Kalam', cursive;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.5rem;
      border-radius: 50%;
      background-color: red;
      padding: 20px;
      width: 40px;
      height: 40px;
      animation: bounceInLeft;
      animation-duration: 2s;
    }
    h2 {
      font-size: 1.8rem;
      font-weight: 200;
      animation: bounceInRight;
      animation-duration: 2s;
      letter-spacing: 2px;
    }
    p {
      color: #dddddd;
      opacity: 0.8;
      font-size: 1.2rem;
      font-style: italic;
      margin-bottom: 40px;
    }
    a {
      font-size: 1.4rem;
      color: #fff;
    }
  }
`;

function ThirdPage() {
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
              <h1>{menu.number}</h1>
              <h2>{menu.title}</h2>
            </div>
            <p>{menu.text}</p>
            <a href="#">{menu.link}</a>
          </section>
        );
      })}
    </ThirdPageStyle>
  );
}

export default ThirdPage;
