import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6.25rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75rem;
`;

export const LogoWrapper = styled.div`
  width: 45%;
`;
export const Logo = styled.img`
  width: 8rem;
  height: 2rem;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 25rem;
`;

export const MenuItem = styled.li`
  position: relative;
  list-style: none;
  cursor: pointer;
  :hover {
  }
`;

export const Circle = styled.img`
  display: none;
  position: absolute;
  left: 50%;
  bottom: -0.5rem;
  transform: translate(-50%, 50%);
  &.isActive {
    display: block;
  }
`;

export const UserWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  /* width: 11rem; */
`;

export const UserIcon = styled.img``;

export const UserName = styled.li``;

export const UserPoint = styled.li``;
