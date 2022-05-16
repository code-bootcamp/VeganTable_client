import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 4.25rem 0;
`;

export const HeadText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > span {
    font-size: 1.375rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #0fbaa3;
  }

  & > h1 {
    padding-top: 8px;
    font-size: 2.25rem;
    font-weight: 400;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.375rem;
  width: 100%;

  & > button {
    padding: 0.81rem 4.125rem;
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: -0.05em;
    background: #f0f0f0;
    border: none;
    cursor: pointer;

    &:first-of-type {
      color: #0fbaa3;
      background: #ffffff;
      border: 1px solid #0fbaa3;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const RecipeItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3.56rem;
`;

export const RecipeItemImageWrapper = styled.div`
  width: 464px;
  height: 464px;
  padding-bottom: 1.81rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 32px;
  }
`;
