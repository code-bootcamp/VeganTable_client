import * as Foot from "./Footer.styles";

export default function LayoutFooter() {
  return (
    <Foot.Wrapper>
      <Foot.LogoWrapper>
        <Foot.Logo src="/img/footer/logo.png" />
        <Foot.LogoCopyWrite>@ COPY NUN AN DE YO</Foot.LogoCopyWrite>
      </Foot.LogoWrapper>
      <Foot.MenuInfoWrapper>
        <Foot.MenuWrapper>
          <Foot.Menu>이용약관</Foot.Menu>
          <Foot.Menu>개인정보처리 방침</Foot.Menu>
          <Foot.Menu>법적고지</Foot.Menu>
          <Foot.Menu>사업자정보 확인</Foot.Menu>
        </Foot.MenuWrapper>
        <Foot.InfoWrapper>
          <Foot.Info>채식한상(주) | 대표자: 홍예원</Foot.Info>
          <Foot.Info>
            주소: 서울 구로구 디지털로 300 패스트파이브 구로점 13층 젤 구석 방
            (우) 08379 | 사업자등록번호: 000-00-00000
          </Foot.Info>
          <Foot.Info>
            통신판매업신고할뻔 구로구 제00000호 | 개인정보보호책임자:오창모
          </Foot.Info>
        </Foot.InfoWrapper>
      </Foot.MenuInfoWrapper>
      <Foot.CSWrapper>
        <Foot.CSNumber>고객만족문의 1688-5252</Foot.CSNumber>
        <Foot.CSChat>1:1문의</Foot.CSChat>
      </Foot.CSWrapper>
    </Foot.Wrapper>
  );
}
