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
  // form 부분
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
  });

  // 다음페이지로 넘어가는 state
  const [isSubmit, setIsSubmit] = useState(false);

  // form에서 검증하지 않는 state
  const [userInputs, setUserInputs] = useState({
    phone: "",
    token: "",
    isValid: false,
  });

  const onChangeUserInputs = (id) => (e) => {
    setUserInputs({
      ...userInputs,
      [id]: e.target.value,
    });
  };

  // 핸드폰 인증 부분
  const [getToken] = useMutation(SEND_TOKEN_TO_SMS);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);

  const onClickGetToken = async () => {
    try {
      const result = await getToken({
        variables: {
          phone: String(userInputs.phone),
        },
      });
      setUserInputs({ ...userInputs, token: result.data?.getToken });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 회원가입 mutation
  const [createUser] = useMutation(CREATE_USER);

  const onClickSubmit = async (data) => {
    try {
      await createUser({
        variables: {
          email: String(data.email),
          password: String(data.password),
          name: String(data.name),
          phone: String(userInputs.phone),
        },
      });
      setIsSubmit((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
      onChangeUserInputs={onChangeUserInputs}
      // 폰 인증 부분
      onClickGetToken={onClickGetToken}
      onClickCheckValid={onClickCheckValid}
    />
  );
}
