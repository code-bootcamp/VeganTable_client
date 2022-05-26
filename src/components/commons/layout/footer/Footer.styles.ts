import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

// 전체
export const Container = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 90rem;
  height: 180px;
  padding: 2rem;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
    width: 55rem;
  }
  @media ${breakPoints.mobile} {
    width: 45rem;
  }
`;

// Top button
export const TopButton = styled.button`
  z-index: 999;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  right: 0;
  bottom: 0;
  transform: translate(-20%, -20%);
  width: 5.5rem;
  height: 5.5rem;
  background: #0fbaa3;
  border-radius: 50%;
  border: none;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.1em;
  cursor: pointer;

  img {
    height: 1.31rem;
    width: auto;
  }

  span {
    padding-top: 0.5rem;
  }
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

// logo
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
export const Logo = styled.img`
  margin-bottom: 20px;
  width: 8.75rem;
  height: 4.125rem;
  @media ${breakPoints.tablet} {
    width: 6.75rem;
    height: 3.125rem;
  }
  @media ${breakPoints.mobile} {
    width: 6.75rem;
    height: 3.125rem;
  }
`;
export const LogoCopyWrite = styled.div`
  font-size: 0.7rem;
  color: rgba(196, 196, 196, 1);
  @media ${breakPoints.tablet} {
    width: 7rem;
  }
  @media ${breakPoints.mobile} {
    width: 7rem;
  }
`;

// Footer Menu
export const MenuInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  @media ${breakPoints.tablet} {
    width: 30rem;
    word-break: word;
  }
  @media ${breakPoints.mobile} {
    width: 24rem;
    word-break: word;
  }
`;

export const MenuWrapper = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

export const Menu = styled.li`
  margin-right: 20px;
  border-right: 1px solid white;
  padding-right: 20px;
  cursor: pointer;
  &:last-of-type {
    border: none;
  }
  font-weight: 600;
  font-size: 1.1rem;
  @media ${breakPoints.tablet} {
    font-size: 1rem;
    padding-right: 10px;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.7rem;
    padding-right: 15px;
  }
`;

// 기업 정보
export const InfoWrapper = styled.div`
  @media ${breakPoints.tablet} {
    width: 30rem;
    word-break: word;
  }
  @media ${breakPoints.mobile} {
    width: 20rem;
    word-break: word;
  }
`;
export const Info = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 0.9rem;
  color: rgba(196, 196, 196, 1);
  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.7rem;
  }
`;

// Footer 고객센터
export const CSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
  font-weight: 600;
`;
export const CSNumber = styled.div`
  margin-bottom: 20px;
  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.7rem;
  }
`;
export const CSChat = styled.button`
  width: 6rem;
  height: 2rem;
  border: 1px solid white;
  font-size: 1rem;
  font-weight: 600;
  background-color: black;
  border-radius: 2rem;
  color: white;
  @media ${breakPoints.tablet} {
    width: 5rem;
  }
  @media ${breakPoints.mobile} {
    width: 5rem;
    font-size: 0.7rem;
  }
`;
