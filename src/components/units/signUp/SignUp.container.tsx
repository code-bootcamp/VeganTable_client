import SignUpUI from "./SignUp.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "../../../commons/libraries/validation";
import { useMutation } from "@apollo/client";
import {
  CHECK_VALID_TOKEN,
  CREATE_USER,
  SEND_TOKEN_TO_SMS,
} from "./SignUp.queries";
import { useState } from "react";

export default function SignUp() {
  const [createUser] = useMutation(CREATE_USER);
  // form 부분
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
  });

  // form에서 검증하지 않는 state
  const [userInputs, setUserInputs] = useState({
    gender: "",
    phone: "",
    token: "",
    isValid: false,
  });

  // form에서 검증하지 않는 state errors
  const [userInputsErrors, setUserInputsErrors] = useState({
    genderError: "",
    tokenError: "",
  });

  // 가입완료로 넘어가는 state
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeUserInputs = (id) => (e) => {
    setUserInputs((prev) => ({
      ...userInputs,
      [id]: e.target.value,
    }));
    if (userInputs.gender !== "")
      setUserInputsErrors({ ...userInputsErrors, genderError: "" });
  };

  // 핸드폰 인증 부분
  const [getToken] = useMutation(SEND_TOKEN_TO_SMS);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);

  const onClickGetToken = async () => {
    try {
      await getToken({
        variables: {
          phone: String(userInputs.phone),
        },
      });
      alert("인증번호가 발송되었습니다.");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  // 인증된 번호 체크 뮤테이션
  const onClickCheckValid = async () => {
    try {
      const result = await checkValidToken({
        variables: {
          phone: String(userInputs.phone),
          token: String(userInputs.token),
        },
      });
      setUserInputs({ ...userInputs, isValid: result.data?.checkValidToken });
      if (!result.data?.checkValidToken) {
        setUserInputsErrors({
          ...userInputsErrors,
          tokenError: "인증번호가 일치하지 않습니다.",
        });
      }
      alert("인증되었습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 회원가입 mutation
  const onClickSubmit = async (data) => {
    if (userInputs.gender === "") {
      return setUserInputsErrors({
        ...userInputsErrors,
        genderError: "성별을 선택해주세요.",
      });
    }
    try {
      await createUser({
        variables: {
          email: String(data.email),
          password: String(data.password),
          name: String(data.name),
          phone: String(userInputs.phone),
        },
      });
      setIsSubmit(true);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      isSubmit={isSubmit}
      userInputs={userInputs}
      userInputsErrors={userInputsErrors}
      onChangeUserInputs={onChangeUserInputs}
      // 폰 인증 부분
      onClickGetToken={onClickGetToken}
      onClickCheckValid={onClickCheckValid}
    />
  );
}
