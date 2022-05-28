import { useQuery } from "@apollo/client";
import { useState } from "react";
import Navigation01 from "../../../commons/navigation/01";
import Pagination02 from "../../../commons/pagination/02/Pagination02";
import BestRecipeList from "./bestList/BestList.container";
import ExpertRecipeList from "./expertList/ExpertList.container";
import { FETCH_RECIPES, FETCH_USER } from "./RecipeList.queries";
import * as List from "./RecipeList.styles";

export default function RecipeListUI() {
  const WHOLE_MENU_LIST = [{ name: "전체 메뉴" }, { name: "전문가 메뉴" }];

  const MENU_LIST = [
    { name: "최신순" },
    { name: "인기순" },
    { name: "난이도순" },
  ];

  const [isPicked, setIsPicked] = useState({
    wholeMenu: "전체 메뉴",
    selectList: "최신순",
  });

  const { data } = useQuery(FETCH_RECIPES);
  const { data: userData } = useQuery(FETCH_USER);

  const onClickWholeMenu = (el) => () => {
    setIsPicked({ ...isPicked, wholeMenu: el.name });
  };

  const onClickSelectList = (el) => () => {
    setIsPicked({ ...isPicked, selectList: el.name });
  };

  console.log(userData?.fetchUser);

  return (
    <List.Container>
      <List.BannerWrapper>
        <div>
          <img src="/img/banner/recipeList-banner-icon.svg" alt="" />
          <h1>레시피</h1>
          <span>채식 레시피의 모든 것, 채식</span>
        </div>
      </List.BannerWrapper>
      <ExpertRecipeList />
      <BestRecipeList />
      <List.NavigationWrapper>
        <List.NavigationTitle>고객님 맞춤 레시피</List.NavigationTitle>
      </List.NavigationWrapper>
      <Navigation01 />
      <List.Wrapper>
        <List.MenuWrapper>
          <List.WholeListBox>
            {WHOLE_MENU_LIST.map((el, i) => (
              <List.WholeList
                key={i}
                onClick={onClickWholeMenu(el)}
                name={el.name}
                isPicked={isPicked}
              >
                {el.name}
              </List.WholeList>
            ))}
          </List.WholeListBox>
          <List.ListSelectBox>
            {MENU_LIST.map((el, i) => (
              <List.ListSelect
                key={i}
                onClick={onClickSelectList(el)}
                name={el.name}
                isPicked={isPicked}
              >
                {el.name}
              </List.ListSelect>
            ))}
          </List.ListSelectBox>
        </List.MenuWrapper>
        <List.ListWrapper>
          {data?.fetchRecipes.map((el, i) => (
            <List.RecipeBox key={i}>
              <List.RecipeImg
                src={
                  el.recipesImages
                    ? "/img/bestRecipe/img-recipe-01.png"
                    : el.recipesImages.filter((e) => e !== "").length === 0
                    ? "/img/bestRecipe/img-recipe-01.png"
                    : `https://storage.googleapis.com/${el.recipesImages[0]}`
                }
              />
              <List.IconBookmark>
                {el.id === userData?.fetchUser.scrapCount.recipes.id ? (
                  <img src="/img/bestRecipe/icon-bookmark-on.svg" />
                ) : (
                  <img src="/img/bestRecipe/icon-bookmark-off.svg" />
                )}
                <span>{el.scrapCount}</span>
              </List.IconBookmark>
              <List.StickerWrapper>
                {el.scrapCount >= 1 && (
                  <List.RecipeRecommendSticker src="/img/icon/recommend.svg" />
                )}
                {el.level === "SIMPLE" && (
                  <List.RecipeLevelSticker src="/img/icon/level1.svg" />
                )}
                {el.level === "NORMAL" && (
                  <List.RecipeLevelSticker src="/img/icon/level2.svg" />
                )}
                {el.level === "DIFFICULT" && (
                  <List.RecipeLevelSticker src="/img/icon/level3.svg" />
                )}
              </List.StickerWrapper>
              <List.RecipeTitle>{el.title}</List.RecipeTitle>
              <List.RecipeSummary>{el.summary}</List.RecipeSummary>
              <List.RecipeCommentBox>
                <List.RecipeCommentIcon src="/img/icon/comment.svg" />
                <List.RecipeCommentsCount>
                  댓글 수 데이터도 받아야겠는뎅..
                </List.RecipeCommentsCount>
              </List.RecipeCommentBox>
            </List.RecipeBox>
          ))}
        </List.ListWrapper>
        <Pagination02 />
      </List.Wrapper>
    </List.Container>
  );
}
