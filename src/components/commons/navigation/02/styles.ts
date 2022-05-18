import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6.125rem 6.125rem 6.125rem;
  gap: 3rem;
  padding-top: 1.5rem;
`;

export const VeganType = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6.125rem;
  cursor: pointer;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 6.125rem;
  border: 2px solid #7f7f7f;
  border-radius: 50%;
  margin-bottom: 1rem;

  :hover {
    border: 2px solid #0fbaa3;
  }
`;

export const VeganTypeImg = styled.img`
  height: 3.3rem;
`;

export const VeganTypeName = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
  color: #464646;
`;

export const VeganTypeEnName = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #c4c4c4;
`;
