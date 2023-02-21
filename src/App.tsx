import React from 'react';
import styled from 'styled-components';
import FirstPage from './pages/firstPage';
import SecondPage from './pages/secondPage';

const Main = styled.main`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <FirstPage />
      <SecondPage />
    </div>
  );
}

export default App;
