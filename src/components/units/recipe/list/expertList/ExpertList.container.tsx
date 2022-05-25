import Slider from "react-slick";
import * as Expert from "./ExpertList.styles";

export default function ExpertRecipeList() {
  const RECIPE_EXAMPLE = [
    {
      title: "메뉴 01",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "쉬움",
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 02",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
      bookmarkCount: 25,
      bookmark: true,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 04",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "쉬움",
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 05",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
      bookmarkCount: 25,
      bookmark: true,
    },
    {
      title: "메뉴 06",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 01",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "쉬움",
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 02",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
      bookmarkCount: 25,
      bookmark: true,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 01",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "쉬움",
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 02",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "중간",
      bookmarkCount: 25,
      bookmark: true,
    },
    {
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
      bookmarkCount: 25,
      bookmark: false,
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Expert.Container>
      <Expert.Wrapper>
        <Expert.TitleWrapper>
          <Expert.TitleBar />
          <Expert.Title>전문가 레시피</Expert.Title>
          <Expert.SubTitle>
            다양한 전문가들의 <br />
            특별한 레시피를
            <br /> 확인해보세요
          </Expert.SubTitle>
        </Expert.TitleWrapper>
        <Expert.SliderWrapper>
          <Slider {...settings}>
            {RECIPE_EXAMPLE.map((el, i) => (
              <Expert.ListWrapper key={el.title}>
                <Expert.RecipeBox>
                  <Expert.RecipeImg src={el.image} />
                  <Expert.IconBookmark>
                    {el.bookmark ? (
                      <img src="/img/bestRecipe/icon-bookmark-on.svg" />
                    ) : (
                      <img src="/img/bestRecipe/icon-bookmark-off.svg" />
                    )}
                    <span>{el.bookmarkCount}</span>
                  </Expert.IconBookmark>
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
              </Expert.ListWrapper>
            ))}
          </Slider>
        </Expert.SliderWrapper>
      </Expert.Wrapper>
    </Expert.Container>
  );
}
