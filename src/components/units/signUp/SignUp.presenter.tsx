// 회원가입 전체
import { useEffect, useState } from "react";
import SubmitButton from "../../commons/buttons/submit";
import UserInput from "../../commons/inputs";
import * as SignUp from "./SignUp.styles";
import SignUpComplete from "./signUpComplete/SignUpComplete.container";
import SignUpPolicy from "./signUpPolicy/SignUpPolicy.container";
import { CheckboxProps, withStyles } from "@material-ui/core";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Checkbox from "@mui/material/Checkbox";

const PolicyCheckbox = withStyles({
  root: {
    color: "#c4c4c4",
  },
  checked: { color: "#0fbaa3" },
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function SignUpUI() {
  const [checked, setChecked] = useState(true);

  const handleCheck = (e: any) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    setChecked(false);
  }, []);

  const [agreePolicy, setAgreePolicy] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const isActive = checked;

  const onClickSubmit = () => {
    setIsSubmit((prev) => !prev);
  };

  return (
    <SignUp.Container>
      {!agreePolicy && <SignUpPolicy setAgreePolicy={setAgreePolicy} />}
      {agreePolicy && !isSubmit && (
        <SignUp.Wrapper>
          <SignUp.HeaderWrapper>
            <SignUp.HeaderTitle>회원가입</SignUp.HeaderTitle>
          </SignUp.HeaderWrapper>
          <SignUp.BodyWrapper>
            <SignUp.BodyTitleWrapper>
              <SignUp.BodyTitle>
                <SignUp.SignUpTitle>01 약관동의</SignUp.SignUpTitle>
                <SignUp.SignUpTitleOn>02 정보입력</SignUp.SignUpTitleOn>
                <SignUp.SignUpTitle>03 가입완료</SignUp.SignUpTitle>
              </SignUp.BodyTitle>
              <SignUp.SignUpTitleUnderBarWrapper>
                <SignUp.SignUpTitleUnderBar />
                <SignUp.SignUpTitleUnderBarOn />
                <SignUp.SignUpTitleUnderBar />
              </SignUp.SignUpTitleUnderBarWrapper>
            </SignUp.BodyTitleWrapper>
            <SignUp.InputContentsWrapper>
              <SignUp.InputContents>
                <SignUp.InputTitleWrapper>이름</SignUp.InputTitleWrapper>
                <SignUp.InputWrapper>
                  <UserInput placeholder={"이름"} />
                </SignUp.InputWrapper>
              </SignUp.InputContents>
              <SignUp.InputContents>
                <SignUp.InputTitleWrapper>
                  생년월일 / 성별
                </SignUp.InputTitleWrapper>
                <SignUp.InputWrapper>
                  <UserInput
                    placeholder={"생년월일 6글자"}
                    inputSize={"medium"}
                  />
                  <SignUp.SelectWrapper>
                    <SignUp.SexSelect>
                      <option selected={true} disabled={true}>
                        성별
                      </option>
                      <option value={"male"}>남자</option>
                      <option value={"female"}>여자 </option>
                    </SignUp.SexSelect>
                  </SignUp.SelectWrapper>
                </SignUp.InputWrapper>
              </SignUp.InputContents>
              <SignUp.InputContents>
                <SignUp.InputTitleWrapper>이메일</SignUp.InputTitleWrapper>
                <SignUp.InputWrapper>
                  <UserInput placeholder={"이메일"} />
                </SignUp.InputWrapper>
              </SignUp.InputContents>
              <SignUp.InputContents>
                <SignUp.InputTitleWrapper>비밀번호</SignUp.InputTitleWrapper>
                <SignUp.InputWrapper>
                  <UserInput placeholder={"비밀번호"} />
                </SignUp.InputWrapper>
              </SignUp.InputContents>
              <SignUp.InputContents>
                <SignUp.InputTitleWrapper>
                  비밀번호 확인
                </SignUp.InputTitleWrapper>
                <SignUp.InputWrapper>
                  <UserInput placeholder={"비밀번호 확인"} />
                </SignUp.InputWrapper>
              </SignUp.InputContents>
              <SignUp.InputContents>
                <SignUp.InputTitleWrapper>휴대폰번호</SignUp.InputTitleWrapper>
                <SignUp.InputWrapper>
                  <UserInput placeholder={"-제외"} inputSize={"medium"} />
                  <SignUp.PhoneNumberCertify>
                    인증받기
                  </SignUp.PhoneNumberCertify>
                </SignUp.InputWrapper>
              </SignUp.InputContents>
              <SignUp.InputContents>
                <SignUp.InputTitleWrapper></SignUp.InputTitleWrapper>
                <SignUp.InputWrapper>
                  <UserInput placeholder={"인증번호"} inputSize={"medium"} />
                  <SignUp.PhoneNumberCertify>확인</SignUp.PhoneNumberCertify>
                </SignUp.InputWrapper>
              </SignUp.InputContents>
            </SignUp.InputContentsWrapper>
            <SignUp.CheckboxWrapper>
              <PolicyCheckbox
                id="checkbox"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                checked={checked}
                onChange={handleCheck}
              />
              <SignUp.CheckboxLabel htmlFor="checkbox">
                정보성 메일 수신에 동의합니다.
              </SignUp.CheckboxLabel>
            </SignUp.CheckboxWrapper>
          </SignUp.BodyWrapper>
          <SubmitButton
            title={"가입하기"}
            isActive={isActive}
            onClick={onClickSubmit}
          />
        </SignUp.Wrapper>
      )}
      {isSubmit && <SignUpComplete />}
    </SignUp.Container>
  );
}
