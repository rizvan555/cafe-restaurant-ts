import React from 'react';
import styled from 'styled-components';
import blackBurger from '../resource/images/blackBurger.jpg';
import { FaFacebookF, FaGooglePlusG, FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

const NinthPageStyled = styled.div`
  display: flex;
  background-color: #000;
  height: 100vh;
  color: #fff;
  padding: 0 40px;

  .image-container {
    position: relative;
  }

  .image-container__img {
    width: 35vw;
    height: 94vh;
    border: 10px solid transparent;
    background-clip: padding-box;
    background-image: linear-gradient(to right, red 50%, black 50%);
    z-index: 1;
    position: absolute;
    bottom: 3vh;
  }
  .image-container__red-box {
    width: 20vw;
    height: 100vh;
    background-color: #ff0000;
    position: absolute;
    left: 17vw;
    bottom: 1px;
    z-index: 0;
  }
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin: 0 20px 0 auto;
    padding: 80px 20px;
    text-align: center;
  }
  .head-title {
    margin-bottom: 20vh;
  }
  .head-title h2 {
    font-size: 2.2rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .head-title p {
    font-size: 1rem;
    margin-bottom: 40px;
  }
  .input-container input {
    width: 30vw;
    padding: 12px;
    margin-right: 10px;
  }
  .input-container input::placeholder {
    font-size: 0.9rem;
  }
  .input-container button {
    width: 10vw;
    padding: 10px;
    background-color: #ff0000;
    color: #fff;
    font-weight: bold;
    font-size: 0.7rem;
    letter-spacing: 1px;
  }
  .bottom-container {
    display: flex;
    gap: 20px;
  }
  .location-box__address {
    width: 20vw;
    font-size: 1rem;
  }
  .location-box__h3 {
    margin-bottom: 5vh;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .social-media-box {
    display: flex;
    margin-left: 30px;
  }
  .follow-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 20vw;
    margin-left: 20px;
  }
  .follow-box__h3 {
    margin-bottom: 5vh;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .facebook-box,
  .instagram-box,
  .twitter-box,
  .google-box {
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 30px;
  }
`;

function FooterPage() {
  return (
    <NinthPageStyled>
      <div className="image-container">
        <img
          src={blackBurger}
          alt="blackBurger_image"
          className="image-container__img"
        />
        <div className="image-container__red-box"></div>
      </div>
      <div className="contact-container">
        <div className="head-title">
          <h2>SUBSCRIBE</h2>
          <p>to the newsletters and content update</p>
          <div className="input-container">
            <input
              type="email"
              id="email"
              placeholder="Enter a valid email address"
            />
            <button>SUBMIT</button>
          </div>
        </div>
        <div className="bottom-container">
          <div className="location-box">
            <h3 className="location-box__h3">LOCATION</h3>
            <span className="location-box__address">
              28 Jackson Blvd Ste 1020 <br />
              Chicago IL 60604-2340
            </span>
          </div>
          <div className="follow-box">
            <h3 className="follow-box__h3">FOLLOW US</h3>
            <div className="social-media-box">
              <a href="https://www.facebook.com/" className="facebook-box">
                <FaFacebookF
                  style={{ margin: '0 auto', fontSize: '15px', color: '#000' }}
                />
              </a>
              <a
                className="instagram-box"
                href="https://www.instagram.com/?__coig_restricted=1"
              >
                <FaInstagram
                  style={{ margin: '0 auto', fontSize: '20px', color: '#000' }}
                />
              </a>
              <a href="https://twitter.com/?lang=de" className="twitter-box">
                <FiTwitter
                  style={{ margin: '0 auto', fontSize: '16px', color: '#000' }}
                />
              </a>
              <a href="https://www.google.com/" className="google-box">
                <FaGooglePlusG
                  style={{ margin: '0 auto', fontSize: '18px', color: '#000' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </NinthPageStyled>
  );
}

export default FooterPage;
