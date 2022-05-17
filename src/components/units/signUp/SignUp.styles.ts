// 회원가입 전체
import styled from "@emotion/styled";

// 회원가입 전체 컴포넌트
export const Container = styled.div`
  display: flex;
  width: 100%;
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

// 공통 제목 부분
export const HeaderWrapper = styled.div`
  margin-bottom: 2.1875rem;
`;
export const HeaderTitle = styled.h1`
  font-size: 3.125rem;
`;

// 공통 제목 외 내용 부분
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.75rem;
  height: 54.75rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
  margin-bottom: 2rem;
`;

// 공통 회원가입 단계 부분
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

// 약관 동의 부분
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
  height: 17rem;
`;

// 정보 입력 내용 전체 부분
export const InputContentsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

// 정보 입력 row 하나
export const InputContents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

// 정보 입력 카테고리 부분
export const InputTitleWrapper = styled.li`
  display: flex;
  width: 8rem;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 10px;
  margin-right: 2rem;
`;

// 정보 입력 인풋 부분
export const InputWrapper = styled.li`
  display: flex;
`;

// 성별 선택
export const SelectWrapper = styled.div`
  width: 8rem;
  display: flex;
  align-items: center;
`;

export const SexSelect = styled.select`
  width: 7rem;
  height: 4rem;
  padding: 20px;
  margin-bottom: 10px;
  margin-left: 0.8rem;
  border-radius: 2rem;
  border: 1px solid #bfbfbf;
`;

// 휴대폰 인증 버튼
export const PhoneNumberCertify = styled.button`
  width: 7.56rem;
  height: 3.93rem;
  border: 0;
  border-radius: 2rem;
  background-color: #c4c4c4;
  margin-left: 0.5rem;
  cursor: pointer;
`;

// 정보성 메일 체크박스 부분
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  font-weight: 500;
  cursor: pointer;
`;

// 회원가입 완료 부분
export const CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.75rem;
  height: 43.75rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
  margin-bottom: 2rem;
`;

export const CheckIcon = styled.img`
  margin-bottom: 1rem;
`;

export const Cake = styled.img`
  margin-bottom: 2rem;
  position: relative;
`;
export const FlowerShower = styled.img`
  position: absolute;
  bottom: 6rem;
`;

export const CompleteTitle = styled.h2`
  margin-bottom: 3rem;
  font-weight: 500;
`;