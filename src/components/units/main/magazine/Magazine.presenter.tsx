import Button01 from "../../../commons/buttons/01";
import * as Magazine from "./Magazine.styles";

export default function MagazineUI() {
  return (
    <Magazine.Container>
      <Magazine.Wrapper>
        <Magazine.MagazineHead>
          <Magazine.HeadText>
            <span>MAGAZINE</span>
            <h1>테마별로 골라보는 구독 식단</h1>
          </Magazine.HeadText>
          <Button01 />
        </Magazine.MagazineHead>
        <Magazine.Contents>
          <Magazine.Item>
            <img src="/img/magazine/img-magazine-01.png" alt="" />

            <div>
              <span>인물 인터뷰</span>
              <p>
                '나의 비거니즘 만화'의
                <br />
                보선 작가를 만나다
              </p>
            </div>
          </Magazine.Item>
          <Magazine.Item>
            <img src="/img/magazine/img-magazine-02.png" alt="" />

            <div>
              <span>정보 공유</span>
              <p>2022 비건 페스타</p>
            </div>
          </Magazine.Item>
          <Magazine.Item>
            <img src="/img/magazine/img-magazine-03.png" alt="" />

            <div>
              <span>건강 뉴스</span>
              <p>채식주의에 대한 오해와 진실</p>
            </div>
          </Magazine.Item>
          <Magazine.Item>
            <img src="/img/magazine/img-magazine-03.png" alt="" />

            <div>
              <span>뉴스</span>
              <p>채린이 식단</p>
            </div>
          </Magazine.Item>
        </Magazine.Contents>
      </Magazine.Wrapper>
    </Magazine.Container>
  );
}
