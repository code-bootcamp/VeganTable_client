import Slider from "react-slick";
import * as Best from "./BestList.styles";

export default function BestRecipeList() {
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
      level: "어려움",
      bookmarkCount: 25,
      bookmark: false,
    },
    {
      title: "메뉴 05",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
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
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
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
      title: "메뉴 03",
      subTitle: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사",
      image: "/img/recipeList/recipeExample.png",
      level: "어려움",
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
    <Best.Container>
      <Best.Wrapper>
        <Best.TitleWrapper>
          <Best.TitleBar />
          <Best.Title>인기 레시피</Best.Title>
          <Best.SubTitle>
            많은 찜하기를 받은 이달의 레시피를 확인해보세요
          </Best.SubTitle>
        </Best.TitleWrapper>
        <Best.SliderWrapper>
          <Slider {...settings}>
            {RECIPE_EXAMPLE.map((el, i) => (
              <Best.ListWrapper key={el.title}>
                <Best.RecipeBox>
                  <Best.RecipeImg src={el.image} />
                  <Best.IconBookmark>
                    {el.bookmark ? (
                      <img src="/img/bestRecipe/icon-bookmark-on.svg" />
                    ) : (
                      <img src="/img/bestRecipe/icon-bookmark-off.svg" />
                    )}
                    <span>{el.bookmarkCount}</span>
                  </Best.IconBookmark>
                  <Best.StickerWrapper>
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
                  </Best.StickerWrapper>
                  <Best.RecipeTitle>{el.title}</Best.RecipeTitle>
                  <Best.RecipeSubtitle>{el.subTitle}</Best.RecipeSubtitle>
                  <Best.RecipeCommentBox>
                    <Best.RecipeCommentIcon src="/img/icon/comment.svg" />
                    <Best.RecipeCommentsCount>
                      댓글 수 데이터도 받아야겠는뎅..
                    </Best.RecipeCommentsCount>
                  </Best.RecipeCommentBox>
                </Best.RecipeBox>
              </Best.ListWrapper>
            ))}
          </Slider>
        </Best.SliderWrapper>
      </Best.Wrapper>
    </Best.Container>
  );
}
