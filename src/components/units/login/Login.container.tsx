import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
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
  const { data } = useQuery(FETCH_USER);

  // 로그인 mutation
  const [login] = useMutation(LOG_IN);

  const onClickSignUp = () => {
    router.push("/signUp");
  };

  console.log(loginInputs, data);
  const onClickLogin = async () => {
    try {
      const result = await login({
        variables: {
          email: String(loginInputs.email),
          password: String(loginInputs.password),
        },
      });
      console.log(result);
      const myAccessToken = result.data?.login; // 결과 어떻게 받는지 확인
      setAccessToken(myAccessToken);
      alert("로그인에 성공하였습니다.");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
