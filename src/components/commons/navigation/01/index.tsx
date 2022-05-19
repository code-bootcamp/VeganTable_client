import { useState } from "react";
import * as Nav from "./Navigation.styles";

export default function Navigation01() {
  const VEGAN_TYPE = [
    {
      name: "전체",
      enName: "All",
      image: "/img/navigation/icon-vegan-all.svg",
      hover: "/img/navigation/icon-vegan-all.svg",
    },
    {
      name: "비건",
      enName: "Vegan",
      image: "/img/navigation/icon-vegan-vegan.svg",
      hover: "/img/navigation/icon-vegan-vegan-hover.svg",
    },
    {
      name: "락토",
      enName: "Lacto",
      image: "/img/navigation/icon-vegan-lacto.svg",
      hover: "/img/navigation/icon-vegan-lacto-hover.svg",
    },
    {
      name: "오보",
      enName: "Ovo",
      image: "/img/navigation/icon-vegan-ovo.svg",
      hover: "/img/navigation/icon-vegan-ovo-hover.svg",
    },
    {
      name: "락토오보",
      enName: "Lacto-Ovo",
      image: "/img/navigation/icon-vegan-lactoOvo.svg",
      hover: "/img/navigation/icon-vegan-lactoOvo-hover.svg",
    },
    {
      name: "페스코",
      enName: "Pesco",
      image: "/img/navigation/icon-vegan-pesco.svg",
      hover: "/img/navigation/icon-vegan-pesco-hover.svg",
    },
    {
      name: "폴로",
      enName: "Pollo",
      image: "/img/navigation/icon-vegan-pollo.svg",
      hover: "/img/navigation/icon-vegan-pollo-hover.svg",
    },
  ];

  const [isPicked, setIsPicked] = useState("전체");

  const onClickVeganType = (el) => () => {
    setIsPicked(el.name);
  };

  return (
    <Nav.Wrapper>
      {VEGAN_TYPE.map((el, i) => (
        <Nav.VeganType
          key={i}
          onClick={onClickVeganType(el)}
          isPicked={isPicked === el.name}
          hover={el.hover}
        >
          <Nav.VeganTypeImg
            image={el.image}
            hover={el.hover}
            isPicked={isPicked === el.name}
          />
          <Nav.VeganTypeName>{el.name}</Nav.VeganTypeName>
          <Nav.VeganTypeEnName>{el.enName}</Nav.VeganTypeEnName>
        </Nav.VeganType>
      ))}
    </Nav.Wrapper>
  );
}
