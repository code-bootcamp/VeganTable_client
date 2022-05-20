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
      <Review.ReviewImagesWrapper>
        <div>
          <img src="/img/recipeReview/img-recipeReview-01.png" />
        </div>
        <div>
          <img src="/img/recipeReview/img-recipeReview-02.png" />
        </div>
        <div>
          <img src="/img/recipeReview/img-recipeReview-03.png" />
        </div>
        <div>
          <img src="/img/recipeReview/img-recipeReview-01.png" />
        </div>
        <div>
          <img src="/img/recipeReview/img-recipeReview-02.png" />
        </div>
        <div>
          <img src="/img/recipeReview/img-recipeReview-03.png" />
        </div>
        <Review.NextButton>
          <span>{">"}</span>
        </Review.NextButton>
      </Review.ReviewImagesWrapper>
      <Review.CommentWrapper>
        <Review.Comment>
          <p>
            멸치를 넣고 공간이 넉넉한 접시 준비 잔멸치와 견과류, 포도씨유를 넣고
            잘 섞어주세요. 전자레인지에 1분간 조리해주세요.
          </p>
          <div>
            <span>iamye****</span>
            <span>비건</span>
            <span>2일전</span>
          </div>
        </Review.Comment>
        <div>
          <span>후기가 도움 되었어요! 👍</span>
        </div>
      </Review.CommentWrapper>
    </Review.Container>
  );
}
