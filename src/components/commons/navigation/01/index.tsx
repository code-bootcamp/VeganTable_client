import * as Nav from "./Navigation.styles";

export default function Navigation01() {
  return (
    <Nav.Wrapper>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/img/navigation/icon-vegan-all.svg" />
        <Nav.VeganTypeName>전체</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>All</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/img/navigation/icon-vegan-vegan.svg" />
        <Nav.VeganTypeName>비건</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Vegan</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/img/navigation/icon-vegan-lacto.svg" />
        <Nav.VeganTypeName>락토</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Lacto</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/img/navigation/icon-vegan-ovo.svg" />
        <Nav.VeganTypeName>오보</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Ovo</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/img/navigation/icon-vegan-lactoOvo.svg" />
        <Nav.VeganTypeName>락토오보</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Lacto-Ovo</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/img/navigation/icon-vegan-pesco.svg" />
        <Nav.VeganTypeName>페스코</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Pesco</Nav.VeganTypeEnName>
      </Nav.VeganType>
      <Nav.VeganType>
        <Nav.VeganTypeImg src="/img/navigation/icon-vegan-pollo.svg" />
        <Nav.VeganTypeName>폴로</Nav.VeganTypeName>
        <Nav.VeganTypeEnName>Pollo</Nav.VeganTypeEnName>
      </Nav.VeganType>
    </Nav.Wrapper>
  );
}
