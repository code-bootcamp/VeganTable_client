import Pagination01 from "../../../../commons/pagination/01/Pagination01";
import * as Best from "./BestList.styles";

export default function BestRecipeList() {
  const RECIPE_EXAMPLE = [
    {
      title: "메뉴 01",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "쉬움",
    },
    {
      title: "메뉴 02",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
    },
  ];
  return (
    <Best.Container>
      <Best.Wrapper>
        <Best.TitleWrapper>
          <Best.TitleBar />
          <Best.Title>인기 레시피</Best.Title>
          <Best.SubTitle>이달의 가장 많은 좋아요를 받은</Best.SubTitle>
          <Best.SubTitle>레시피를 확인해보세요</Best.SubTitle>
          <Pagination01 />
        </Best.TitleWrapper>
        <Best.ListWrapper>
          {RECIPE_EXAMPLE.map((el, i) => (
            <Best.RecipeBox key={el.title}>
              <Best.RecipeImg src={el.image} />
              <Best.RecipeRecommendSticker src="/img/icon/recommend.svg" />
              {el.level === "쉬움" && (
                <Best.RecipeLevelSticker src="/img/icon/level1.svg" />
              )}
              {el.level === "중간" && (
                <Best.RecipeLevelSticker src="/img/icon/level2.svg" />
              )}{" "}
              {el.level === "어려움" && (
                <Best.RecipeLevelSticker src="/img/icon/level3.svg" />
              )}
              <Best.RecipeTitle>{el.title}</Best.RecipeTitle>
              <Best.RecipeSubtitle>{el.subTitle}</Best.RecipeSubtitle>
            </Best.RecipeBox>
          ))}
        </Best.ListWrapper>
      </Best.Wrapper>
    </Best.Container>
  );
}
