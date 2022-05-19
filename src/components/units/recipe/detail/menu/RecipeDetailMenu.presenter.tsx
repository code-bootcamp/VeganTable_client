import * as DetailMenu from "./RecipeDetailMenu.styles";

export default function RecipeDetailMenuUI() {
  return (
    <DetailMenu.Container>
      <DetailMenu.Wrapper>
        <DetailMenu.MenuTitle>메뉴 01</DetailMenu.MenuTitle>
        <DetailMenu.MenuRemarks>
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 <br />
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사
        </DetailMenu.MenuRemarks>

        <DetailMenu.Tags>
          <DetailMenu.TagVegan>비건</DetailMenu.TagVegan>
          <DetailMenu.TagLacto>락토</DetailMenu.TagLacto>
          <DetailMenu.TagPesco>페스코</DetailMenu.TagPesco>
        </DetailMenu.Tags>

        <DetailMenu.RecipeInfoWrapper>
          <DetailMenu.RecipeInfoItem>
            <DetailMenu.RecipeInfoTop>
              <img src="/img/recipeDetail/icon-stopwatch.svg" alt="" />
              <span>조리시간</span>
            </DetailMenu.RecipeInfoTop>
            <DetailMenu.RecipeInfoBottom>20분</DetailMenu.RecipeInfoBottom>
          </DetailMenu.RecipeInfoItem>

          <DetailMenu.RecipeInfoItem>
            <DetailMenu.RecipeInfoTop>
              <img src="/img/recipeDetail/icon-star.svg" alt="" />
              <span>난이도</span>
            </DetailMenu.RecipeInfoTop>
            <DetailMenu.RecipeInfoBottom>쉬움</DetailMenu.RecipeInfoBottom>
          </DetailMenu.RecipeInfoItem>

          <DetailMenu.RecipeInfoItem>
            <DetailMenu.RecipeInfoTop>
              <img src="/img/recipeDetail/icon-smile.svg" alt="" />
              <span>분량</span>
            </DetailMenu.RecipeInfoTop>
            <DetailMenu.RecipeInfoBottom>2인분</DetailMenu.RecipeInfoBottom>
          </DetailMenu.RecipeInfoItem>
        </DetailMenu.RecipeInfoWrapper>

        <DetailMenu.RecipeTags>
          <span>#쉬운레시피</span>
          <span>#쉬운레시피</span>
          <span>#쉬운레시피</span>
          <span>#쉬운레시피</span>
          <span>#쉬운레시피</span>
          <span>#쉬운레시피</span>
        </DetailMenu.RecipeTags>

        <DetailMenu.RecipeInfoButtons>
          <DetailMenu.PickedButton>찜하기</DetailMenu.PickedButton>
          <DetailMenu.ShareButton>
            <img src="/img/recipeDetail/icon-share.svg" alt="공유하기" />
          </DetailMenu.ShareButton>
        </DetailMenu.RecipeInfoButtons>

        <DetailMenu.CommentContainer>
          <DetailMenu.CommentWrapper>
            <p>
              동해물과 백두산이 마르고 닳도록 하느님이 보우하사 동해물과
              백두산이 마르고 닳도록 하느님이 보우하사
            </p>
            <DetailMenu.CommentUserInfo>
              <span>iamye****</span>
              <span>2일전</span>
            </DetailMenu.CommentUserInfo>
          </DetailMenu.CommentWrapper>

          <DetailMenu.CommentWrapper>
            <p>
              동해물과 백두산이 마르고 닳도록 하느님이 보우하사 동해물과
              백두산이 마르고 닳도록 하느님이 보우하사
            </p>
            <DetailMenu.CommentUserInfo>
              <span>iamye****</span>
              <span>2일전</span>
            </DetailMenu.CommentUserInfo>
          </DetailMenu.CommentWrapper>
        </DetailMenu.CommentContainer>
      </DetailMenu.Wrapper>
    </DetailMenu.Container>
  );
}
