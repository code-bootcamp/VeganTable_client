import * as RecipeWrite from "./RecipeWrite.styles";
import { useRouter } from "next/router";
import RecipeWriteMenu from "./menu/RecipeWriteMenu.container";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";

export default function RecipeWriteUI(props) {
  const router = useRouter();

  return (
    <>
      <form>
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
            </RecipeWrite.Navigation>

            <RecipeWrite.Contents>
              <h2>준비재료</h2>
              <RecipeWrite.IngredientsWrapper>
                <RecipeWrite.IngredientArr>
                  {props.ingredientArr.map((el) => (
                    <div
                      key={uuidv4()}
                      onClick={props.onClickDeleteIngredient(el)}
                    >
                      <span>
                        {el.name} {el.amount}
                        {el.unit}
                      </span>
                    </div>
                  ))}
                </RecipeWrite.IngredientArr>

                <div style={{ display: "flex" }}>
                  <RecipeWrite.IngredientInputs>
                    <input
                      type="text"
                      name="name"
                      placeholder="재료 이름"
                      onChange={props.onChangeIngredient}
                    />
                    <RecipeWrite.InputAmount
                      type="number"
                      name="amount"
                      placeholder="재료 용량"
                      min={1}
                      onChange={props.onChangeIngredient}
                    />
                    <RecipeWrite.InputUnit
                      type="text"
                      name="unit"
                      placeholder="단위"
                      onChange={props.onChangeIngredient}
                    />
                    <button type="button" onClick={props.onClickAddIngredient}>
                      <span>재료추가</span>
                    </button>
                    <p>
                      재료를 입력하고 재료추가를 누르면 추가됩니다.
                      <br />
                      추가된 재료를 클릭하면 삭제할 수 있습니다.
                    </p>
                  </RecipeWrite.IngredientInputs>
                </div>
              </RecipeWrite.IngredientsWrapper>
              <h2>요리순서</h2>
              <RecipeWrite.CookingOrderWrapper>
                {props.descArr.map((el) => (
                  <RecipeWrite.CookingOrder key={uuidv4()}>
                    <span>STEP {el.step}</span>
                    <div>
                      <img src="" alt="아직이미지가없네용" />
                    </div>
                    <div>
                      {typeof window !== "undefined" ? (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(el.desc),
                          }}
                        ></p>
                      ) : (
                        <p></p>
                      )}
                    </div>
                  </RecipeWrite.CookingOrder>
                ))}
              </RecipeWrite.CookingOrderWrapper>
              <RecipeWrite.RepImage2>
                <img src="/img/icon/icon-upload-image.svg" alt="" />
                <span>사진을 넣어주세요</span>
              </RecipeWrite.RepImage2>
              <RecipeWrite.TextArea
                onChange={props.onChangeTextArea}
                placeholder="설명을 적어주세요"
              ></RecipeWrite.TextArea>
              <RecipeWrite.AddStepWrapper onClick={props.onClickAddDesc}>
                <RecipeWrite.AddContentButton type="button">
                  <img src="/img/icon/contentAdd.svg" alt="" />
                </RecipeWrite.AddContentButton>
                <span>STEP 추가하기</span>
              </RecipeWrite.AddStepWrapper>
            </RecipeWrite.Contents>
          </RecipeWrite.Wrapper>

          <RecipeWrite.MenuWrapper>
            <RecipeWriteMenu
              register={props.register}
              onKeyUpHash={props.onKeyUpHash}
              onClickDeleteTag={props.onClickDeleteTag}
              hashArr={props.hashArr}
            />
          </RecipeWrite.MenuWrapper>
        </RecipeWrite.Container>
      </form>
    </>
  );
}
