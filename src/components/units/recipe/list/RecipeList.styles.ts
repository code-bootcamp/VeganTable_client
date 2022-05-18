import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const NavigationWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavigationTitle = styled.h2`
  width: 100%;
  display: flex;
  font-weight: 600;
  font-size: 2.25rem;
`;

// 전체 리스트 부분
export const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const WholeList = styled.li`
  font-weight: 600;
`;
export const ListSelectBox = styled.ul`
  display: flex;
`;
export const ListSelect = styled.li`
  border-right: 1px solid #c4c4c4;
  padding-right: 1rem;
  margin-right: 1rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  &:last-of-type {
    border-right: 0;
    margin-right: 0;
  }
`;

// 리스트 부분
export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RecipeBox = styled.div`
  margin-right: 1.5rem;
  height: auto;
  position: relative;
  margin-bottom: 3rem;
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
  bottom: 180px;
`;
export const RecipeLevelSticker = styled.img`
  position: absolute;
  z-index: 1;
  right: 0px;
  bottom: 120px;
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
  margin-bottom: 1.5rem;
`;

export const RecipeCommentBox = styled.ul`
  display: flex;
  align-items: center;
`;

export const RecipeCommentIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

export const RecipeCommentsCount = styled.li`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;
