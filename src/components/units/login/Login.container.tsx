import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useModal } from "../../commons/hooks/useModal";
import LoginUI from "./Login.presenter";
import { FETCH_USER, LOG_IN } from "./Login.queries";

export default function Login() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const onChangeLoginInputs = (id) => (e) => {
    setLoginInputs({
      ...loginInputs,
      [id]: e.target.value,
    });
  };

  // 로그인 회원 정보 가져오기
  // const { data } = useQuery(FETCH_USER);

  // 로그인 mutation
  const [login] = useMutation(LOG_IN);

  const onClickSignUp = () => {
    router.push("/signUp");
  };

  // 모달 부분
  const { Success01, Error } = useModal({
    SuccessTitle01: "로그인 성공",
    SuccessText01: "로그인에 성공하였습니다.",
    ErrorTitle: "로그인 실패",
    ErrorText: "로그인에 실패하였습니다.",
  });

  const onClickLogin = async () => {
    try {
      const result = await login({
        variables: {
          email: String(loginInputs.email),
          password: String(loginInputs.password),
        },
      });
      const myAccessToken = result.data?.login;
      setAccessToken(myAccessToken);
      Success01();
      router.push("/");
    } catch (error) {
      Error();
    }
  };

  return (
    <LoginUI
      onClickSignUp={onClickSignUp}
      onChangeLoginInputs={onChangeLoginInputs}
      onClickLogin={onClickLogin}
    />
  );
}
