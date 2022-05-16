import * as My from "./MyPageSidebar.styles";

export default function MyPageSidebarUI() {
  return (
    <My.Container>
      <My.Wrapper>
        <>My 홈</>
        <span>레시피 관리</span>
        <span>최근 본 레시피</span>
        <span>찜한 레시피</span>
        <span>좋아요 한 레시피</span>
        <span>등록 레시피 관리</span>
        <span>정기 구독 관리</span>
        <span>문의 내역</span>
        <span>회원 정보 수정</span>
      </My.Wrapper>
    </My.Container>
  );
}
