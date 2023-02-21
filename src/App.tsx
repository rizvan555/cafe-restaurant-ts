import React from 'react';
import LongMenu from './components/longMenu';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  h1 {
    color: #000;
    background-color: red;
  }
`;

function App() {
  return (
    <div className="App">
      <Header>
        <h1 className="logo">Logo</h1>
        <LongMenu />
      </Header>
      <section>
        <h2>Hallo</h2>
      </section>
    </div>
  );
}

export default App;
