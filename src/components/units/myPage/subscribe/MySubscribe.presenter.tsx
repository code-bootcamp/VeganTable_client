import NormalButton from "../../../commons/buttons/normal";
import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import Slider02 from "../../../commons/sliders/02";
import * as My from "./MySubscribe.styles";
export default function MySubscribeUI() {
  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />
        <My.SubscribeWrapper>
          <My.TitleWrapper>
            <My.Title>정기 구독 관리</My.Title>
            <My.Unsubscribe>해지하기</My.Unsubscribe>
          </My.TitleWrapper>

          <My.MySubscribe>
            <My.UserGrade>회원</My.UserGrade>
            <My.UserSubs>베이직 구독중</My.UserSubs>
            <p>다음 결제 예정일은 2022.05.19 입니다.</p>
          </My.MySubscribe>

          <My.PayHistory>
            <My.Title>결제 내역</My.Title>
            <Slider02 />
          </My.PayHistory>

          <My.Pay>
            <My.Title>결제 수단</My.Title>
            <My.Contents>
              <My.FlexColumn>
                <p className="means">등록된 결제수단</p>
                <span>
                  현대카드
                  <span className="cardNumber">1010-****-****-1010</span>
                </span>
              </My.FlexColumn>
              <NormalButton title={"카드정보 등록 / 변경"} />
            </My.Contents>
          </My.Pay>

          <My.Pass>
            <My.Title>이용권 변경</My.Title>
            <My.FlexRow>
              <My.Basic>
                <h1>베이직</h1>
                <span className="month">
                  월 <span className="price">29,900</span>원
                </span>
                <p>주 1회 밀키트 정기 배송</p>
                <NormalButton title={"구독하기"} color={"green"} />
              </My.Basic>
              <My.Premium>
                <h1>프리미엄</h1>
                <span className="month">
                  월 <span className="price">39,900</span>원
                </span>
                <p>주 2회 밀키트 정기 배송</p>
                <NormalButton title={"구독하기"} color={"green"} />
              </My.Premium>
            </My.FlexRow>
          </My.Pass>
        </My.SubscribeWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
