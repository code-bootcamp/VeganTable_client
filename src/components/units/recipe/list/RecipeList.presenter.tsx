import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import Navigation01 from "../../../commons/navigation/01";
import Pagination02 from "../../../commons/pagination/02/Pagination02";
import BestRecipeList from "./bestList/BestList.container";
import ExpertRecipeList from "./expertList/ExpertList.container";
import RecipeListItem from "./RecipeList.presenterItem";
import {
  FETCH_RECIPES,
  FETCH_RECIPE_TYPES,
  FETCH_USER,
} from "./RecipeList.queries";
import * as List from "./RecipeList.styles";

export default function RecipeListUI() {
  const router = useRouter();
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

  const [selectedTypes, setSelectedTypes] = useState("NON_CHECKED");

  const { data } = useQuery(FETCH_RECIPES);
  const { data: userData } = useQuery(FETCH_USER);
  const { data: typesData } = useQuery(FETCH_RECIPE_TYPES, {
    variables: {
      vegan_types: selectedTypes,
    },
  });

  const onClickWholeMenu = (el) => () => {
    setIsPicked({ ...isPicked, wholeMenu: el.name });
  };

  const onClickSelectList = (el) => () => {
    setIsPicked({ ...isPicked, selectList: el.name });
  };

  const onClickMoveToDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/recipe/${e.currentTarget.id}`);
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
      <ExpertRecipeList userData={userData} data={data} />
      <BestRecipeList />
      <List.NavigationWrapper>
        <List.NavigationTitle>고객님 맞춤 레시피</List.NavigationTitle>
      </List.NavigationWrapper>
      <Navigation01 setSelectedTypes={setSelectedTypes} />
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
        {/* 리스트 부분 */}
        <List.ListWrapper>
          {selectedTypes === "NON_CHECKED"
            ? data?.fetchRecipes.map((el, i) => (
                <RecipeListItem
                  key={i}
                  userData={userData}
                  el={el}
                  onClickMoveToDetail={onClickMoveToDetail}
                />
              ))
            : typesData?.fetchRecipeTypes.map((el, i) => (
                <RecipeListItem
                  key={i}
                  userData={userData}
                  el={el}
                  onClickMoveToDetail={onClickMoveToDetail}
                />
              ))}
        </List.ListWrapper>
        <Pagination02 />
      </List.Wrapper>
    </List.Container>
  );
}
