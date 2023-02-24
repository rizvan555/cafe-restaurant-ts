import React from 'react';
import styled from 'styled-components';
import FifthPage from './pages/fifthPage';
import FirstPage from './pages/firstPage';
import FourthPage from './pages/fourthPage';
import SecondPage from './pages/secondPage';
import SeventhPage from './pages/seventhPage';
import SixthPage from './pages/sixthPage';
import ThirdPage from './pages/thirdPage';

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
    </AppContainerStyle>
  );
}

export default App;
