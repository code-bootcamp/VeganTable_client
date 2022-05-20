import styled from "@emotion/styled";

export const Container = styled.div`
  background: rgba(241, 241, 241, 0.6);
  padding: 4.25rem 0;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`;

export const HeadText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > span {
    font-weight: 600;
    font-size: 1.375rem;
    letter-spacing: 0.1em;
    color: #0fbaa3;
  }

  & > h1 {
    padding-top: 8px;
    font-size: 2.25rem;
    font-weight: 400;
  }
`;

export const Contents = styled.div``;
export const ImageContainer = styled.div`
  width: 100%;
  max-width: 1384px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  padding: 2.5rem 0;

  & > img:nth-of-type(1) {
    width: 100%;
    max-width: 782px;
    opacity: 0;
    transition: all 2.5s ease;
    transition-delay: 0.1s;
  }

  &.isActive > img:nth-of-type(1) {
    opacity: 1;
    transform: translateX(10%);
  }

  & > img:nth-of-type(2) {
    z-index: 2;
    width: 100%;
    max-width: 673px;
    opacity: 0;
    transition: all 2.5s ease;
  }

  &.isActive > img:nth-of-type(2) {
    opacity: 1;
    transform: translateY(15%);
  }
`;
export const ContentsText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 3.125rem;
  letter-spacing: -0.05em;
  transform: translateY(0%);
  opacity: 0;
  transition: all 2.5s ease;

  &.isActive {
    transform: translateY(-70%);
    opacity: 1;
  }

  & > span:first-of-type {
    height: 5px;
    width: 4rem;
    background: #000000;
  }

  & > span:nth-of-type(n + 2) {
    padding-top: 1.25rem;
  }
`;
