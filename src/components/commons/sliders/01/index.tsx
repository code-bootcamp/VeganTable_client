import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  .slick-list {
    width: 600px;
  }

  .slick-dots {
    position: relative;

    & > li {
      margin: 0 0.78rem;
      width: 6.06rem;
      height: 6.06rem;
    }

    & > li > a > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }
`;

const SliderItem = styled.div`
  & > img {
    margin: 0 auto;
    height: 559px;
    width: auto;
    object-fit: contain;
    border-radius: 2rem;
  }
`;

export default function Slider01() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function () {
      return (
        <a>
          <img src="/img/bestRecipe/img-recipe-01.png" />
        </a>
      );
    },
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {[1, 2, 3].map((el) => (
          <SliderItem key={uuidv4()}>
            <img src="/img/bestRecipe/img-recipe-01.png" />
          </SliderItem>
        ))}
      </Slider>
    </Wrapper>
  );
}
