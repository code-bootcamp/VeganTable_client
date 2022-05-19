import styled from "@emotion/styled";

export const Container = styled.div`
  & > h2 {
    font-weight: 500;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeadText = styled.div`
  & > span {
    padding-right: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
  }

  & > span:last-of-type {
    color: #0fbaa3;
  }
`;
export const AlignType = styled.ul`
  display: flex;
  align-items: center;
  font-size: 0.75rem;

  & > li {
    border-right: 2px solid #c4c4c4;

    &:first-of-type {
      padding-right: 1rem;
      color: #0fbaa3;
    }

    &:last-of-type {
      padding-left: 1rem;
      border: none;
    }
  }
`;
