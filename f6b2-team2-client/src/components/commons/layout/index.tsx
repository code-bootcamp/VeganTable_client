import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

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
      <LayoutNavigation></LayoutNavigation>
      <LayoutBanner></LayoutBanner>
      <Body>{props.children}</Body>
      <LayoutFooter></LayoutFooter>
    </>
  );
}
