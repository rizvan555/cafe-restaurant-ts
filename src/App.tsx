import React from 'react';
import styled from 'styled-components';
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
    </div>
  );
}

export default App;
