import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutBanner from "./banner/Banner.container";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 100%;
`;

// layout props type
interface LayoutProps {
  children: ReactNode;
}

// 컴포넌트 hidden
const HIDDEN_BANNER = [
  "/login",
  "/signUp",
  "/myPage",
  "/myPage/edit",
  "/typeCheck",
  "/recipe",
];

export default function Layout(props: LayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    <>
      <LayoutHeader></LayoutHeader>
      {!isHiddenBanner && <LayoutBanner></LayoutBanner>}
      <Body>{props.children}</Body>
      <LayoutFooter></LayoutFooter>
    </>
  );
}
