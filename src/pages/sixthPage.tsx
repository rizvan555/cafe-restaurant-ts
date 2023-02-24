import React from 'react';
import styled from 'styled-components';
import AddToCardButton from '../components/shared/sixthPageShared/addToCardButton';
import burger2 from '../resource/images/burger2.jpg';

const SixthPageStyle = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 50px 20px;

  .sixth-page__header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60vw;
    margin: 0 auto;

    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
      text-align: center;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
  }
  div {
    display: flex;
    width: 45vw;
  }
  img {
    width: 23vw;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    background-color: #060606;
    color: #fff;
    padding: 50px 20px;

    h2 {
      font-size: 1.8rem;
    }
    .price {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }
  }
`;

function SixthPage() {
  const cardContain = [
    {
      title: 'Double Burger',
      price: '€8.50',
      image: {
        src: burger2,
        alt: 'burger',
      },
    },
    {
      title: 'Farm House',
      price: '€7.50',
      image: {
        src: burger2,
        alt: 'burger',
      },
    },
    {
      title: 'Double Burger',
      price: '€8.50',
      image: {
        src: burger2,
        alt: 'burger',
      },
    },
    {
      title: 'Special Offer',
      price: '€15.00',
      image: {
        src: burger2,
        alt: 'burger',
      },
    },
    {
      title: 'Black Burger',
      price: '€11.00',
      image: {
        src: burger2,
        alt: 'burger',
      },
    },
    {
      title: 'King Burger',
      price: '€11.00',
      image: {
        src: burger2,
        alt: 'burger',
      },
    },
  ];
  return (
    <SixthPageStyle>
      <header className="sixth-page__header">
        <h1>Burger Menu</h1>
        <p>
          You're gonna need two hands to hold our toasted buns. Our fresh, juicy
          burgers are served up medium-well with a side of fries and a whole lot
          of flavor.
        </p>
      </header>
      <ul>
        {cardContain.map((contain) => {
          return (
            <div key={contain.title}>
              <li>
                <h2>{contain.title}</h2>
                <span className="price">{contain.price}</span>
                <AddToCardButton />
              </li>
              <img src={contain.image.src} alt={contain.image.alt} />
            </div>
          );
        })}
      </ul>
    </SixthPageStyle>
  );
}

export default SixthPage;
