import React from 'react';
import styled from 'styled-components';
import UncontrolledExample from '../components/shared/seventhPage/sliderBox';
import DarkVariantExample from '../components/shared/seventhPage/sliderBox';
import kebabBackground from '../resource/images/backgroundKebab.jpg';

const SeventhPageStyle = styled.div`
  background-image: url(${kebabBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  padding: 15vh 6vw;
`;
function SeventhPage() {
  return (
    <SeventhPageStyle>
      <UncontrolledExample />
    </SeventhPageStyle>
  );
}

export default SeventhPage;
