import "animate.css";
import DaumPostcode from "react-daum-postcode";
import NormalButton from "../../../commons/buttons/normal";
import SubmitButton from "../../../commons/buttons/submit";
import CheckBox01 from "../../../commons/checkboxes/01";
import UserInput from "../../../commons/inputs";
import Navigation02 from "../../../commons/navigation/02";
import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import * as My from "./MyPageEdit.styles";

export default function MyPageEditUI(props) {
  const isActive = true;

  return (
    <>
      <My.Container>
        {props.isOpen && (
          <My.Modal onClick={props.onClickClose}>
            <div className="modal-section">
              <div className="modal-content">
                <DaumPostcode onComplete={props.onCompleteAddressSearch} />
              </div>
            </div>
          </My.Modal>
        )}
        <My.Wrapper>
          <MyPageSidebar />

          <form onSubmit={props.handleSubmit(props.onClickUpdateUser)}>
            <My.EditWrapper>
              <My.TitleWrapper>
                <My.Title>회원정보수정</My.Title>
                <My.SignOut>회원탈퇴</My.SignOut>
              </My.TitleWrapper>

              <My.ProfileWrapper>
                <My.FlexRow>
                  <My.ImageWrapper>
                    <My.Image src="/img/myPage/icon-myProfile.svg" />
                    <My.ImageButton>프로필 사진 변경</My.ImageButton>
                  </My.ImageWrapper>

                  <My.FlexColumn>
                    <My.InputWrapper>
                      <My.Label>닉네임</My.Label>
                      <UserInput
                        placeholder={"닉네임"}
                        inputSize={"medium"}
                        defaultValue={props.userData?.fetchUser.nickname}
                        register={{ ...props.register("nickname") }}
                      />
                    </My.InputWrapper>

                    <My.VeganTypeWrapper>
                      <My.Label>채식타입</My.Label>
                      <Navigation02
                        setUserInputs={props.setUserInputs}
                        userInputs={props.userInputs}
                      />
                    </My.VeganTypeWrapper>
                  </My.FlexColumn>
                </My.FlexRow>
              </My.ProfileWrapper>
              <My.ProfileWrapper>
                <My.InputWrapper>
                  <My.Label>이름</My.Label>
                  <UserInput
                    defaultValue={props.userData?.fetchUser.name}
                    disabled={true}
                  />
                </My.InputWrapper>
                {/* <My.InputWrapper>
                <My.Label>생년월일/성별</My.Label>
                <UserInput placeholder={"생년월일"} inputSize={"medium"} />
                <My.GenderSelect defaultValue={"none"}>
                  <option value={"none"} disabled={true}>
                    성별
                  </option>
                  <option value={"male"}>남자</option>
                  <option value={"female"}>여자 </option>
                </My.GenderSelect>
              </My.InputWrapper> */}
                <My.InputWrapper>
                  <My.Label>이메일</My.Label>
                  <UserInput
                    defaultValue={props.userData?.fetchUser.email}
                    disabled={true}
                  />
                </My.InputWrapper>
                {/* <My.InputWrapper>
                <My.Label />
                <CheckBox01 />
                <span>정보성 메일 수신에 동의합니다.</span>
              </My.InputWrapper> */}
                {/* <My.InputWrapper>
                  <My.Label>새 비밀번호</My.Label>
                  <UserInput
                    type={"password"}
                    placeholder={"비밀번호"}
                    register={{ ...props.register("password") }}
                  />
                </My.InputWrapper>
                <My.InputWrapper>
                  <My.Label>새 비밀번호 확인</My.Label>
                  <UserInput
                    type={"password"}
                    placeholder={"비밀번호 확인"}
                    register={{ ...props.register("passwordCheck") }}
                  />
                </My.InputWrapper> */}
                <My.InputWrapper>
                  <My.Label>휴대폰 번호</My.Label>
                  <UserInput
                    type="number"
                    placeholder={"-제외"}
                    defaultValue={props.userData?.fetchUser.phone}
                    onChange={props.onChangeUserInputs("phone")}
                  />
                  <NormalButton
                    type="button"
                    title={"인증받기"}
                    onClick={props.onClickGetToken}
                    color={props.userInputs?.phone ? "green" : ""}
                  />
                </My.InputWrapper>
                <My.InputWrapper>
                  <My.Label />
                  <UserInput placeholder={"인증번호"} />
                  <NormalButton
                    type="button"
                    title={"확인"}
                    onClick={props.onClickCheckValid}
                  />
                </My.InputWrapper>

                <My.InputWrapper>
                  <My.Label>주소</My.Label>
                  <UserInput
                    placeholder={"주소"}
                    defaultValue={
                      props.address || props.userData?.fetchUser.address
                    }
                    readOnly
                  />
                  <NormalButton
                    type="button"
                    title={"찾기"}
                    onClick={props.onClickAddressSearch}
                    color={"green"}
                  />
                </My.InputWrapper>
                <My.InputWrapper>
                  <My.Label />
                  <UserInput
                    placeholder={"상세주소"}
                    defaultValue={props.userData?.fetchUser.addressDetail}
                    register={{ ...props.register("addressDetail") }}
                  />
                </My.InputWrapper>
              </My.ProfileWrapper>
              <My.ProfileWrapper>
                <My.ExpertTitleWrapper>
                  <My.Title>전문가 등록하기</My.Title>
                  <p>
                    전문가 등록하기를 원하시면 관련 자격증 또는 전문가 인증이
                    가능한 링크를 입력하세요.
                  </p>
                </My.ExpertTitleWrapper>
                <My.InputWrapper>
                  <My.Label>자격증 등록</My.Label>
                  <UserInput placeholder={"이미지 업로드"} />
                  <NormalButton type="button" title={"등록하기"} />
                </My.InputWrapper>
                <My.InputWrapper>
                  <My.Label>인증 링크 등록</My.Label>
                  <UserInput placeholder={"URL"} />
                  <NormalButton type="button" title={"등록하기"} />
                </My.InputWrapper>
              </My.ProfileWrapper>
              <My.ButtonWrapper>
                <SubmitButton title={"회원정보수정"} isActive={isActive} />
              </My.ButtonWrapper>
            </My.EditWrapper>
          </form>
        </My.Wrapper>
      </My.Container>
    </>
  );
}
