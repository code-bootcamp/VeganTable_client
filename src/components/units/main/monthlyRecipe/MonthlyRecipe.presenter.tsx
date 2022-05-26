import * as MonthlyRecipe from "./MonthlyRecipe.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

export default function MonthlyRecipeUI(props) {
  return (
    <MonthlyRecipe.Container>
      <MonthlyRecipe.HeadText>
        <span>MONTHLY RECIPE</span>
        <h1>
          이달의 인기 레시피 <b>P!ck</b>
        </h1>
        <MonthlyRecipe.TagsWrapper>
          <input
            type="radio"
            name="pickTag"
            value="#채식이 처음인 사람들을 위한 쉬운 레시피"
            id="tag1"
            checked={
              props.pickTag.pickTag ===
              "#채식이 처음인 사람들을 위한 쉬운 레시피"
            }
            onChange={props.handleChange}
          />
          <input
            type="radio"
            name="pickTag"
            value="#집들이날 대접 할 만한 채식 차림상"
            id="tag2"
            checked={
              props.pickTag.pickTag === "#집들이날 대접 할 만한 채식 차림상"
            }
            onChange={props.handleChange}
          />
          <input
            type="radio"
            name="pickTag"
            value="#특별한 날 채식 생일상"
            id="tag3"
            checked={props.pickTag.pickTag === "#특별한 날 채식 생일상"}
            onChange={props.handleChange}
          />
          <input
            type="radio"
            name="pickTag"
            value="#스트레스 날려 줄 매운맛 채식 야식"
            id="tag4"
            checked={
              props.pickTag.pickTag === "#스트레스 날려 줄 매운맛 채식 야식"
            }
            onChange={props.handleChange}
          />
          <label
            htmlFor="tag1"
            className={
              props.pickTag.pickTag ===
              "#채식이 처음인 사람들을 위한 쉬운 레시피"
                ? "isActive"
                : ""
            }
          >
            #채식이 처음인 사람들을 위한 쉬운 레시피
          </label>
          <label
            htmlFor="tag2"
            className={
              props.pickTag.pickTag === "#집들이날 대접 할 만한 채식 차림상"
                ? "isActive"
                : ""
            }
          >
            #집들이날 대접 할 만한 채식 차림상
          </label>
          <label
            htmlFor="tag3"
            className={
              props.pickTag.pickTag === "#특별한 날 채식 생일상"
                ? "isActive"
                : ""
            }
          >
            #특별한 날 채식 생일상
          </label>
          <label
            htmlFor="tag4"
            className={
              props.pickTag.pickTag === "#스트레스 날려 줄 매운맛 채식 야식"
                ? "isActive"
                : ""
            }
          >
            #스트레스 날려 줄 매운맛 채식 야식
          </label>
        </MonthlyRecipe.TagsWrapper>
      </MonthlyRecipe.HeadText>
      <MonthlyRecipe.RecommendRecipeItems>
        <MonthlyRecipe.SliderWrapper>
          <Slider {...props.settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((el) => (
              <MonthlyRecipe.RecipeItem key={uuidv4()}>
                <MonthlyRecipe.RecipeItemImageWrapper>
                  <MonthlyRecipe.IconBookmark>
                    {el % 2 === 1 ? (
                      <img src="/img/bestRecipe/icon-bookmark-on.svg" />
                    ) : (
                      <img src="/img/bestRecipe/icon-bookmark-off.svg" />
                    )}
                    <span>{el % 2 === 1 ? "+999" : "24"}</span>
                  </MonthlyRecipe.IconBookmark>
                  <img src="/img/bestRecipe/img-recipe-01.png" />
                </MonthlyRecipe.RecipeItemImageWrapper>
                <MonthlyRecipe.RecipeItemTextWrapper>
                  <h1>메뉴 01</h1>
                  <p>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</p>
                  <MonthlyRecipe.Tags>
                    <MonthlyRecipe.TagVegan>비건</MonthlyRecipe.TagVegan>
                    <MonthlyRecipe.TagLacto>락토</MonthlyRecipe.TagLacto>
                    <MonthlyRecipe.TagPesco>페스코</MonthlyRecipe.TagPesco>
                    <MonthlyRecipe.TagPollo>폴로</MonthlyRecipe.TagPollo>
                    <MonthlyRecipe.TagOvo>오보</MonthlyRecipe.TagOvo>
                    <MonthlyRecipe.TagLactoOvo>
                      락토오보
                    </MonthlyRecipe.TagLactoOvo>
                  </MonthlyRecipe.Tags>
                </MonthlyRecipe.RecipeItemTextWrapper>
              </MonthlyRecipe.RecipeItem>
            ))}
          </Slider>
        </MonthlyRecipe.SliderWrapper>
      </MonthlyRecipe.RecommendRecipeItems>
    </MonthlyRecipe.Container>
  );
}
