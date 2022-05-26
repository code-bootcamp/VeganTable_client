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
import { ChangeEvent, useState } from "react";
import { useModal } from "../../commons/hooks/useModal";

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

  const onChangeUserInputs =
    (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setUserInputs((prev) => ({
        ...userInputs,
        [id]: e.target.value,
      }));
      if (userInputs.gender !== "")
        setUserInputsErrors({ ...userInputsErrors, genderError: "" });
    };

  // 모달 부분
  const { Success01, Success02, Error, Error02, Warning } = useModal({
    SuccessTitle01: "발송 완료",
    SuccessText01: "인증번호를 발송하였습니다",
    SuccessTitle02: "인증 완료",
    SuccessText02: "인증번호가 일치합니다.",
    ErrorTitle: "인증 실패",
    ErrorText: "인증번호가 일치하지 않습니다.",
    ErrorTitle02: "회원가입 실패",
    ErrorText02: "회원가입에 실패했습니다.",
    WarningTitle: "발송 실패",
    WarningText: "이미 등록된 번호이거나 유효한 번호가 아닙니다.",
  });

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
      Success01();
    } catch (error) {
      Warning();
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
      Success02();
    } catch (error) {
      Error();
    }
  };

  // 회원가입 mutation
  const onClickSubmit = async (data: any) => {
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
      Error02();
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
