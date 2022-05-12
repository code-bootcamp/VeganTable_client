import * as List from "./RecipeList.styles";

export default function RecipeListUI() {
  return (
    <List.Container>
      <List.Wrapper>
        <List.RecommendRecipeHead>
          <div>
            <span>BEST RECIPE</span>
            <h1>
              <span>채식한상이 추천하는 </span>레시피
            </h1>
          </div>
          <button>
            전체보기
            <img src="/img/recipeList/icon-arrow-right.svg" />
          </button>
        </List.RecommendRecipeHead>
        <List.RecommendRecipeItems>
          {[1, 2, 3, 4].map((el) => (
            <List.RecipeItem key={`a${el}`}>
              <List.RecipeItemImageWrapper>
                <img src="/img/recipeList/img-recipe-01.png" />
              </List.RecipeItemImageWrapper>
              <List.RecipeItemTextWrapper>
                <h1>메뉴 01</h1>
                <p>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</p>
                <List.Tags>
                  <List.TagVegan>비건</List.TagVegan>
                  <List.TagLacto>락토</List.TagLacto>
                  <List.TagPesco>페스코</List.TagPesco>
                  <List.TagPollo>폴로</List.TagPollo>
                  <List.TagOvo>오보</List.TagOvo>
                  <List.TagLactoOvo>락토오보</List.TagLactoOvo>
                </List.Tags>
              </List.RecipeItemTextWrapper>
            </List.RecipeItem>
          ))}
        </List.RecommendRecipeItems>
      </List.Wrapper>
    </List.Container>
  );
}
