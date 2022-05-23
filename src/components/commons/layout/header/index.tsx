import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useRef } from "react";
import Drawer from "../../../units/drawer/Drawer.container";
import * as Header from "./styles";

export default function LayoutHeader() {
  const router = useRouter();
  const drawerRef = useRef(null);

  const HEADER_MENUS = [
    { name: "홈", page: "/" },
    { name: "레시피", page: "/recipe" },
    { name: "구독서비스", page: "/subscribe" },
  ];

  const onClickUserIcon = () => {
    drawerRef.current?.click();
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
            {/* 로그인 안 했을 때는 여기만 보여주기 */}
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

            {/* 로그인 했을 때는 여기만 보여주기 */}
            {/* <Header.UserName>
            안녕하세요 <b>홍예원</b> 님
          </Header.UserName> */}
            {/* 
          <Link href={"/myPage"}>
            <Header.HeaderIcon src="/img/header/icon-profile.svg" />
          </Link> */}
            <div onClick={onClickUserIcon}>
              <Header.HeaderIcon src="/img/header/icon-profile.svg" />
            </div>
          </Header.UserWrapper>
        </Header.Wrapper>
      </Header.Container>
      <Drawer drawerRef={drawerRef} />
    </>
  );
}
