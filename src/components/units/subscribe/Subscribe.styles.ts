import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  width: 120rem;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
`;

export const SubTitle = styled.p`
  font-size: 2.25rem;
`;
export const Contents = styled.p`
  font-size: 1.2rem;
`;

export const IntroTop1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 7.6875rem;
  padding-bottom: 5.75rem;

  & img {
    position: relative;
    left: 10%;
  }
`;

export const TopText1 = styled.div`
  position: relative;
  left: 14.8125rem;
  width: 100%;
  z-index: 1;
`;

export const IntroTop2 = styled.div`
  position: relative;

  & .img-01 {
    position: relative;
    left: -5%;
  }

  & .img-02 {
    position: relative;
    left: 20%;
  }
`;

export const TopText2 = styled.div`
  position: absolute;
  left: 15%;
  bottom: -10%;

  & > h2 {
    padding-bottom: 1.1875rem;
  }
`;

export const IntroTop3 = styled.div`
  position: relative;
  padding-top: 14.625rem;

  & .img-03 {
    position: relative;
    left: 10%;
    bottom: 13rem;
    top: 30%;
  }

  & .img-04 {
    position: relative;
    left: 35%;
  }
`;

export const TopText3 = styled.div`
  position: absolute;
  right: 26%;
  bottom: -9%;
  text-align: right;

  & > h2 {
    padding-bottom: 1.1875rem;
  }
`;

export const IntroMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17.8125rem 0;
  text-align: center;

  & > img {
    padding: 5.5rem 0;
  }
`;

export const IntroBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    padding-bottom: 11rem;
  }
`;

export const Delivery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.25rem 0;
  width: 70.1875rem;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50.4375rem;
  background-color: #f7f9f3;

  & > h2 {
    text-align: center;
    padding-bottom: 1.5rem;
  }
`;

export const PassWrapper = styled.div``;
