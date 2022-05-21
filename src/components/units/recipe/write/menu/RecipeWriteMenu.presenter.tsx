import * as Menu from "./RecipeWriteMenu.styles";

export default function RecipeWriteMenuUI() {
  return (
    <Menu.Container>
      <Menu.MenuName>
        <img src="/img/recipeWrite/icon-recipeWrite-pencil.svg" alt="" />
        <input type="text" placeholder="메뉴명" />
      </Menu.MenuName>
      <Menu.Remarks>
        <img src="/img/recipeWrite/icon-recipeWrite-pencil.svg" alt="" />
        <input type="text" placeholder="레시피의 한줄평을 적어주세요" />
      </Menu.Remarks>
      <Menu.Vegan>
        <Menu.VeganTypeHead>
          <img src="/img/recipeWrite/icon-recipeWrite-check.svg" alt="" />
          <span>가능한 채식 유형을 선택해주세요</span>
        </Menu.VeganTypeHead>
        <Menu.VeganType>
          <Menu.TagVegan>비건</Menu.TagVegan>
          <Menu.TagOvo>오보</Menu.TagOvo>
          <Menu.TagLacto>락토</Menu.TagLacto>
          <Menu.TagLactoOvo>락토오보</Menu.TagLactoOvo>
          <Menu.TagPesco>페스코</Menu.TagPesco>
          <Menu.TagPollo>폴로</Menu.TagPollo>
        </Menu.VeganType>
      </Menu.Vegan>

      <Menu.RecipeInfoWrapper>
        <Menu.RecipeInfoItem>
          <Menu.RecipeInfoTop>
            <img src="/img/recipeDetail/icon-stopwatch.svg" alt="" />
            <span>조리시간</span>
          </Menu.RecipeInfoTop>
          <Menu.RecipeInfoBottom>
            <select>
              <option value="선택">선택</option>
            </select>
          </Menu.RecipeInfoBottom>
        </Menu.RecipeInfoItem>

        <Menu.RecipeInfoItem>
          <Menu.RecipeInfoTop>
            <img src="/img/recipeDetail/icon-star.svg" alt="" />
            <span>난이도</span>
          </Menu.RecipeInfoTop>
          <Menu.RecipeInfoBottom>
            <select>
              <option value="선택">선택</option>
            </select>
          </Menu.RecipeInfoBottom>
        </Menu.RecipeInfoItem>

        <Menu.RecipeInfoItem>
          <Menu.RecipeInfoTop>
            <img src="/img/recipeDetail/icon-smile.svg" alt="" />
            <span>분량</span>
          </Menu.RecipeInfoTop>
          <Menu.RecipeInfoBottom>
            <select>
              <option value="선택">선택</option>
            </select>
          </Menu.RecipeInfoBottom>
        </Menu.RecipeInfoItem>
      </Menu.RecipeInfoWrapper>

      <Menu.TagsWrapper>
        <Menu.TagHead>
          <img src="/img/recipeWrite/icon-recipeWrite-pencil.svg" alt="" />
          <span>태그로 표현해보세요</span>
        </Menu.TagHead>
        <Menu.Tags>
          <Menu.Tag>#태그</Menu.Tag>
          <Menu.Tag>#태그</Menu.Tag>
          <Menu.Tag>#태그</Menu.Tag>
          <Menu.Tag>#태그</Menu.Tag>
          <Menu.Tag>#태그</Menu.Tag>
          <Menu.Tag>#태그</Menu.Tag>
        </Menu.Tags>
      </Menu.TagsWrapper>
    </Menu.Container>
  );
}
