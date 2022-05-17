import ViewAllButton from "../../../commons/buttons/viewAll";
import * as BestRecipe from "./BestRecipe.styles";

export default function BestRecipeUI() {
  return (
    <BestRecipe.Container>
      <BestRecipe.Wrapper>
        <BestRecipe.RecommendRecipeHead>
          <BestRecipe.HeadText>
            <span>BEST RECIPE</span>
            <h1>
              채식한상이 추천하는 <b>레시피</b>
            </h1>
          </BestRecipe.HeadText>
          <ViewAllButton title="전체보기" />
        </BestRecipe.RecommendRecipeHead>
        <BestRecipe.RecommendRecipeItems>
          {[1, 2, 3, 4].map((el) => (
            <BestRecipe.RecipeItem key={`a${el}`}>
              <BestRecipe.RecipeItemImageWrapper>
                <BestRecipe.IconBookmark>
                  {el % 2 === 1 ? (
                    <img src="/img/bestRecipe/icon-bookmark-on.svg" />
                  ) : (
                    <img src="/img/bestRecipe/icon-bookmark-off.svg" />
                  )}
                  <span>{el % 2 === 1 ? "+999" : "24"}</span>
                </BestRecipe.IconBookmark>
                <img src="/img/bestRecipe/img-recipe-01.png" />
              </BestRecipe.RecipeItemImageWrapper>
              <BestRecipe.RecipeItemTextWrapper>
                <h1>메뉴 01</h1>
                <p>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</p>
                <BestRecipe.Tags>
                  <BestRecipe.TagVegan>비건</BestRecipe.TagVegan>
                  <BestRecipe.TagLacto>락토</BestRecipe.TagLacto>
                  <BestRecipe.TagPesco>페스코</BestRecipe.TagPesco>
                  <BestRecipe.TagPollo>폴로</BestRecipe.TagPollo>
                  <BestRecipe.TagOvo>오보</BestRecipe.TagOvo>
                  <BestRecipe.TagLactoOvo>락토오보</BestRecipe.TagLactoOvo>
                </BestRecipe.Tags>
              </BestRecipe.RecipeItemTextWrapper>
            </BestRecipe.RecipeItem>
          ))}
        </BestRecipe.RecommendRecipeItems>
      </BestRecipe.Wrapper>
    </BestRecipe.Container>
  );
}
