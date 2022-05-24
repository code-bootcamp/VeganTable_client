import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import * as S from "./Drawer.styles";
import Link from "next/link";

type Anchor = "right";

export default function TemporaryDrawer(props) {
  const [state, setState] = useState({
    right: false,
  });

  // 모달 토글 단축키
  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <S.Container>
      <S.Wrapper>
        <S.DrawerHead>
          <div>
            <button onClick={toggleDrawer("right", false)}>
              <img src="/img/icon/Close.svg" alt="" />
            </button>
          </div>
          <div>
            <span>전문가</span>
          </div>
          <div>
            <span>
              안녕하세요 <b>홍예원</b>님 {":)"}
            </span>
          </div>
        </S.DrawerHead>
        <S.DrawerBody>
          <S.VeganType>
            <img src="/img/navigation/icon-vegan-vegan.svg" alt="" />
            <span>비건</span>
          </S.VeganType>
          <S.SubsInfo>
            <span>3달째</span>
            <span>정기 구독 이용중</span>
          </S.SubsInfo>
        </S.DrawerBody>
        <S.RegisterButton>레시피 등록하기</S.RegisterButton>
        <S.DrawerNav onClick={toggleDrawer("right", false)}>
          <li>
            <Link href={"/myPage"}>
              <a>MY 홈</a>
            </Link>
          </li>

          <li>
            <Link href={"/myPage/subscribe"}>
              <a>정기 구독 관리</a>
            </Link>
          </li>

          <li>
            <Link href={"/myPage/qna"}>
              <a>문의 내역</a>
            </Link>
          </li>

          <li>
            <Link href={"/myPage/edit"}>
              <a>회원 정보 수정</a>
            </Link>
          </li>

          <li>
            <a>로그아웃</a>
          </li>
        </S.DrawerNav>
      </S.Wrapper>
    </S.Container>
  );

  return (
    <>
      <button
        style={{ display: "none" }}
        ref={props.drawerRef}
        onClick={toggleDrawer("right", true)}
      ></button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
}
