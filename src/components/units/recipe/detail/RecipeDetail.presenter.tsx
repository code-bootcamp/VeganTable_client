import RecipeDetailMenu from "./menu/RecipeDetailMenu.container";
import * as RecipeDetail from "./RecipeDetail.styles";
import Slider01 from "../../../../components/commons/sliders/01";
import RecipeReview from "../detail/review/RecipeReview.container";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

export default function RecipeDetailUI(props) {
  const router = useRouter();

  return (
    <>
      <RecipeDetail.Container>
        <RecipeDetail.MenuWrapper>
          <RecipeDetailMenu />
        </RecipeDetail.MenuWrapper>
        <RecipeDetail.Wrapper>
          <RecipeDetail.TopWrapper>
            <RecipeDetail.BackButton
              type="button"
              onClick={() => router.push("/recipe")}
            >
              <img src="/img/recipeDetail/icon-arrow-left.svg" alt="" />
              목록으로
            </RecipeDetail.BackButton>
            <RecipeDetail.SliderWrapper>
              <Slider01 />
            </RecipeDetail.SliderWrapper>
          </RecipeDetail.TopWrapper>

          <RecipeDetail.Navigation>
            <li
              className={`${props.tabActive[0]}`}
              onClick={props.onClickIngredientTab}
            >
              준비재료
            </li>
            <li
              className={`${props.tabActive[1]}`}
              onClick={props.onClickCookOrderTab}
            >
              요리순서
            </li>
            <li
              className={`${props.tabActive[2]}`}
              onClick={props.onClickReviewTab}
            >
              댓글(10)
            </li>
          </RecipeDetail.Navigation>

          <RecipeDetail.Contents>
            <h2 ref={props.ingredientTabRef}>준비재료</h2>
            <RecipeDetail.Ingredient>
              {props.recipeData?.fetchRecipe?.ingredients
                .map((el) => el.name)
                .map((el) => (
                  <span key={uuidv4()}>{el}</span>
                ))}
            </RecipeDetail.Ingredient>
            <h2 ref={props.cookOrderTabRef} onClick={props.onClickCookOrderTab}>
              요리순서
            </h2>
            {props.recipeData?.fetchRecipe?.recipesImages
              .map((el) => el.url)
              .map((el, index) => (
                <RecipeDetail.Order key={uuidv4()}>
                  <span>Step {index + 1}</span>
                  <RecipeDetail.ImageWrapper>
                    {el !== "" ? (
                      <img src={`https://storage.googleapis.com/${el}`} />
                    ) : (
                      <div></div>
                    )}
                  </RecipeDetail.ImageWrapper>

                  <p>
                    멸치를 넣고 공간이 넉넉한 접시 준비 잔멸치와 견과류,
                    <br />
                    포도씨유를 넣고 잘 섞어주세요. 전자레인지에 1분간
                    <br />
                    조리해주세요.
                  </p>
                </RecipeDetail.Order>
              ))}
          </RecipeDetail.Contents>
          <div ref={props.reviewTabRef}>
            <RecipeReview />
          </div>
        </RecipeDetail.Wrapper>
      </RecipeDetail.Container>
    </>
  );
}
