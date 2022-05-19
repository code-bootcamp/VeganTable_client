import * as Review from "./RecipeReview.styles";

export default function RecipeReviewUI() {
  return (
    <Review.Container>
      <h2>리뷰</h2>
      <Review.Wrapper>
        <Review.HeadText>
          <span>포토 & 동영상</span>
          <span>10</span>
        </Review.HeadText>
        <div>
          <Review.AlignType>
            <li>최신순</li>
            <li>추천순</li>
          </Review.AlignType>
        </div>
      </Review.Wrapper>
    </Review.Container>
  );
}
