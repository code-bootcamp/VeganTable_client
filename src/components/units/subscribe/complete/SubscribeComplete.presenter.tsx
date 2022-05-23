import OutlineSubmitButton from "../../../commons/buttons/outlineSubmit";
import * as Subs from "./SubscribeComplete.styles";

export default function SubscribeCompleteUI(props) {
  return (
    <Subs.Container>
      <Subs.Wrapper>
        <Subs.HeaderWrapper>
          <Subs.HeaderCompleteIcon>
            <img src="/img/subscribe/img-complete-01.svg" />
          </Subs.HeaderCompleteIcon>
          <Subs.HeaderCompleteNotice>
            구독이 완료 되었습니다
          </Subs.HeaderCompleteNotice>
        </Subs.HeaderWrapper>
        <Subs.BodyWrapper>
          <Subs.Receipt>
            <Subs.DeliveryMan src="/img/subscribe/img-complete-02.png" />
            <Subs.TextWrapper>
              <Subs.TextHeader>
                <Subs.TextCategory>베이직 (주1회 정기 구독)</Subs.TextCategory>
                <Subs.TextContents>현대카드</Subs.TextContents>
              </Subs.TextHeader>
              <Subs.TextRow>
                <Subs.TextCategory>결제금액</Subs.TextCategory>
                <Subs.TextContents>29,900원</Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>구매일</Subs.TextCategory>
                <Subs.TextContents>2022.05.22 15:21</Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>이용기간</Subs.TextCategory>
                <Subs.TextContents>2022.05.22~2022.06.22</Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>결제예정일</Subs.TextCategory>
                <Subs.TextContents>2022.06.22</Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>채식타입</Subs.TextCategory>
                <Subs.TextContents>비건</Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>주소</Subs.TextCategory>
                <Subs.TextContents>
                  서울 중구 동호로 330 CJ제일제당 센터 (우) 04560
                </Subs.TextContents>
              </Subs.TextRow>
              <Subs.DetailGuide>
                해당 내역에 대한 내용은{" "}
                <b style={{ color: "#848484", fontWeight: "700" }}>
                  정기구독관리
                </b>{" "}
                페이지에서 보다 자세히 확인하실 수 있습니다.
              </Subs.DetailGuide>
              <OutlineSubmitButton
                isActive={true}
                title={"메인으로"}
                onClick={props.onClickMoveToMain}
              />
            </Subs.TextWrapper>
            <Subs.FrontLetter />
            <Subs.LetterLogo src="/img/subscribe/img-complete-05.png" />
          </Subs.Receipt>
          <Subs.BackLetter />
        </Subs.BodyWrapper>
      </Subs.Wrapper>
    </Subs.Container>
  );
}
