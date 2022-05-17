import OutlineSubmitButton from "../../../commons/buttons/outlineSubmit";
import SubmitButton from "../../../commons/buttons/submit";
import UserInput from "../../../commons/inputs";
import MyPageSidebar from "../sidebar/MyPageSidebar.container";
import * as My from "./MyPageEdit.styles";

export default function MyPageEditUI() {
  const isActive = true;

  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />
        <My.EditWrapper>
          <My.TitleWrapper>
            <My.Title>회원정보 수정</My.Title>
          </My.TitleWrapper>
          <My.InfoWrapper>
            <My.InputWrapper>
              <My.Label>이름</My.Label>
              <UserInput placeholder={"홍예원"} disabled={true} />
            </My.InputWrapper>
            <My.InputWrapper>
              <My.Label>생년월일/성별</My.Label>
              <UserInput placeholder={"생년월일"} inputSize={"medium"} />
              <My.SexSelect>
                <option selected={true} disabled={true}>
                  성별
                </option>
                <option value={"male"}>남자</option>
                <option value={"female"}>여자 </option>
              </My.SexSelect>
            </My.InputWrapper>
            <My.InputWrapper>
              <My.Label>이메일</My.Label>
              <UserInput placeholder={"aa@aa.com"} disabled={true} />
            </My.InputWrapper>
            <My.InputWrapper>
              <My.Label>비밀번호</My.Label>
              <UserInput placeholder={"비밀번호"} />
            </My.InputWrapper>
            <My.InputWrapper>
              <My.Label>비밀번호 확인</My.Label>
              <UserInput placeholder={"비밀번호 확인"} />
            </My.InputWrapper>
            <My.InputWrapper>
              <My.Label>휴대폰 번호</My.Label>
              <UserInput placeholder={"010-0000-0000"} />
              <My.Button>인증하기</My.Button>
            </My.InputWrapper>
            <My.InputWrapper>
              <My.Label />
              <UserInput placeholder={"인증번호"} />
              <My.Button>확인</My.Button>
            </My.InputWrapper>
            <My.InputWrapper>
              <My.Label />○<span>정보성 메일 수신에 동의합니다.</span>
            </My.InputWrapper>
          </My.InfoWrapper>

          <My.InfoWrapper>
            <My.ExpertTitleWrapper>
              <My.Title>전문가 등록하기</My.Title>
              <p>
                전문가 등록하기를 원하시면 관련 자격증 또는 전문가 인증이 가능한
                링크를 입력하세요.
              </p>
            </My.ExpertTitleWrapper>
            <My.InputWrapper>
              <My.Label>자격증 등록</My.Label>
              <UserInput placeholder={"이미지 업로드"} />
              <My.Button>등록하기</My.Button>
            </My.InputWrapper>
            <My.InputWrapper>
              <My.Label>인증 링크 등록</My.Label>
              <UserInput placeholder={"URL"} />
              <My.Button>등록하기</My.Button>
            </My.InputWrapper>
          </My.InfoWrapper>
          <My.ButtonWrapper>
            <OutlineSubmitButton title={"탈퇴하기"} isActive={isActive} />
            <SubmitButton title={"회원정보수정"} isActive={isActive} />
          </My.ButtonWrapper>
        </My.EditWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
