import OutlineSubmitButton from "../../commons/buttons/outlineSubmit";
import SubmitButton from "../../commons/buttons/submit";
import * as Login from "./Login.styles";

export default function LoginUI(props) {
  const isActive = true;

  return (
    <Login.Container>
      <Login.Wrapper>
        <Login.HeaderWrapper>
          <Login.HeaderTitle>로그인</Login.HeaderTitle>
        </Login.HeaderWrapper>
        <Login.BodyWrapper>
          <Login.BodyContents>
            <Login.BodyContentsInput type="text" placeholder="아이디" />
            <Login.BodyContentsInput type="password" placeholder="비밀번호" />
            <SubmitButton title={"로그인"} isActive={isActive} />
            <OutlineSubmitButton
              title={"회원가입"}
              isActive={isActive}
              onClick={props.onClickSignUp}
            />
          </Login.BodyContents>
          <Login.SNSLoginWrapper>
            <Login.SNSIcon src="/img/snsIcon/kakaotalk.svg" />
            <Login.SNSIcon src="/img/snsIcon/naver.svg" />
            <Login.SNSIcon src="/img/snsIcon/google.svg" />
          </Login.SNSLoginWrapper>
        </Login.BodyWrapper>
      </Login.Wrapper>
    </Login.Container>
  );
}
