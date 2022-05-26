import ViewAllButton from "../../../commons/buttons/viewAll";
import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import * as My from "./MyPageMain.styles";

export default function MyPageMainUI(props) {
  console.log(props.data?.fetchUser);
  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />
        <My.MainWrapper>
          <My.UserWrapper>
            {props.data?.fetchUser.profilePic ? (
              <My.UserIcon
                src={`https://storage.googleapis.com/${props.data?.fetchUser.profilePic}`}
              />
            ) : (
              <My.UserIcon src="/img/myPage/icon-profile.svg" />
            )}
            <My.UserProfile>
              {props.data?.fetchUser.isPro.PRO ? (
                <My.UserGrade className="expert">전문가</My.UserGrade>
              ) : (
                <My.UserGrade className="common">회원</My.UserGrade>
              )}

              <My.UserName>
                안녕하세요 <span>{props.data?.fetchUser.name}</span>님 {":)"}
              </My.UserName>
            </My.UserProfile>
            <My.UserInfo>
              <My.Info>
                {props.data?.fetchUser.type === "NON_VEGAN" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-nonVegan.svg" />
                    <My.Name>채린이</My.Name>
                  </>
                )}
                {props.data?.fetchUser.type === "VEGAN" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-vegan.svg" />
                    <My.Name>비건</My.Name>
                  </>
                )}
                {props.data?.fetchUser.type === "LACTO" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-lacto.svg" />
                    <My.Name>락토</My.Name>
                  </>
                )}
                {props.data?.fetchUser.type === "OVO" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-ovo.svg" />
                    <My.Name>오보</My.Name>
                  </>
                )}
                {props.data?.fetchUser.type === "LACTO_OVO" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-lactoOvo.svg" />
                    <My.Name>락토오보</My.Name>
                  </>
                )}
                {props.data?.fetchUser.type === "PESCO" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-pesco.svg" />
                    <My.Name>페스코</My.Name>
                  </>
                )}
                {props.data?.fetchUser.type === "POLLO" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-pollo.svg" />
                    <My.Name>폴로</My.Name>
                  </>
                )}
              </My.Info>
              <My.Info>
                {props.data?.fetchUser.isSubs === "NON_SUB" && (
                  <>
                    <My.Subscribe>미구독</My.Subscribe>
                    <My.Name>채식한상 어떠세요?</My.Name>
                  </>
                )}
                {props.data?.fetchUser.isSubs === "BASIC" && (
                  <>
                    <My.Subscribe>베이직</My.Subscribe>
                    <My.Name>정기 구독 이용중</My.Name>
                  </>
                )}
                {props.data?.fetchUser.isSubs === "PREMIUM" && (
                  <>
                    <My.Subscribe>프리미엄</My.Subscribe>
                    <My.Name>정기 구독 이용중</My.Name>
                  </>
                )}
              </My.Info>
            </My.UserInfo>
          </My.UserWrapper>

          <My.RecipeWrapper>
            <My.Recipe>
              <My.Head>
                <My.Title>
                  최근 본 레시피 <span>150</span>
                </My.Title>
                <ViewAllButton href={"/myPage/recent"} title={"전체보기"} />
              </My.Head>
              <My.Body>
                {[1, 2, 3, 4, 5].map((el) => (
                  <My.Menu key={el}>
                    <img src="/img/myPage/img-ex.png" />
                    <h2>맛있는 채소 레시피</h2>
                  </My.Menu>
                ))}
              </My.Body>
            </My.Recipe>

            <My.Recipe>
              <My.Head>
                <My.Title>
                  등록 레시피 <span>150</span>
                </My.Title>
                <ViewAllButton href={"/myPage/myRecipe"} title={"전체보기"} />
              </My.Head>
              <My.Body>
                {[1, 2, 3, 4, 5].map((el) => (
                  <My.Menu key={el}>
                    <img src="/img/myPage/img-ex.png" />
                    <h2>메뉴 02</h2>
                  </My.Menu>
                ))}
              </My.Body>
            </My.Recipe>

            <My.Recipe>
              <My.Head>
                <My.Title>
                  찜한 레시피 <span>150</span>
                </My.Title>
                <ViewAllButton href={"/myPage/wish"} title={"전체보기"} />
              </My.Head>
              <My.Body>
                {[1, 2, 3, 4, 5].map((el) => (
                  <My.Menu key={el}>
                    <img src="/img/myPage/img-ex.png" />
                    <h2>레시피03 레시피03 03</h2>
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
