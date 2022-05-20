import RecipeDetailMenu from "./menu/RecipeDetailMenu.container";
import * as RecipeDetail from "./RecipeDetail.styles";
import Slider01 from "../../../../components/commons/sliders/01";
import RecipeReview from "../detail/review/RecipeReview.container";

export default function RecipeDetailUI() {
  return (
    <>
      <RecipeDetail.Container>
        <RecipeDetail.Wrapper>
          <RecipeDetail.TopWrapper>
            <RecipeDetail.BackButton>
              <img src="/img/recipeDetail/icon-arrow-left.svg" alt="" />
              목록으로
            </RecipeDetail.BackButton>
            <RecipeDetail.SliderWrapper>
              <Slider01 />
            </RecipeDetail.SliderWrapper>
          </RecipeDetail.TopWrapper>

          <RecipeDetail.Navigation>
            <li className="active">준비재료</li>
            <li>요리순서</li>
            <li>리뷰(10)</li>
            <li>추천</li>
          </RecipeDetail.Navigation>

          <RecipeDetail.Contents>
            <h2>준비재료</h2>
            <RecipeDetail.Ingredient>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
                <span key={el}>멸치 1컵(30g)</span>
              ))}
            </RecipeDetail.Ingredient>
            <h2>요리순서</h2>
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
          <RecipeReview />
        </RecipeDetail.Wrapper>

        <RecipeDetail.MenuWrapper>
          <RecipeDetail.MenuInnerWrapper>
            <RecipeDetailMenu />
          </RecipeDetail.MenuInnerWrapper>
        </RecipeDetail.MenuWrapper>
      </RecipeDetail.Container>
    </>
  );
}
