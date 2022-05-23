import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #e5e5e5;
`;

// 공통 내용 전체
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.0625rem auto;
`;

// 구독 완료 메세지 부분
export const HeaderWrapper = styled.div`
  width: 47.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 13rem;
`;

export const HeaderCompleteIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeaderCompleteNotice = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

// 메인 내용부분
export const BodyWrapper = styled.div`
  width: 47.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeliveryMan = styled.img`
  width: 19.25rem;
  position: absolute;
  z-index: 100;
  top: -150px;
`;

export const Receipt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44.25rem;
  height: 50rem;
  z-index: 3;
  background-image: url("/img/subscribe/img-complete-03.png");
  position: relative;
`;

export const BackLetter = styled.div`
  width: 47.25rem;
  height: 13.5rem;
  background-color: #0fbaa3;
  border-radius: 1.5rem;
  transform: translateY(-65%);
  display: flex;
  justify-content: center;
`;

export const FrontLetter = styled.div`
  width: 46rem;
  height: 5.625rem;
  background-image: url("/img/subscribe/img-complete-04.png");
  z-index: 4;
  position: absolute;
  bottom: 0px;
  transform: translateY(50%);
`;

export const LetterLogo = styled.img`
  position: absolute;
  z-index: 7;
  bottom: 0;
  left: 1rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 37rem;
  margin-top: 11rem;
`;

export const TextHeader = styled.div`
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid black;
  margin-bottom: 2rem;
`;

export const TextRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  &:last-of-type {
    border-bottom: 2px solid #c4c4c4;
    padding-bottom: 2rem;
  }
`;

export const TextCategory = styled.p``;

export const TextContents = styled.p``;

export const DetailGuide = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: #c4c4c4;
  letter-spacing: -0.05em;
  margin-bottom: 2rem;
`;
