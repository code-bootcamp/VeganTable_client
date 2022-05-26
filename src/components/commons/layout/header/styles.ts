import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.75rem;
  border-bottom: 1px solid #e5e5e5;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  @media ${breakPoints.tablet} {
    width: 50rem;
  }
  @media ${breakPoints.mobile} {
    width: 40rem;
  }
`;

export const LogoWrapper = styled.div``;
export const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 5rem;
  @media ${breakPoints.mobile} {
    width: 24rem;
  }
`;

export const MenuItem = styled.li`
  position: relative;
  align-self: flex-end;
  margin-right: 3.375rem;
  list-style: none;
  cursor: pointer;
  :hover {
  }
`;

export const Circle = styled.span`
  display: none;
  position: absolute;
  width: 8px;
  height: 8px;
  background: #0fbaa3;
  border-radius: 50%;
  left: 50%;
  bottom: -0.5rem;
  transform: translate(-50%, 50%);
  &.isActive {
    display: block;
  }
`;

export const UserWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  list-style: none;
  width: 18rem;
  @media ${breakPoints.tablet} {
    width: 12rem;
  }
  @media ${breakPoints.mobile} {
    width: 12rem;
  }
`;

export const HeaderIcon = styled.img`
  height: 2rem;
  cursor: pointer;
`;

export const UserName = styled.li`
  margin-right: 1.5rem;
`;
