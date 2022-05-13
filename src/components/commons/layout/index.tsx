import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutBanner from "./banner/Banner.container";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import SearchBar01 from "../searchBars/01";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 100%;
`;

// layout props type
interface LayoutProps {
  children: ReactNode;
}

// 컴포넌트 hidden
const HIDDEN_BANNER = ["/login"];
const HIDDEN_NAVIGATION = ["/login"];

export default function Layout(props: LayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);

  return (
    <>
      <LayoutHeader></LayoutHeader>
      {!isHiddenBanner && <LayoutBanner></LayoutBanner>}
      {!isHiddenBanner && <SearchBar01 />}
      {!isHiddenNavigation && <LayoutNavigation></LayoutNavigation>}
      <Body>{props.children}</Body>
      <LayoutFooter></LayoutFooter>
    </>
  );
}
