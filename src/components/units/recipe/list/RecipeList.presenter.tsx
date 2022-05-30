import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navigation01 from "../../../commons/navigation/01";
import Pagination02 from "../../../commons/pagination/02/Pagination02";
import BestRecipeList from "./bestList/BestList.container";
import ExpertRecipeList from "./expertList/ExpertList.container";
import RecipeListItem from "./RecipeList.presenterItem";
import {
  FETCH_MY_SCRAPS_HISTORY,
  FETCH_POPULAR_RECIPES,
  FETCH_RECIPES,
  FETCH_RECIPE_TYPES,
  FETCH_RECIPE_TYPES_POPULAR,
  FETCH_USER,
} from "./RecipeList.queries";
import * as List from "./RecipeList.styles";

export default function RecipeListUI() {
  const router = useRouter();
  const WHOLE_MENU_LIST = [{ name: "전체 메뉴" }, { name: "전문가 메뉴" }];
  const [myScraps, setMyScraps] = useState([]);

  const MENU_LIST = [{ name: "최신순" }, { name: "인기순" }];

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
  const { data: myScrapsData } = useQuery(FETCH_MY_SCRAPS_HISTORY, {
    variables: { user_id: String(userData?.fetchUser?.user_id) },
  });
  const { data: popularData } = useQuery(FETCH_POPULAR_RECIPES);
  const { data: typesPopularData } = useQuery(FETCH_RECIPE_TYPES_POPULAR, {
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

  const onClickMoveToDetail = (el) => (e) => {
    router.push(`/recipe/${e.currentTarget.id}`);
    const recent = JSON.parse(localStorage.getItem("recent") || "[]");
    const { __typename, ...newEl } = el;
    recent.push(newEl);
    localStorage.setItem("recent", JSON.stringify(recent));
  };
  // 전체 > 전문가 필터
  const isProRecipes = data?.fetchRecipes.filter(
    (e) => e.user.isPro === "PRO"
  ) || [""];
  // 타입 > 전문가 필터
  const isProRecipesType = typesData?.fetchRecipeTypes.filter(
    (e) => e.user.isPro === "PRO"
  ) || [""];

  // 전체 > 전체 > 인기순
  const wholeWholePopular = popularData?.fetchPopularRecipes;
  // 전체 > 전문가 > 인기순
  const tempWholeProPopular = [...isProRecipes];
  const wholeProPopular = tempWholeProPopular?.sort(
    (a, b) => b.scrapCount - a.scrapCount
  );
  // ===========================================================================

  // 타입 > 전체 > 인기순
  const typeWholePopular = typesPopularData?.fetchRecipeTypesPopular;
  // 타입 >  인기순 > 전문가
  const typePopularIsPro = typesPopularData?.fetchRecipeTypesPopular.filter(
    (e) => e.user.isPro === "PRO"
  );

  // 최신순, 인기순 난이도순 필터
  useEffect(() => {
    if (router.query.type) {
      const a = router.query.type;
      setSelectedTypes(a);
    }
    myScrapsData?.fetchMyScrapHistory.map((el) => {
      const { __typename, ...newMyScraps } = el;
      setMyScraps((prev) => [...prev, newMyScraps.id]);
    });
  }, [myScrapsData, router.query.type]);

  const lastPage = Math.ceil(data?.fetchRecipes.length / 12);

  return (
    <List.Container>
      <List.BannerWrapper>
        <div>
          <img src="/img/banner/recipeList-banner-icon.svg" alt="" />
          <h1>레시피</h1>
          <span>채식 레시피의 모든 것, 채식 한상과 함께 해보세요</span>
        </div>
      </List.BannerWrapper>
      <ExpertRecipeList
        userData={userData}
        data={data}
        myScraps={myScraps}
        onClickMoveToDetail={onClickMoveToDetail}
      />
      <BestRecipeList
        popularData={popularData}
        myScraps={myScraps}
        onClickMoveToDetail={onClickMoveToDetail}
      />
      <List.NavigationWrapper>
        <List.NavigationTitle>고객님 맞춤 레시피</List.NavigationTitle>
      </List.NavigationWrapper>
      <Navigation01
        setSelectedTypes={setSelectedTypes}
        selectedTypes={selectedTypes}
      />
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
        {/* %%%%%%%%%%%%%%% 리스트 부분 %%%%%%%%%%%%%%% */}
        <List.ListWrapper>
          {selectedTypes === "NON_CHECKED"
            ? // 전체
              isPicked.wholeMenu === "전문가 메뉴"
              ? // 전체 > 전문가
                isPicked.selectList === "인기순"
                ? // 전체 > 전문가 > 인기
                  wholeProPopular?.map((el, i) => (
                    <RecipeListItem
                      key={i}
                      userData={userData}
                      el={el}
                      onClickMoveToDetail={onClickMoveToDetail(el)}
                      myScraps={myScraps}
                    />
                  ))
                : // 전체 > 전문가 > 최신
                  isProRecipes?.map((el, i) => (
                    <RecipeListItem
                      key={i}
                      userData={userData}
                      el={el}
                      onClickMoveToDetail={onClickMoveToDetail(el)}
                      myScraps={myScraps}
                    />
                  ))
              : // 전체 > 전체
              isPicked.selectList === "인기순"
              ? // 전체 > 전체 > 인기
                wholeWholePopular?.map((el, i) => (
                  <RecipeListItem
                    key={i}
                    userData={userData}
                    el={el}
                    onClickMoveToDetail={onClickMoveToDetail(el)}
                    myScraps={myScraps}
                  />
                ))
              : // 전체 > 전체 > 최신
                data?.fetchRecipes.map((el, i) => (
                  <RecipeListItem
                    key={i}
                    userData={userData}
                    el={el}
                    onClickMoveToDetail={onClickMoveToDetail(el)}
                    myScraps={myScraps}
                  />
                ))
            : // ===========타입 지정됨 ===============
            isPicked.wholeMenu === "전문가 메뉴"
            ? // 타입 > 전문가
              isPicked.selectList === "인기순"
              ? // 타입 > 전문가 > 인기
                typePopularIsPro.map((el, i) => (
                  <RecipeListItem
                    key={i}
                    userData={userData}
                    el={el}
                    onClickMoveToDetail={onClickMoveToDetail(el)}
                    myScraps={myScraps}
                  />
                ))
              : // 타입 > 전문가 > 최신
                isProRecipesType?.map((el, i) => (
                  <RecipeListItem
                    key={i}
                    userData={userData}
                    el={el}
                    onClickMoveToDetail={onClickMoveToDetail(el)}
                    myScraps={myScraps}
                  />
                ))
            : // 타입 > 전체
            isPicked.selectList === "인기순"
            ? // 타입 > 전체 > 인기
              typeWholePopular?.map((el, i) => (
                <RecipeListItem
                  key={i}
                  userData={userData}
                  el={el}
                  onClickMoveToDetail={onClickMoveToDetail(el)}
                  myScraps={myScraps}
                />
              ))
            : // 타입 > 전체 > 최신
              typesData?.fetchRecipeTypes.map((el, i) => (
                <RecipeListItem
                  key={i}
                  userData={userData}
                  el={el}
                  onClickMoveToDetail={onClickMoveToDetail(el)}
                  myScraps={myScraps}
                />
              ))}
        </List.ListWrapper>
        <Pagination02 lastPage={lastPage} />
      </List.Wrapper>
    </List.Container>
  );
}
