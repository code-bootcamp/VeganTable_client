import styled from "@emotion/styled";

// 전체
export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 30px 130px;
  background-color: #f5f7f2;
  display: flex;
  justify-content: space-between;
`;

// logo
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.img`
  width: 8.63rem;
  height: 2.8125rem;
  margin-bottom: 20px;
`;
export const LogoCopyWrite = styled.div`
  font-size: 0.7rem;
`;

// Footer Menu
export const MenuInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;
export const Menu = styled.li`
  margin-right: 20px;
  border-right: 1px solid black;
  padding-right: 20px;
  cursor: pointer;
  &:last-of-type {
    border: none;
  }
  font-weight: 700;
  font-size: 1.1rem;
`;

// 기업 정보
export const InfoWrapper = styled.div``;
export const Info = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 0.9rem;
  color: #424242;
`;

// Footer 고객센터
export const CSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const CSNumber = styled.div`
  margin-bottom: 20px;
`;
export const CSChat = styled.button`
  width: 7.8rem;
  height: 2.1rem;
  border: 1px solid #0fbaa3;
  background-color: #f5f7f2;
  border-radius: 0.25rem;
`;