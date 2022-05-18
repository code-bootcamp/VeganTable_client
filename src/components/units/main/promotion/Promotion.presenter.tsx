import * as Promotion from "./Promotion.styles";

export default function PromotionUI() {
  return (
    <Promotion.Container>
      <Promotion.Wrapper>
        <Promotion.Contents>
          <Promotion.Text>
            <h1>정기구독 신청</h1>
            <span>채식한상과 늘 함께하세요</span>
          </Promotion.Text>
          <Promotion.ImageWrapper>
            <img src="/img/promotion/icon-promotion-01.svg" alt="" />
          </Promotion.ImageWrapper>
        </Promotion.Contents>
        <Promotion.Contents>
          <Promotion.Text>
            <h1>배달 가능 지역</h1>
            <span>채식한상이 더 가까이 다가갑니다</span>
          </Promotion.Text>
          <Promotion.ImageWrapper>
            <img src="/img/promotion/icon-promotion-02.svg" alt="" />
          </Promotion.ImageWrapper>
        </Promotion.Contents>
      </Promotion.Wrapper>
    </Promotion.Container>
  );
}