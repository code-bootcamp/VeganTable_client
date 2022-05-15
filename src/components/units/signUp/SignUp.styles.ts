// 회원가입 전체
import styled from "@emotion/styled";

// 회원가입 전체 컴포넌트
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #e5e5e5;
`;

// 내용 전체
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.0625rem auto;
`;

// 제목 부분
export const HeaderWrapper = styled.div`
  margin-bottom: 2.1875rem;
`;
export const HeaderTitle = styled.h1`
  font-size: 3.125rem;
`;

// 제목 외 내용 부분
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.75rem;
  height: 40.75rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
`;

// 회원가입 단계 부분
export const BodyTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  width: 29rem;
`;
export const BodyTitle = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  width: 29rem;
`;

export const SignUpTitle = styled.li`
  width: 9.5rem;
  text-align: center;
  font-weight: 400;
`;

export const SignUpTitleOn = styled.li`
  width: 9.5rem;
  text-align: center;
  font-weight: 600;
`;

export const SignUpTitleUnderBarWrapper = styled.ul`
  width: 29rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpTitleUnderBar = styled.li`
  border-bottom: 4px solid #c4c4c4;
  width: 9.5rem;
`;
export const SignUpTitleUnderBarOn = styled.li`
  border-bottom: 6px solid #0fbaa3;
  width: 9.5rem;
`;

// 회원가입 단계 이후
export const BodyContents = styled.ul`
  width: 29rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const PolicyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PolicyTitleEssential = styled.span`
  font-weight: 700;
  color: #0fbaa3;
  margin-right: 0.2rem;
  margin-bottom: 2px;
`;

export const PolicyTitle = styled.span`
  font-weight: 500;
  margin-bottom: 2px;
`;

export const PolicyContents = styled.div`
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  width: 29rem;
  height: 10rem;
`;

export const SignUpButton = styled.button`
  width: 29rem;
  height: 3.875rem;
  background-color: #0fbaa3;
  border: 1px solid #0fbaa3;
  border-radius: 2rem;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`;
