import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import MyPageTitleBar from "../../../commons/titleBars/01";
import * as My from "./MyRecent.styles";
export default function MyRecentUI() {
  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />
        <My.RecentWrapper>
          <MyPageTitleBar title={"최근 본 레시피"} />
          {/* <My.RecipeWrapper>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
              <My.Menu key={el}>
                <img src="/img/myPage/img-ex.png" />
                <h2>최근 본 레시피</h2>
                <p>레시피 한 줄 요약</p>
                <p className="date">2022-05-19</p>
              </My.Menu>
            ))}
          </My.RecipeWrapper> */}
        </My.RecentWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
