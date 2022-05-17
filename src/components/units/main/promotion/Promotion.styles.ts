import styled from "@emotion/styled";

export const Container = styled.div`
  background: rgba(196, 196, 196, 0.1);
  padding: 4.06rem 0;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;

  & > div {
    border-radius: 2.5rem;
  }

  & > div:nth-of-type(1) {
    background: #faf2ad;
  }

  & > div:nth-of-type(2) {
    background: #e7fcaa;
  }
`;
