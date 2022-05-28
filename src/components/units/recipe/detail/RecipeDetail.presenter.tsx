import RecipeDetailMenu from "./menu/RecipeDetailMenu.container";
import * as RecipeDetail from "./RecipeDetail.styles";
import Slider01 from "../../../../components/commons/sliders/01";
import RecipeReview from "../detail/review/RecipeReview.container";
import { useRouter } from "next/router";

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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
                <span key={el}>멸치 1컵(30g)</span>
              ))}
            </RecipeDetail.Ingredient>
            <h2 ref={props.cookOrderTabRef} onClick={props.onClickCookOrderTab}>
              요리순서
            </h2>
            {[1, 2, 3, 4].map((el) => (
              <RecipeDetail.Order key={el}>
                <span>Step {el}</span>
                <RecipeDetail.ImageWrapper>
                  <img
                    src={`/img/recipeDetail/img-recipeDetail-0${el}.png`}
                    alt=""
                  />
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
