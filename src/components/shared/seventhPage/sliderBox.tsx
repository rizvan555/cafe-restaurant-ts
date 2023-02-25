import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHamburger } from 'react-icons/gi';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiKebabSpit } from 'react-icons/gi';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const StyledCarousel = styled(Carousel)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 550px;
  height: 50vh;
  background-color: #fff;
  padding: 30px 20px;
`;
const StyledCarouselItems = styled(Carousel.Item)`
  text-align: center;
  padding: 0 60px;
  .title_food-slider {
    margin: 4vh;
    font-size: 2rem;
  }
  .contain-foods-slider {
    word-break: keep-all;
    font-size: 1rem;
  }
`;

function DarkVariantExample() {
  const CustomPrevIcon = <FiChevronLeft size={24} style={{ color: '#000' }} />;
  const CustomNextIcon = <FiChevronRight size={24} style={{ color: '#000' }} />;
  return (
    <StyledCarousel
      variant="dark"
      nextIcon={CustomNextIcon}
      prevIcon={CustomPrevIcon}
    >
      <StyledCarouselItems>
        <GiHamburger size={50} />
        <h3 className="title_food-slider">Burger</h3>
        <p className="contain-foods-slider">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          dicta doloremque ipsam perspiciatis accusamus blanditiis cumque libero
          laudantium at debitis!
        </p>
      </StyledCarouselItems>
      <StyledCarouselItems>
        <FaPizzaSlice size={50} />
        <h3 className="title_food-slider">Piza & Rolls</h3>
        <p className="contain-foods-slider">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          dicta doloremque ipsam perspiciatis accusamus blanditiis cumque libero
          laudantium at debitis!
        </p>
      </StyledCarouselItems>
      <StyledCarouselItems>
        <GiKebabSpit size={50} />
        <h3 className="title_food-slider">Kebab</h3>
        <p className="contain-foods-slider">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          dicta doloremque ipsam perspiciatis accusamus blanditiis cumque libero
          laudantium at debitis!
        </p>
      </StyledCarouselItems>
    </StyledCarousel>
  );
}

export default DarkVariantExample;
