import Editor01 from "../../../commons/editors/01";
import * as RecipeWrite from "./RecipeWrite.styles";
import { useRouter } from "next/router";
import RecipeWriteMenu from "./menu/RecipeWriteMenu.container";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function RecipeWriteUI() {
  const router = useRouter();
  const [countList, setCountList] = useState([0]);

  const addCountList = () => {
    const countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter++;
    countArr.push(counter);
    setCountList(countArr);
    console.log(countList);
  };

  return (
    <>
      <RecipeWrite.Container>
        <RecipeWrite.Wrapper>
          <RecipeWrite.TopWrapper>
            <RecipeWrite.BackButton onClick={() => router.push("/recipe")}>
              <img src="/img/recipeDetail/icon-arrow-left.svg" alt="" />
              목록으로
            </RecipeWrite.BackButton>
            <RecipeWrite.RepImagesWrapper>
              <RecipeWrite.RepImage>
                <img src="/img/icon/icon-upload-image.svg" alt="" />
                <span>사진을 넣어주세요</span>
              </RecipeWrite.RepImage>
              <RecipeWrite.UploadIconsWrapper>
                <div>
                  <img src="/img/icon/Add.svg" alt="" />
                </div>
                <div>
                  <img src="/img/icon/Add.svg" alt="" />
                </div>
                <div>
                  <img src="/img/icon/Add.svg" alt="" />
                </div>
                <div>
                  <img src="/img/icon/Add.svg" alt="" />
                </div>
              </RecipeWrite.UploadIconsWrapper>
            </RecipeWrite.RepImagesWrapper>
          </RecipeWrite.TopWrapper>

          <RecipeWrite.Navigation>
            <li className="active">준비재료</li>
            <li>요리순서</li>
            <li>리뷰(10)</li>
            <li>추천</li>
          </RecipeWrite.Navigation>

          <RecipeWrite.Contents>
            <h2>준비재료</h2>

            <div>
              <RecipeWrite.IngredientsHead>
                <div>
                  <span>재료</span>
                </div>
                <div>
                  <span>용량</span>
                </div>
                <div>
                  <span>단위</span>
                </div>
              </RecipeWrite.IngredientsHead>
              <div>
                {countList.map((e) => (
                  <div style={{ display: "flex" }} key={uuidv4()}>
                    <input type="text" placeholder="재료" />
                    <input type="text" placeholder="용량" />
                    <input type="text" placeholder="단위" />
                  </div>
                ))}
              </div>
            </div>

            <button onClick={addCountList}>++</button>
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
