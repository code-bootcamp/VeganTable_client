import { useState } from "react";
import Navigation01 from "../../../commons/navigation/01";
import Pagination02 from "../../../commons/pagination/02/Pagination02";
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
      bookmarkCount: 25,
      bookmark: true,
    },
    {
      title: "메뉴 02",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
      commentsCount: 52,
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
      commentsCount: 52,
      bookmarkCount: 25,
      bookmark: true,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "쉬움",
      commentsCount: 52,
      bookmarkCount: 25,
      bookmark: true,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
      commentsCount: 52,
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "쉬움",
      commentsCount: 52,
      bookmarkCount: 25,
      bookmark: true,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
      commentsCount: 52,
      bookmarkCount: 25,
      bookmark: true,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "쉬움",
      commentsCount: 52,
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
      commentsCount: 52,
      bookmarkCount: 25,
      bookmark: true,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
      commentsCount: 52,
      bookmarkCount: 25,
      bookmark: true,
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
      level: "중간",
      commentsCount: 52,
      bookmarkCount: 25,
      bookmark: false,
    },
  ];

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

  const onClickWholeMenu = (el) => () => {
    setIsPicked({ ...isPicked, wholeMenu: el.name });
  };

  const onClickSelectList = (el) => () => {
    setIsPicked({ ...isPicked, selectList: el.name });
  };

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
          {RECIPE_EXAMPLE.map((el, i) => (
            <List.RecipeBox key={i}>
              <List.RecipeImg src={el.image} />
              <List.IconBookmark>
                {el.bookmark ? (
                  <img src="/img/bestRecipe/icon-bookmark-on.svg" />
                ) : (
                  <img src="/img/bestRecipe/icon-bookmark-off.svg" />
                )}
                <span>{el.bookmarkCount}</span>
              </List.IconBookmark>
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
        <Pagination02 />
      </List.Wrapper>
    </List.Container>
  );
}
