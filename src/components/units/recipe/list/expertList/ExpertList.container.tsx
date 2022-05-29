import Slider from "react-slick";
import * as Expert from "./ExpertList.styles";

export default function ExpertRecipeList(props) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const isProRecipes = props.data?.fetchRecipes.filter(
    (e) => e.user.isPro === "PRO"
  );

  return (
    <Expert.Container>
      <Expert.Wrapper>
        <Expert.TitleWrapper>
          <Expert.TitleBar />
          <Expert.Title>전문가 레시피</Expert.Title>
          <Expert.SubTitle>
            다양한 전문가들의 특별한 레시피를 확인해보세요
          </Expert.SubTitle>
        </Expert.TitleWrapper>
        <Expert.SliderWrapper>
          <Slider {...settings}>
            {isProRecipes?.map((el, i) => (
              <Expert.ListWrapper key={i}>
                <Expert.RecipeBox>
                  <Expert.RecipeImg
                    src={
                      el.recipesImages
                        ? el.recipesImages.filter((e) => e.mainImage !== " ")
                            .length === 0
                          ? "/img/bestRecipe/img-recipe-01.png"
                          : `https://storage.googleapis.com/${el.recipesImages[0].mainImage}`
                        : "/img/bestRecipe/img-recipe-01.png"
                    }
                  />
                  <Expert.IconBookmark>
                    {el.id ===
                    props.userData?.fetchUser.scrapCount.recipes.id ? (
                      <img src="/img/bestRecipe/icon-bookmark-on.svg" />
                    ) : (
                      <img src="/img/bestRecipe/icon-bookmark-off.svg" />
                    )}
                    <span>{el.scrapCount}</span>
                  </Expert.IconBookmark>
                  <Expert.StickerWrapper>
                    {el.scrapCount >= 1 && (
                      <Expert.RecipeRecommendSticker src="/img/icon/recommend.svg" />
                    )}
                    {el.scrapCount === 0 && (
                      <Expert.RecipeRecommendStickerHidden src="/img/icon/recommend.svg" />
                    )}
                    {el.level === "SIMPLE" && (
                      <Expert.RecipeLevelSticker src="/img/icon/level1.svg" />
                    )}
                    {el.level === "NORMAL" && (
                      <Expert.RecipeLevelSticker src="/img/icon/level2.svg" />
                    )}
                    {el.level === "DIFFICULT" && (
                      <Expert.RecipeLevelSticker src="/img/icon/level3.svg" />
                    )}
                  </Expert.StickerWrapper>
                  <Expert.RecipeTitle>{el.title}</Expert.RecipeTitle>
                  <Expert.RecipeSubtitle>{el.summary}</Expert.RecipeSubtitle>
                  <Expert.RecipeCommentBox>
                    <Expert.RecipeCommentIcon src="/img/icon/comment.svg" />
                    <Expert.RecipeCommentsCount>
                      댓글 수 데이터도 받아야겠는뎅..
                    </Expert.RecipeCommentsCount>
                  </Expert.RecipeCommentBox>
                </Expert.RecipeBox>
              </Expert.ListWrapper>
            ))}
          </Slider>
        </Expert.SliderWrapper>
      </Expert.Wrapper>
    </Expert.Container>
  );
}
