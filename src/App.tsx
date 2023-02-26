import React from 'react';
import styled from 'styled-components';
import EighthPage from './pages/eighthPage';
import FifthPage from './pages/fifthPage';
import FirstPage from './pages/firstPage';
import FourthPage from './pages/fourthPage';
import SecondPage from './pages/secondPage';
import SeventhPage from './pages/seventhPage';
import SixthPage from './pages/sixthPage';
import ThirdPage from './pages/thirdPage';
import FooterPage from './pages/footerPage';

const AppContainerStyle = styled.div``;

function App() {
  return (
    <AppContainerStyle>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
      <FooterPage />
    </AppContainerStyle>
  );
}

export default App;
