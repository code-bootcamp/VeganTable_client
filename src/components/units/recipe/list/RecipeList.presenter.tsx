import Navigation01 from "../../../commons/navigation/01";
import BestRecipeList from "./bestList/BestList.container";
import ExpertRecipeList from "./expertList/ExpertList.container";
import * as List from "./RecipeList.styles";

export default function RecipeListUI() {
  const RECIPE_EXAMPLE = [
    {
      title: "메뉴 01",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "쉬움",
      commentsCount: 52,
    },
    {
      title: "메뉴 02",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
      commentsCount: 52,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
      commentsCount: 52,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "쉬움",
      commentsCount: 52,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
      commentsCount: 52,
    },
  ];
  return (
    <List.Container>
      <List.Banner src="/img/banner/banner-recipeList.png" />
      <ExpertRecipeList />
      <BestRecipeList />
      <List.NavigationWrapper>
        <List.NavigationTitle>고객님 맞춤 레시피</List.NavigationTitle>
        <Navigation01 />
      </List.NavigationWrapper>
      <List.Wrapper>
        <List.MenuWrapper>
          <List.WholeList>전체 메뉴</List.WholeList>
          <List.ListSelectBox>
            <List.ListSelect>최신순</List.ListSelect>
            <List.ListSelect>인기순</List.ListSelect>
            <List.ListSelect>전문가 메뉴</List.ListSelect>
            <List.ListSelect>난이도순</List.ListSelect>
          </List.ListSelectBox>
        </List.MenuWrapper>
        <List.ListWrapper>
          {RECIPE_EXAMPLE.map((el, i) => (
            <List.RecipeBox key={el.title}>
              <List.RecipeImg src={el.image} />
              <List.RecipeRecommendSticker src="/img/icon/recommend.svg" />
              {el.level === "쉬움" && (
                <List.RecipeLevelSticker src="/img/icon/level1.svg" />
              )}
              {el.level === "중간" && (
                <List.RecipeLevelSticker src="/img/icon/level2.svg" />
              )}{" "}
              {el.level === "어려움" && (
                <List.RecipeLevelSticker src="/img/icon/level3.svg" />
              )}
              <List.RecipeTitle>{el.title}</List.RecipeTitle>
              <List.RecipeSubtitle>{el.subTitle}</List.RecipeSubtitle>
              <List.RecipeCommentBox>
                <List.RecipeCommentIcon src="/img/icon/comment.svg" />
                <List.RecipeCommentsCount>
                  {el.commentsCount}
                </List.RecipeCommentsCount>
              </List.RecipeCommentBox>
            </List.RecipeBox>
          ))}
        </List.ListWrapper>
      </List.Wrapper>
    </List.Container>
  );
}
