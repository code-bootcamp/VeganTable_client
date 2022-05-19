import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import * as Header from "./styles";

export default function LayoutHeader() {
  const router = useRouter();

  const HEADER_MENUS = [
    { name: "홈", page: "/" },
    { name: "레시피", page: "/recipe" },
    { name: "구독서비스", page: "/subscribe" },
  ];

  return (
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
          {/* <Header.UserName>
            안녕하세요 <b>홍예원</b> 님
          </Header.UserName> */}

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
          <Link href={"/myPage"}>
            <Header.HeaderIcon src="/img/header/icon-profile.svg" />
          </Link>
          <Header.AlertIcon>
            <Header.HeaderIcon src="/img/header/icon-header-alert.svg" />
            <span></span>
          </Header.AlertIcon>
        </Header.UserWrapper>
      </Header.Wrapper>
    </Header.Container>
  );
}
