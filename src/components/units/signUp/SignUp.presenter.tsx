// 회원가입 전체
import * as SignUp from "./SignUp.styles";
import SignUpPolicy from "./signUpPolicy/SignUpPolicy.container";

export default function SignUpUI() {
  return (
    <SignUp.Container>
      <SignUpPolicy />
    </SignUp.Container>
  );
}
