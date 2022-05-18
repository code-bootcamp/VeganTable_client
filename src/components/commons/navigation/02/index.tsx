import { useState } from "react";
import * as Nav from "./styles";

export default function Navigation02() {
  const [isHover, setIsHover] = useState(false);
  const [isPicked, setIsPicked] = useState("");

  const onClickVeganType = (el) => (event) => {
    setIsPicked(el.name);
  };

  const VEGAN_TYPE = [
    {
      name: "비건",
      En: "Vegan",
      image: "/img/navigation/icon-vegan-vegan.svg",
      hover: "/img/navigation/icon-vegan-vegan-hover.svg",
    },
    {
      name: "락토",
      En: "Lacto",
      image: "/img/navigation/icon-vegan-lacto.svg",
      hover: "/img/navigation/icon-vegan-lacto-hover.svg",
    },
    {
      name: "오보",
      En: "Ovo",
      image: "/img/navigation/icon-vegan-ovo.svg",
      hover: "/img/navigation/icon-vegan-ovo-hover.svg",
    },
    {
      name: "락토오보",
      En: "Lacto-Ovo",
      image: "/img/navigation/icon-vegan-lactoOvo.svg",
      hover: "/img/navigation/icon-vegan-lactoOvo-hover.svg",
    },
    {
      name: "페스코",
      En: "Pesco",
      image: "/img/navigation/icon-vegan-pesco.svg",
      hover: "/img/navigation/icon-vegan-pesco-hover.svg",
    },
    {
      name: "폴로",
      En: "Pollo",
      image: "/img/navigation/icon-vegan-pollo.svg",
      hover: "/img/navigation/icon-vegan-pollo-hover.svg",
    },
  ];

  return (
    <Nav.Wrapper>
      {VEGAN_TYPE.map((el) => (
        <Nav.VeganType key={el.name} onClick={onClickVeganType(el)}>
          {isPicked === el.name ? (
            <Nav.Circle style={{ border: "2px solid #0FBAA3" }}>
              <Nav.VeganTypeImg src={el.hover} />
            </Nav.Circle>
          ) : (
            <Nav.Circle>
              <Nav.VeganTypeImg src={el.image} />
            </Nav.Circle>
          )}
          <Nav.VeganTypeName>{el.name}</Nav.VeganTypeName>
          <Nav.VeganTypeEnName>{el.En}</Nav.VeganTypeEnName>
        </Nav.VeganType>
      ))}
    </Nav.Wrapper>
  );
}