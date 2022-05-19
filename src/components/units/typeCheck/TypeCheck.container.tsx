import { useState } from "react";
import SubmitButton from "../../commons/buttons/submit";
import * as Type from "./TypeCheck.styles";
import TypeCheckQ2 from "./TypeCheckQ2.container";
import TypeCheckQ3 from "./TypeCheckQ3.container";

export default function TypeCheck() {
  const [isCheckType, setIsCheckType] = useState(false);
  const [isCheckKeyword, setIsCheckKeyword] = useState(false);

  const isActive = true;

  const onClickCheckType = () => {
    setIsCheckType((prev) => !prev);
  };

  const onClickNextStep = () => {
    setIsCheckKeyword((prev) => !prev);
  };

  const TYPE_CHECK_LIST = [
    {
      name: "비건",
      enName: "Vegan",
      image: "/img/navigation/icon-vegan-vegan.svg",
      hover: "/img/navigation/icon-vegan-vegan-hover.svg",
      eat: "완전 채식",
      ban: "",
    },
    {
      name: "락토",
      enName: "Lacto",
      image: "/img/navigation/icon-vegan-lacto.svg",
      hover: "/img/navigation/icon-vegan-lacto-hover.svg",
      eat: "유제품 섭취",
      ban: "",
    },
    {
      name: "오보",
      enName: "Ovo",
      image: "/img/navigation/icon-vegan-ovo.svg",
      hover: "/img/navigation/icon-vegan-ovo-hover.svg",
      eat: "달걀 섭취",
      ban: "",
    },
    {
      name: "락토오보",
      enName: "Lacto-Ovo",
      image: "/img/navigation/icon-vegan-lactoOvo.svg",
      hover: "/img/navigation/icon-vegan-lactoOvo-hover.svg",
      eat: "유제품, 달걀 섭취",
      ban: "육류,어류 금지",
    },
    {
      name: "페스코",
      enName: "Pesco",
      image: "/img/navigation/icon-vegan-pesco.svg",
      hover: "/img/navigation/icon-vegan-pesco-hover.svg",
      eat: "어류 섭취",
      ban: "육류 금지",
    },
    {
      name: "폴로",
      enName: "Pollo",
      image: "/img/navigation/icon-vegan-pollo.svg",
      hover: "/img/navigation/icon-vegan-pollo-hover.svg",
      eat: "닭고기 섭취",
      ban: "붉은 살코기 금지",
    },
  ];

  const [isPicked, setIsPicked] = useState("");

  const onClickVeganType = (el) => () => {
    setIsPicked(el.name);
  };

  return (
    <Type.Container>
      <Type.Wrapper>
        <Type.HeaderWrapper>
          <Type.HeaderTitle>나의 채식 유형 체크</Type.HeaderTitle>
        </Type.HeaderWrapper>
        {!isCheckType && !isCheckKeyword && (
          <Type.BodyWrapper>
            <Type.StepWrapper>
              <Type.StepCircleOn>01</Type.StepCircleOn>
              <Type.StepBar />
              <Type.StepCircle>02</Type.StepCircle>
              <Type.StepBar />
              <Type.StepCircle>03</Type.StepCircle>
            </Type.StepWrapper>
            <Type.StepQuestion>
              Q1. 어떤 타입의 채식주의자 인가요?
            </Type.StepQuestion>
            <Type.VeganTypeWrapper>
              {TYPE_CHECK_LIST.map((el, i) => (
                <Type.VeganType
                  key={i}
                  onClick={onClickVeganType(el)}
                  isPicked={isPicked === el.name}
                >
                  <Type.VeganTypeImgCircle
                    isPicked={isPicked === el.name}
                    image={el.image}
                    hover={el.hover}
                  >
                    <Type.VeganTypeImg
                      image={el.image}
                      hover={el.hover}
                      isPicked={isPicked === el.name}
                    />
                  </Type.VeganTypeImgCircle>
                  <Type.VeganTypeName>{el.name}</Type.VeganTypeName>
                  <Type.VeganTypeEnName>{el.enName}</Type.VeganTypeEnName>
                  <Type.VeganTypeDetail isPicked={isPicked === el.name}>
                    {el.eat}
                    <p>{el.ban}</p>
                  </Type.VeganTypeDetail>
                </Type.VeganType>
              ))}
            </Type.VeganTypeWrapper>

            <SubmitButton
              title={"다음"}
              isActive={isActive}
              onClick={onClickCheckType}
            />
          </Type.BodyWrapper>
        )}
        {isCheckType && !isCheckKeyword && (
          <TypeCheckQ2 onClickNextStep={onClickNextStep} />
        )}
        {isCheckKeyword && <TypeCheckQ3 />}
      </Type.Wrapper>
    </Type.Container>
  );
}
