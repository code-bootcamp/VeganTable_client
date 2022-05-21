import Editor01 from "../../../commons/editors/01";
import * as RecipeWrite from "./RecipeWrite.styles";
import { useRouter } from "next/router";
import RecipeWriteMenu from "./menu/RecipeWriteMenu.container";

export default function RecipeWriteUI() {
  const router = useRouter();

  return (
    <>
      <RecipeWrite.Container>
        <RecipeWrite.Wrapper>
          <RecipeWrite.TopWrapper>
            <RecipeWrite.BackButton onClick={() => router.push("/recipe")}>
              <img src="/img/recipeDetail/icon-arrow-left.svg" alt="" />
              목록으로
            </RecipeWrite.BackButton>
          </RecipeWrite.TopWrapper>

          <RecipeWrite.Navigation>
            <li className="active">준비재료</li>
            <li>요리순서</li>
            <li>리뷰(10)</li>
            <li>추천</li>
          </RecipeWrite.Navigation>

          <RecipeWrite.Contents>
            <h2>레시피 작성 페이지 입니다.</h2>
            <RecipeWrite.EditorWrapper>
              <Editor01 />
            </RecipeWrite.EditorWrapper>
          </RecipeWrite.Contents>
        </RecipeWrite.Wrapper>

        <RecipeWrite.MenuWrapper>
          <RecipeWriteMenu />
        </RecipeWrite.MenuWrapper>
      </RecipeWrite.Container>
    </>
  );
}
