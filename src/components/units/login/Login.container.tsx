import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useModal } from "../../commons/hooks/useModal";
import LoginUI from "./Login.presenter";
import { LOG_IN } from "./Login.queries";

export default function Login() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const onChangeLoginInputs =
    (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setLoginInputs({
        ...loginInputs,
        [id]: e.target.value,
      });
    };

  // 로그인 mutation
  const [login] = useMutation(LOG_IN);

  const onClickSignUp = () => {
    router.push("/signUp");
  };

  // 모달 부분
  const { Success, ModalError } = useModal();

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
      Success("로그인 성공", "로그인에 성공하였습니다.");
      router.push("/");
    } catch (error) {
      if (error instanceof Error)
        ModalError("로그인 실패", "로그인에 실패하였습니다.");
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
