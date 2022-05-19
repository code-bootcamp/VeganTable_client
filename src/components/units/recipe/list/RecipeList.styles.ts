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
  width: 90rem;
  display: flex;
  flex-direction: column;
`;

export const NavigationWrapper = styled.div`
  width: 90rem;
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
  margin-bottom: 4rem;
  font-size: 1.3rem;
`;

export const WholeListBox = styled.ul`
  display: flex;
`;

export const WholeList = styled.li`
  font-weight: 500;
  cursor: pointer;
  border-right: 1px solid black;
  padding-right: 1rem;
  margin-right: 1rem;
  color: ${(props) =>
    props?.name === props?.isPicked.wholeMenu ? "#0FBAA3" : "black"};
  &:last-of-type {
    border-right: 0;
    margin-right: 0;
  }
`;

export const ListSelectBox = styled.ul`
  display: flex;
`;

export const ListSelect = styled.li`
  border-right: 1px solid #c4c4c4;
  padding-right: 1rem;
  margin-right: 1rem;
  font-weight: 500;
  color: ${(props) =>
    props?.name === props?.isPicked.selectList
      ? "#0FBAA3"
      : "rgba(0, 0, 0, 0.5)"};
  cursor: pointer;
  &:last-of-type {
    border-right: 0;
    margin-right: 0;
  }
`;
// 리스트 부분
export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const RecipeBox = styled.div`
  height: auto;
  position: relative;
  margin-bottom: 3rem;
  width: 25%;
`;

export const RecipeImg = styled.img`
  border-radius: 2rem;
  width: 21.375rem;
  height: 21.375rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

export const IconBookmark = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  right: 2.2rem;
  top: 20px;
  & > span {
    color: #ffffff;
    font-size: 0.75rem;
  }
`;

export const RecipeRecommendSticker = styled.img`
  position: absolute;
  z-index: 2;
  right: 1rem;
  bottom: 200px;
`;
export const RecipeLevelSticker = styled.img`
  position: absolute;
  z-index: 1;
  right: 1rem;
  bottom: 135px;
`;

export const RecipeTitle = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const RecipeSubtitle = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(38, 38, 38, 0.6);
  margin-bottom: 1.5rem;
  cursor: pointer;
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
