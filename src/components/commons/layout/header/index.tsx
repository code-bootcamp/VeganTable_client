import { useRouter } from "next/router";
import { Fragment, MouseEvent } from "react";
import * as Header from "./styles";

export default function LayoutHeader() {
  const router = useRouter();

  const HEADER_MENUS = [
    { name: "홈", page: "/" },
    { name: "레시피", page: "/recipe" },
    { name: "커뮤니티", page: "/community" },
    { name: "구독서비스", page: "/subscribe" },
    { name: "식당찾기", page: "/searchTable" },
  ];

  const onClickMenu = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element) {
      router.push(event.target.id);
    }
  };

  return (
    <Header.Container>
      <Header.Wrapper>
        <Header.LogoWrapper>
          <Header.Logo src="header/Logo.png" />
        </Header.LogoWrapper>

        <Header.MenuWrapper>
          {HEADER_MENUS.map((el) => (
            <Fragment key={el.page}>
              <Header.MenuItem id={el.page} onClick={onClickMenu}>
                {el.name}
                <Header.Circle
                  src="header/circle.png"
                  className={router.asPath === el.page ? "isActive" : ""}
                />
              </Header.MenuItem>
            </Fragment>
          ))}
        </Header.MenuWrapper>

        <Header.UserWrapper>
          <Header.UserIcon src="header/Profile.png" />
          <Header.UserName>Guest 님</Header.UserName>
          {/* <Header.UserPoint>300 Point</Header.UserPoint> */}
        </Header.UserWrapper>
      </Header.Wrapper>
    </Header.Container>
  );
}
