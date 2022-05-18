import Pagination01 from "../../../../commons/pagination/01/Pagination01";
import * as Expert from "./ExpertList.styles";

export default function ExpertRecipeList() {
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
    <Expert.Container>
      <Expert.Wrapper>
        <Expert.TitleWrapper>
          <Expert.TitleBar />
          <Expert.Title>전문가 레시피</Expert.Title>
          <Expert.SubTitle>다양한 전문가들의</Expert.SubTitle>
          <Expert.SubTitle>특별한 레시피를 확인해보세요</Expert.SubTitle>
          <Pagination01 />
        </Expert.TitleWrapper>
        <Expert.ListWrapper>
          {RECIPE_EXAMPLE.map((el, i) => (
            <Expert.RecipeBox key={el.title}>
              <Expert.RecipeImg src={el.image} />
              <Expert.RecipeRecommendSticker src="/img/icon/recommend.svg" />
              {el.level === "쉬움" && (
                <Expert.RecipeLevelSticker src="/img/icon/level1.svg" />
              )}
              {el.level === "중간" && (
                <Expert.RecipeLevelSticker src="/img/icon/level2.svg" />
              )}{" "}
              {el.level === "어려움" && (
                <Expert.RecipeLevelSticker src="/img/icon/level3.svg" />
              )}
              <Expert.RecipeTitle>{el.title}</Expert.RecipeTitle>
              <Expert.RecipeSubtitle>{el.subTitle}</Expert.RecipeSubtitle>
            </Expert.RecipeBox>
          ))}
        </Expert.ListWrapper>
      </Expert.Wrapper>
    </Expert.Container>
  );
}
