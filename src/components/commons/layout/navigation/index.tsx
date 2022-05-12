import * as Nav from "./Navigation.styles";

export default function LayoutNavigation() {
  return (
    <Nav.Wrapper>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/navigation/vegan.png" />
        <Nav.VeganTypeName>전체</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>All</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/navigation/vegan.png" />
        <Nav.VeganTypeName>비건</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Vegan</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/navigation/lacto.png" />
        <Nav.VeganTypeName>락토</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Lacto</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/navigation/ovo.png" />
        <Nav.VeganTypeName>오보</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Ovo</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/navigation/lacto-ovo.png" />
        <Nav.VeganTypeName>락토오보</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Lacto-Ovo</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/navigation/pesco.png" />
        <Nav.VeganTypeName>페스코</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Pesco</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/navigation/pollo.png" />
        <Nav.VeganTypeName>폴로</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Pollo</Nav.VeganTypeEnName>
      </Nav.VeganType>
    </Nav.Wrapper>
  );
}
