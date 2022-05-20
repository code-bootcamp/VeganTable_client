import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 585px;
  & > h2 {
    text-align: center;
    font-weight: 500;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const ReviewImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 3.25rem;
  border-bottom: 1px solid #c4c4c4;

  & > div {
    border-radius: 2rem;
    padding-right: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.55rem 1rem;
  background: #ffffff;
  border-radius: 50%;
  font-size: 1.5rem;
  color: #464646;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
  border-bottom: 1px solid #c4c4c4;
`;

export const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    word-break: keep-all;
    color: #848484;

    & > span {
      padding: 0 5px;
      font-size: 0.75rem;
    }

    & > span:nth-of-type(2) {
      color: #0fbaa3;
    }

    & > span:nth-of-type(n + 2) {
      border-left: 1px solid #848484;
    }
  }
`;

export const Recommend = styled.div`
  color: #848484;
`;

export const Pagination = styled.div`
  padding: 2.5rem 0;
`;
