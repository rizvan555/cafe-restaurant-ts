import React from 'react';
import styled from 'styled-components';
import FifthPage from './pages/fifthPage';
import FirstPage from './pages/firstPage';
import FourthPage from './pages/fourthPage';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';

const Main = styled.main`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </div>
  );
}

export default App;
