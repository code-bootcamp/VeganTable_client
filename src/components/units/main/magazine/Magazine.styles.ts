import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 4.25rem 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const MagazineHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 3.5rem;
  width: 100%;
`;
export const HeadText = styled.div`
  & > span {
    font-size: 1.375rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #0fbaa3;
  }
  & > h1 {
    padding-top: 8px;
    font-size: 2.25rem;
    font-weight: 600;
  }
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #ffffff;
`;

const ItemOpacity = keyframes`
from{
  opacity: 1;
}
to{
  opacity: 0;
}
`;

export const Item = styled.div`
  position: relative;
  cursor: pointer;
  :hover {
    & > div {
      animation: ${ItemOpacity} 2s ease;
      animation-fill-mode: forwards;
    }
    & > img {
      transition: all 2s ease;
    }
  }

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100% - 3px);
    border-radius: 2rem;
    letter-spacing: -0.05em;
    font-weight: 700;
    p {
      padding-top: 1.14rem;
      font-size: 1.5rem;
    }
  }

  &:nth-of-type(1) > div {
    background: rgba(207, 232, 105, 0.7);
  }

  &:nth-of-type(2) > div {
    background: rgba(247, 209, 52, 0.7);
  }

  &:nth-of-type(3) > div {
    background: rgba(232, 142, 81, 0.7);
  }

  &:nth-of-type(4) > div {
    background: rgba(65, 191, 237, 0.5);
  }
`;
