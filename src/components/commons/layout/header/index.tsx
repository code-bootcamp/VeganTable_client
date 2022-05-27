import { gql, useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useRef } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import Drawer from "../../../units/drawer/Drawer.container";
import { useModal } from "../../hooks/useModal";
import * as Header from "./styles";

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      user_id
      email
      name
      phone
      address
      type
      nickname
      isPro
      isSubs
      SubsHistory
      profilePic
    }
  }
`;

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const drawerRef = useRef(null);
  const [accessToken] = useRecoilState(accessTokenState);

  // 모달
  const { Success01, Error } = useModal({
    SuccessTitle01: "로그아웃 성공",
    SuccessText01: "로그아웃을 성공하였습니다.",
    ErrorTitle: "로그아웃 실패",
    ErrorText: "로그아웃을 실패하였습니다.",
  });

  const HEADER_MENUS = [
    { name: "홈", page: "/" },
    { name: "레시피", page: "/recipe" },
    { name: "구독서비스", page: "/subscribe" },
  ];

  const { data } = useQuery(FETCH_USER);

  const [logout] = useMutation(LOGOUT);

  const onClickUserIcon = () => {
    drawerRef.current?.click();
  };

  const onClickLogout = async () => {
    try {
      await logout();
      Success01();
      router.push("/");
    } catch (error) {
      Error();
    }
  };

  return (
    <>
      <Header.Container>
        <Header.Wrapper>
          <Header.LogoWrapper>
            <Link href={"/"}>
              <Header.Logo src="/img/header/icon-logo-header.svg" />
            </Link>
          </Header.LogoWrapper>
          <Header.MenuWrapper>
            {HEADER_MENUS.map((el) => (
              <Fragment key={el.page}>
                <Link href={el.page}>
                  <Header.MenuItem id={el.page}>
                    <a>{el.name}</a>
                    <Header.Circle
                      className={router.asPath === el.page ? "isActive" : ""}
                    />
                  </Header.MenuItem>
                </Link>
              </Fragment>
            ))}
          </Header.MenuWrapper>
          <Header.UserWrapper>
            {accessToken ? (
              <>
                <Header.WelcomeMent>
                  안녕하세요 <b>{data?.fetchUser.name}</b> 님
                </Header.WelcomeMent>
                <Header.UserName
                  onClick={onClickLogout}
                  style={{ cursor: "pointer" }}
                >
                  로그아웃
                </Header.UserName>
                <Header.HeaderIconWrapper onClick={onClickUserIcon}>
                  <Header.HeaderIcon src="/img/header/icon-profile.svg" />
                </Header.HeaderIconWrapper>
              </>
            ) : (
              <>
                <Header.UserName>
                  <Link href={"/login"}>
                    <a>로그인</a>
                  </Link>
                </Header.UserName>
                <Header.UserName>
                  <Link href={"/signUp"}>
                    <a>회원가입</a>
                  </Link>
                </Header.UserName>
                <Header.HeaderIconWrapper onClick={onClickUserIcon}>
                  <Header.HeaderIcon src="/img/header/icon-profile.svg" />
                </Header.HeaderIconWrapper>
              </>
            )}
          </Header.UserWrapper>
        </Header.Wrapper>
      </Header.Container>
      <Drawer drawerRef={drawerRef} />
    </>
  );
}
