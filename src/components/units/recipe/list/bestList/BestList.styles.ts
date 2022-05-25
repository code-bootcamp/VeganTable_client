import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  padding: 5.5rem 0;
  background-color: rgba(177, 198, 134, 0.1);
  margin-bottom: 5.5rem;
`;

export const Wrapper = styled.div`
  width: 88rem;
  display: flex;
`;

// 리스트 설명
export const TitleWrapper = styled.div`
  margin-right: 5rem;
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
  width: 14rem;
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
export const SliderWrapper = styled.div`
  width: 80%;

  .slick-slide {
    padding-right: 20px;
  }

  .slick-arrow {
    z-index: 3;
    top: 38%;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .slick-prev {
    left: -4.2rem;
  }

  .slick-next {
    right: -3rem;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 2rem;
    color: #000000;
  }

  .slick-prev:before {
    content: "<";
  }
  .slick-next:before {
    content: ">";
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const RecipeBox = styled.div`
  margin-right: 1.5rem;
  height: auto;
  position: relative;
  cursor: pointer;
  width: 100%;
`;

export const RecipeImg = styled.img`
  border-radius: 2rem;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const IconBookmark = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  right: 1rem;
  top: 20px;
  & > span {
    color: #ffffff;
    font-size: 0.75rem;
  }
`;

export const RecipeRecommendSticker = styled.img`
  position: absolute;
  z-index: 2;
  right: 0px;
  bottom: 130px;
`;

export const RecipeLevelSticker = styled.img`
  position: absolute;
  z-index: 1;
  right: 0px;
  bottom: 70px;
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
