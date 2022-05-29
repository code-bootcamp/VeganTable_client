import * as List from "./RecipeList.styles";

export default function RecipeListItem(props) {
  const el = props.el;
  return (
    <List.RecipeBox id={el.id} onClick={props?.onClickMoveToDetail}>
      <List.RecipeImg
        src={
          el.recipesImages
            ? el.recipesImages.filter((e) => e.url !== "").length === 0
              ? "/img/bestRecipe/img-recipe-01.png"
              : `https://storage.googleapis.com/${el.recipesImages[0].url}`
            : "/img/bestRecipe/img-recipe-01.png"
        }
      />
      <List.IconBookmark>
        {el.id === props.userData?.fetchUser.scrapCount.recipes.id ? (
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
  );
}
