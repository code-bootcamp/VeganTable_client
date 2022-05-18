import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  padding: 5.5rem 0;
`;

export const Wrapper = styled.div`
  width: 75%;
  display: flex;
  /* justify-content: center; */
`;

// 리스트 설명
export const TitleWrapper = styled.div`
  margin-right: 6rem;
`;

export const TitleBar = styled.div`
  width: 2.8125rem;
  border-top: 5px solid black;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 2.25rem;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  color: #737373;
  margin-bottom: 5px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;
// 리스트 부분
export const ListWrapper = styled.div`
  display: flex;
`;

export const RecipeBox = styled.div`
  margin-right: 1.5rem;
  height: auto;
  position: relative;
`;

export const RecipeImg = styled.img`
  border-radius: 2rem;
  width: 21.375rem;
  height: 21.375rem;
  margin-bottom: 1.5rem;
`;

export const RecipeRecommendSticker = styled.img`
  position: absolute;
  z-index: 2;
  right: 0px;
  bottom: 140px;
`;
export const RecipeLevelSticker = styled.img`
  position: absolute;
  z-index: 1;
  right: 0px;
  bottom: 80px;
`;

export const RecipeTitle = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const RecipeSubtitle = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(38, 38, 38, 0.6);
`;
