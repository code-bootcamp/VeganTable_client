import * as Login from "./Login.styles";

export default function LoginUI() {
  return (
    <Login.Container>
      <Login.Wrapper>
        <Login.HeaderWrapper>
          <Login.HeaderTitle>로그인</Login.HeaderTitle>
        </Login.HeaderWrapper>
        <Login.BodyWrapper>
          <Login.BodyTitle>
            <Login.LoginTitle>회원로그인</Login.LoginTitle>
            <Login.LoginTitleUnderBar />
          </Login.BodyTitle>
          <Login.BodyContents>
            <Login.BodyContentsInput type="text" placeholder="아이디" />
            <Login.BodyContentsInput type="password" placeholder="비밀번호" />
            <Login.BodyContentsLoginButton>
              로그인
            </Login.BodyContentsLoginButton>
            <Login.BodyContentsSignUpButton>
              회원가입
            </Login.BodyContentsSignUpButton>
          </Login.BodyContents>
          <Login.SNSLoginWrapper>
            <Login.SNSIcon src="/img/snsIcon/kakaotalk.svg" />
            <Login.SNSIcon src="/img/snsIcon/naver.png" />
            <Login.SNSIcon src="/img/snsIcon/Facebook.svg" />
          </Login.SNSLoginWrapper>
        </Login.BodyWrapper>
      </Login.Wrapper>
    </Login.Container>
  );
}
