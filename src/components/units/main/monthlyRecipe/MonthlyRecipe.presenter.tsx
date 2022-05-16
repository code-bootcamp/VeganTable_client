import * as MonthlyRecipe from "./MonthlyRecipe.styles";

export default function MonthlyRecipeUI() {
  return (
    <MonthlyRecipe.Container>
      <MonthlyRecipe.HeadText>
        <span>MONTHLY RECIPE</span>
        <h1>
          이달의 인기 레시피 <b>P!ck</b>
        </h1>
        <MonthlyRecipe.TagsWrapper>
          <button>#채린이레시피</button>
          <button>#쉬운난이도</button>
          <button>#고기들어간메뉴</button>
          <button>#초대음식</button>
          <button>#칼로리낮은메뉴</button>
          <button>#영양레시피</button>
        </MonthlyRecipe.TagsWrapper>
      </MonthlyRecipe.HeadText>
      <MonthlyRecipe.RecipeItems>
        {[1, 2, 3].map((el) => (
          <div key={`b${el}`}>
            <MonthlyRecipe.RecipeItemImageWrapper>
              <img src="/img/monthlyRecipe/img-monthlyrecipe-item.png" alt="" />
            </MonthlyRecipe.RecipeItemImageWrapper>
            <h1>메뉴01</h1>
          </div>
        ))}
      </MonthlyRecipe.RecipeItems>
    </MonthlyRecipe.Container>
  );
}
