import ViewAllButton from "../../../commons/buttons/viewAll";
import MyPageSidebar from "../sidebar/MyPageSidebar.container";
import * as My from "./MyPageMain.styles";

export default function MyPageMainUI() {
  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />

        <My.MainWrapper>
          <My.UserWrapper>
            <My.UserIcon src="img/myPage/icon-profile.svg" />
            <My.UserProfile>
              <My.UserGrade>전문가</My.UserGrade>
              <My.UserName>
                안녕하세요 <span>홍예원</span>님 {":)"}
              </My.UserName>
            </My.UserProfile>
            <My.UserInfo>
              <My.Info>
                <My.TypeIcon src="img/navigation/icon-vegan-vegan.svg" />
                <My.Name>비건</My.Name>
              </My.Info>
              <My.Info>
                <My.Subscribe>3달째</My.Subscribe>
                <My.Name>정기 구독 이용중</My.Name>
              </My.Info>
            </My.UserInfo>
          </My.UserWrapper>

          <My.RecipeWrapper>
            <My.Recipe>
              <My.Head>
                <My.Title>
                  최근 본 레시피 <span>150</span>
                </My.Title>
                <ViewAllButton title={"전체보기"} />
              </My.Head>
              <My.Body>
                {[1, 2, 3, 4, 5].map((el) => (
                  <My.Menu key={el}>
                    <img src="img/myPage/img-ex.png" />
                    <h2> 메뉴 01 </h2>
                  </My.Menu>
                ))}
              </My.Body>
            </My.Recipe>

            <My.Recipe>
              <My.Head>
                <My.Title>
                  등록 레시피 <span>150</span>
                </My.Title>
                <ViewAllButton title={"전체보기"} />
              </My.Head>
              <My.Body>
                {[1, 2, 3, 4, 5].map((el) => (
                  <My.Menu key={el}>
                    <img src="img/myPage/img-ex.png" />
                    <h2> 메뉴 01 </h2>
                  </My.Menu>
                ))}
              </My.Body>
            </My.Recipe>

            <My.Recipe>
              <My.Head>
                <My.Title>
                  찜한 레시피 <span>150</span>
                </My.Title>
                <ViewAllButton title={"전체보기"} />
              </My.Head>
              <My.Body>
                {[1, 2, 3, 4, 5].map((el) => (
                  <My.Menu key={el}>
                    <img src="img/myPage/img-ex.png" />
                    <h2> 메뉴 01 </h2>
                  </My.Menu>
                ))}
              </My.Body>
            </My.Recipe>
          </My.RecipeWrapper>
        </My.MainWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
