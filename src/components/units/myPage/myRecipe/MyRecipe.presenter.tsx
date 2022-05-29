import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import MyPageTitleBar from "../../../commons/titleBars/01";
import * as My from "./MyRecipe.styles";

export default function MyRecipeUI(props) {
  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />
        <My.RecentWrapper>
          <MyPageTitleBar title={"등록 레시피 관리"} />
          <My.RecipeWrapper>
            {props.data?.fetchMyRecipe.map((el) => (
              <My.Menu key={el.id}>
                <img
                  src={
                    el.recipesImages
                      ? el.recipesImages.filter((e) => e.mainImage !== " ")
                          .length === 0
                        ? "/img/bestRecipe/img-recipe-01.png"
                        : `https://storage.googleapis.com/${el.recipesImages[0].mainImage}`
                      : "/img/bestRecipe/img-recipe-01.png"
                  }
                />
                <h2>{el.title}</h2>
                <p>{el.summary}</p>
                <p className="date">{el.createdAt.slice(0, 10)}</p>
              </My.Menu>
            ))}
          </My.RecipeWrapper>
        </My.RecentWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
