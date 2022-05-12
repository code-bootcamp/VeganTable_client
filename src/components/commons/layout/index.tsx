import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutBanner from "./banner/Banner.container";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import SearchBar01 from "../searchBars/01";

const Body = styled.div`
  width: 100%;
`;

// layout props type
interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <LayoutHeader></LayoutHeader>
      <LayoutBanner></LayoutBanner>
      <SearchBar01 />
      <LayoutNavigation></LayoutNavigation>
      <Body>{props.children}</Body>
      <LayoutFooter></LayoutFooter>
    </>
  );
}
