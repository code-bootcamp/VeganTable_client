import * as Subs from "./Subscribe.styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SubscribeUI() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Subs.Container>
      <Subs.Wrapper>
        <Subs.IntroWrapper>
          <Subs.IntroTop1>
            <Subs.TopText1>
              <Subs.Title>채식이 어렵다면</Subs.Title>
              <Subs.SubTitle>
                채식한상 정기 구독으로 시작해 보세요
              </Subs.SubTitle>
            </Subs.TopText1>
            <img src="/img/subscribe/img-intro-01.png" />
          </Subs.IntroTop1>

          <Subs.IntroTop2>
            <img className={"img-01"} src="/img/subscribe/img-intro-02.png" />
            <img className={"img-02"} src="/img/subscribe/img-intro-03.png" />
            <Subs.TopText2>
              <Subs.Title>
                가격은 낮추고
                <br />
                건강은 더한 퀄리티 높은 음식
              </Subs.Title>
              <Subs.Contents>
                다양한 채식 음식을 이곳에서 합리적인 가격에 만나보세요
              </Subs.Contents>
            </Subs.TopText2>
          </Subs.IntroTop2>

          <Subs.IntroTop3>
            <img className={"img-03"} src="/img/subscribe/img-intro-04.png" />
            <img className={"img-04"} src="/img/subscribe/img-intro-05.png" />
            <Subs.TopText3>
              <Subs.Title>
                신선한 재료만을 가지고
                <br /> 균형잡힌 바른 식단
              </Subs.Title>
              <Subs.Contents>
                다양한 채식 음식을 이곳에서 합리적인 가격에 만나보세요
              </Subs.Contents>
            </Subs.TopText3>
          </Subs.IntroTop3>

          <Subs.IntroMiddle>
            <Subs.Title>
              가격은 낮추고 <br />
              건강은 더한 퀄리티 높은 음식
            </Subs.Title>
            <img src="/img/subscribe/img-intro-06.png" />
            <Subs.SubTitle>
              가격은 낮추고 <br />
              건강은 더한 퀄리티 높은 음식
            </Subs.SubTitle>
          </Subs.IntroMiddle>

          <Subs.IntroBottom>
            <img src="/img/subscribe/img-intro-07.png" />
            <Subs.Title>이용방법</Subs.Title>
            <Subs.Delivery>
              <img src="/img/subscribe/img-delivery-01.png" />
              <img src="/img/subscribe/icon-arrow-right.svg" />
              <img src="/img/subscribe/img-delivery-02.png" />
              <img src="/img/subscribe/icon-arrow-right.svg" />
              <img src="/img/subscribe/img-delivery-03.png" />
              <img src="/img/subscribe/icon-arrow-right.svg" />
              <img src="/img/subscribe/img-delivery-04.png" />
            </Subs.Delivery>
          </Subs.IntroBottom>
        </Subs.IntroWrapper>

        <Subs.ReviewWrapper>
          <Subs.Title>
            채식한상
            <br />
            고객들의 솔직리뷰
          </Subs.Title>
          <Subs.Contents>멸치를 넣고 어쩌구</Subs.Contents>
        </Subs.ReviewWrapper>

        <Subs.PassWrapper></Subs.PassWrapper>
      </Subs.Wrapper>
    </Subs.Container>
  );
}
