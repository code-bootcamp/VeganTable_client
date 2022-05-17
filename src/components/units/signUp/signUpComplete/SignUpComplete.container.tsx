import OutlineSubmitButton from "../../../commons/buttons/outlineSubmit";
import SubmitButton from "../../../commons/buttons/submit";
import * as SignUp from "../SignUp.styles";

export default function SignUpComplete() {
  const isActive = true;
  return (
    <SignUp.Wrapper>
      <SignUp.HeaderWrapper>
        <SignUp.HeaderTitle>회원가입</SignUp.HeaderTitle>
      </SignUp.HeaderWrapper>
      <SignUp.CompleteWrapper>
        <SignUp.FlowerShower src="/img/icon/flowerShower.svg" />
        <SignUp.CheckIcon src="/img/icon/checkIcon.svg" />
        <SignUp.CompleteTitle>회원 가입 완료</SignUp.CompleteTitle>
        <SignUp.Cake src="/img/cake.svg" />
        <SubmitButton title={"나의 채식유형 체크"} isActive={isActive} />
        <OutlineSubmitButton title={"메인으로"} isActive={isActive} />
      </SignUp.CompleteWrapper>
    </SignUp.Wrapper>
  );
}
