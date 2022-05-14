import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding-bottom: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RecommendRecipeHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3.5rem;
  width: 100%;

  & > div > span {
    padding-bottom: 0.5rem;
    font-size: 1.375rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: #0fbaa3;
  }

  & > div > h1 > span {
    font-weight: 500;
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.9rem 1.56rem;
    font-size: 1.375rem;
    color: #c4c4c4;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 2px;
    cursor: pointer;

    img {
      padding-left: 6px;
    }
  }
`;

export const RecommendRecipeItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const RecipeItem = styled.div`
  padding-right: 1.68rem;
  &:last-of-type {
    padding-right: 0;
  }

  h1 {
    font-weight: 600;
  }

  p {
    font-size: 0.85rem;
    color: #262626;
  }
`;

export const RecipeItemImageWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const IconBookmark = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  height: 2rem;
  transform: translate(-10%, 40%);

  & > span {
    color: #ffffff;
    font-size: 0.75rem;
  }
`;

// 태그 : 비건 타입 [start]
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 2px 1.2rem;
  border-radius: 1rem;
  margin-right: 4px;
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 0.875rem;

  &:nth-of-type(4n) {
    margin-right: 0;
  }

  &:nth-of-type(n + 5) {
    margin-bottom: 0;
  }
`;

export const TagVegan = styled(Tag)`
  background: #0fbaa3;
`;
export const TagLacto = styled(Tag)`
  background: #cee135;
`;
export const TagOvo = styled(Tag)`
  background: #fcd921;
`;
export const TagLactoOvo = styled(Tag)`
  background: #b991fa;
`;
export const TagPesco = styled(Tag)`
  background: #ef7c90;
`;
export const TagPollo = styled(Tag)`
  background: #fe974d;
`;
// 태그 : 비건 타입 [end]

export const RecipeItemTextWrapper = styled.div`
  & > h1 {
    font-weight: 500;
    padding-top: 2rem;
  }

  & > p {
    padding-top: 0.5rem;
  }

  & > div {
    padding-top: 2rem;
  }
`;
