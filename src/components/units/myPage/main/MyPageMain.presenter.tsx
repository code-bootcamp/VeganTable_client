import * as My from "./MyPageMain.styles";

export default function MyPageMainUI() {
  return (
    <My.Container>
      <My.Wrapper>
        <My.UserWrapper>
          <My.UserIcon src="img/mypage/icon-profile.svg" />
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
            <My.Title>최근 본 레시피 </My.Title>
          </My.Recipe>
        </My.RecipeWrapper>
        최근 본 레시피 등록 레시피 찜한 레시피 좋아요 한 레시피
      </My.Wrapper>
    </My.Container>
  );
}
