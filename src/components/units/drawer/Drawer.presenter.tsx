import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import * as S from "./Drawer.styles";
import Link from "next/link";
import { useModal } from "../../commons/hooks/useModal";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import OutlineSubmitButton from "../../commons/buttons/outlineSubmit";

type Anchor = "right";

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

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
    }
  }
`;

export default function TemporaryDrawer(props) {
  const [accessToken] = useRecoilState(accessTokenState);

  const [state, setState] = useState({
    right: false,
  });
  const router = useRouter();

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

  // 모달
  const { Success01, Error } = useModal({
    SuccessTitle01: "로그아웃 성공",
    SuccessText01: "로그아웃을 성공하였습니다.",
    ErrorTitle: "로그아웃 실패",
    ErrorText: "로그아웃을 실패하였습니다.",
  });

  const [logout] = useMutation(LOGOUT);

  const onClickLogout = async () => {
    try {
      await logout();
      Success01();
      router.push("/");
    } catch (error) {
      Error();
    }
  };

  const { data } = useQuery(FETCH_USER);

  const list = (anchor: Anchor) => (
    <S.Container>
      <S.Wrapper>
        {accessToken ? (
          <>
            <S.DrawerHead>
              <div>
                <button onClick={toggleDrawer("right", false)}>
                  <img src="/img/icon/Close.svg" alt="" />
                </button>
              </div>
              <div isPro={data?.fetchUser.isPro === "PRO"}>
                {data?.fetchUser.isPro === "PRO" ? (
                  <span>전문가</span>
                ) : (
                  <span>회원</span>
                )}
              </div>
              <div>
                <span>
                  안녕하세요 <b>{data?.fetchUser.name}</b>님 {":)"}
                </span>
              </div>
            </S.DrawerHead>
            <S.DrawerBody>
              <S.VeganType>
                <img src="/img/navigation/icon-vegan-nonVegan.svg" alt="" />
                <span>채린이</span>
              </S.VeganType>
              <S.SubsInfo>
                <span>3달째</span>
                <span>정기 구독 이용중</span>
              </S.SubsInfo>
            </S.DrawerBody>
            <Link href={"/recipe/new"}>
              <S.RegisterButton onClick={toggleDrawer("right", false)}>
                <a>레시피 등록하기</a>
              </S.RegisterButton>
            </Link>
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

              <li onClick={onClickLogout} style={{ cursor: "pointer" }}>
                <a>로그아웃</a>
              </li>
            </S.DrawerNav>
          </>
        ) : (
          <S.NonLoginWrapper onClick={toggleDrawer("right", false)}>
            <Link href={"/login"}>
              <a>
                <OutlineSubmitButton
                  isActive={true}
                  title={"로그인하기"}
                  size={"medium"}
                />
              </a>
            </Link>
          </S.NonLoginWrapper>
        )}
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
