import * as yup from "yup";

export const SignUpSchema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  birth: yup.number().required("생년월일을 입력해주세요."),
  email: yup
    .string()
    .email("사용가능한 이메일 형식이 아닙니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /^(?=.*\d)(?=.*\w)(?=.*[!@#$%^&*_+"|;:'/?.,]).{10,15}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 최소 10글자 이상 15글자 이하 입니다."
    ),
  passwordCheck: yup
    .string()
    .required("비밀번호 확인을 입력해주세요")
    .matches(
      /^(?=.*\d)(?=.*\w)(?=.*[!@#$%^&*_+"|;:'/?.,]).{10,15}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 최소 10글자 이상 15글자 이하 입니다."
    ),
});
