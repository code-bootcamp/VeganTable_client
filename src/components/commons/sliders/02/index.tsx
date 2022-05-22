import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 74.5625rem;
  height: 10.5625rem;
  padding-top: 1.5rem;

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & div {
    outline: none;
    cursor: pointer;
  }

  .slick-initialized .slick-slide {
    &:nth-of-type(n + 2) {
      padding-left: 20px;
    }
  }
`;

export default function Slider02() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <img src="/img/myPage/img-subs-03.png" />
        </div>
        <div>
          <img src="/img/myPage/img-subs-02.png" />
        </div>
        <div>
          <img src="/img/myPage/img-subs-01.png" />
        </div>
        <div>
          <img src="/img/myPage/img-subs-03.png" />
        </div>
        <div>
          <img src="/img/myPage/img-subs-02.png" />
        </div>
        <div>
          <img src="/img/myPage/img-subs-01.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
