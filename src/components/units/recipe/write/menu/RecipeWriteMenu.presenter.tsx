import * as Menu from "./RecipeWriteMenu.styles";
import { v4 as uuidv4 } from "uuid";

export default function RecipeWriteMenuUI(props) {
  return (
    <Menu.Container>
      <Menu.MenuName>
        <img src="/img/recipeWrite/icon-recipeWrite-pencil.svg" alt="" />
        <input type="text" placeholder="메뉴명" {...props.register("title")} />
      </Menu.MenuName>
      <Menu.Summary>
        <img src="/img/recipeWrite/icon-recipeWrite-pencil.svg" alt="" />
        <input
          type="text"
          placeholder="레시피의 한줄평을 적어주세요"
          {...props.register("summary")}
        />
      </Menu.Summary>
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
            <select {...props.register("level")}>
              <option value="선택">선택</option>
              <option value="SIMPLE">쉬움</option>
              <option value="NORMAL">보통</option>
              <option value="DIFFICULT">어려움</option>
            </select>
          </Menu.RecipeInfoBottom>
        </Menu.RecipeInfoItem>

        <Menu.RecipeInfoItem>
          <Menu.RecipeInfoTop>
            <img src="/img/recipeDetail/icon-smile.svg" alt="" />
            <span>분량</span>
          </Menu.RecipeInfoTop>
          <Menu.RecipeInfoBottom>
            <Menu.RecipeInfoServing>
              <input type="number" placeholder="2" min={1} />
              <span>인분</span>
            </Menu.RecipeInfoServing>
          </Menu.RecipeInfoBottom>
        </Menu.RecipeInfoItem>
      </Menu.RecipeInfoWrapper>

      <Menu.TagsWrapper>
        <Menu.TagHead>
          <img src="/img/recipeWrite/icon-recipeWrite-pencil.svg" alt="" />
          <input
            type="text"
            {...props.register("tags")}
            placeholder="태그를 입력하고 스페이스바를 눌러주세요."
            onKeyUp={props.onKeyUpHash}
          />
        </Menu.TagHead>
        <Menu.Tags>
          {props.hashArr.map((el, idx) => (
            <Menu.Tag key={uuidv4()} onClick={props.onClickDeleteTag(el)}>
              {el}
            </Menu.Tag>
          ))}
        </Menu.Tags>
      </Menu.TagsWrapper>
    </Menu.Container>
  );
}
