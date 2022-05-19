import RecipeDetailMenu from "./menu/RecipeDetailMenu.container";
import * as RecipeDetail from "./RecipeDetail.styles";
import Slider01 from "../../../../components/commons/sliders/01";
import { useInView } from "react-intersection-observer";

export default function RecipeDetailUI() {
  const [ref, inView] = useInView({
    // 라이브러리 옵션
    threshold: 0,
  });
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
