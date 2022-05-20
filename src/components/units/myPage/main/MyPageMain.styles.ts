import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.25rem 15rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90rem;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10.5rem;
  background-color: #faf9f9;
  border-radius: 24px;
  padding: 0 4rem;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 57%;
`;

export const UserIcon = styled.img``;

export const UserGrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.6875rem;
  height: 1.5rem;
  background-color: #bfab87;
  border: none;
  color: #ffffff;
  border-radius: 20px;
`;

export const UserName = styled.span`
  font-size: 2rem;
  padding-top: 0.5rem;
  & > span {
    font-weight: 700;
  }
`;

export const UserInfo = styled.ul`
  display: flex;
  align-items: center;
  width: 30%;
  height: 2.5rem;
`;

export const Info = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #c4c4c4;
  padding: 0 2rem;
  &:last-of-type {
    width: 60%;
    border: none;
  }
`;

export const TypeIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Name = styled.span`
  padding-top: 0.4rem;
  color: #424242;
`;

export const Subscribe = styled.span`
  color: #0fbaa3;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const RecipeWrapper = styled.div`
  width: 100%;
`;
export const Recipe = styled.div`
  padding-top: 4.75rem;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 0.625rem;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  & > span {
    color: #848484;
  }
`;

export const Body = styled.ul`
  display: flex;
  padding-top: 2.5rem;
`;

export const Menu = styled.li`
  width: 13.5rem;
  margin-right: 0.8rem;

  &:last-of-type {
    margin-right: 0rem;
  }

  & > img {
    width: 100%;
  }

  & > h2 {
    padding: 0.4rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
