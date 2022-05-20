import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding-top: 1.5rem;
  & div {
    outline: none;
  }
`;

export default function Slider02() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
