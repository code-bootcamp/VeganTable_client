import Slider from "react-slick";
import * as Banner from "./Banner.styles";

export default function LayoutBannerUI(props) {
  return (
    <Banner.Container>
      <Banner.Wrapper>
        <Slider {...props.settings}>
          {[1, 2, 3].map((el, index) => (
            <Banner.SliderContainer key={el} num={el}>
              <Banner.SliderWrapper>
                <Banner.TextGroup>
                  <div>
                    <Banner.TextTop
                      className={index === props.slideIndex ? "isActive" : ""}
                    >
                      {(el === 1 && (
                        <img src="/img/banner/img-banner01-logo.svg" />
                      )) ||
                        (el === 2 && (
                          <img src="/img/banner/img-banner01-logo.svg" />
                        )) ||
                        (el === 3 && (
                          <img src="/img/banner/img-banner01-logo.svg" />
                        ))}

                      <span>
                        {(el === 1 && "채식한상이 함께 합니다1") ||
                          (el === 2 && "채식한상이 함께 합니다2") ||
                          (el === 3 && "채식한상이 함께 합니다3")}
                      </span>
                    </Banner.TextTop>
                    <Banner.TextMiddle
                      className={index === props.slideIndex ? "isActive" : ""}
                    >
                      {(el === 1 && (
                        <>
                          나에게 맞는 <span>채식 레시피</span>로1
                        </>
                      )) ||
                        (el === 2 && (
                          <>
                            나에게 맞는 <span>채식 레시피</span>로2
                          </>
                        )) ||
                        (el === 3 && (
                          <>
                            나에게 맞는 <span>채식 레시피</span>로3
                          </>
                        ))}
                    </Banner.TextMiddle>
                    <Banner.TextMiddle
                      className={index === props.slideIndex ? "isActive" : ""}
                    >
                      {(el === 1 && "맛있는 건강 밥상1") ||
                        (el === 2 && "맛있는 건강 밥상2") ||
                        (el === 3 && "맛있는 건강 밥상3")}
                    </Banner.TextMiddle>
                  </div>
                </Banner.TextGroup>
                <Banner.ImageGroup
                  num={el}
                  className={index === props.slideIndex ? "isActive" : ""}
                >
                  <div className={index === props.slideIndex ? "isActive" : ""}>
                    <img src="/img/banner/img-banner-fruit.png" />
                  </div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Banner.ImageGroup>
              </Banner.SliderWrapper>
            </Banner.SliderContainer>
          ))}
        </Slider>
      </Banner.Wrapper>
    </Banner.Container>
  );
}
