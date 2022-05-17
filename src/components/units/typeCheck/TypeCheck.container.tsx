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
            <Type.VeganTypeRow>
              <Type.VeganType>
                <Type.VeganTypeImgCircle>
                  <Type.VeganTypeImg src="/img/navigation/icon-vegan-vegan.svg" />
                </Type.VeganTypeImgCircle>
                <Type.VeganTypeName>비건</Type.VeganTypeName>
                <Type.VeganTypeEnName>Vegan</Type.VeganTypeEnName>
                <Type.VeganTypeDetail>완전 채식</Type.VeganTypeDetail>
              </Type.VeganType>
              <Type.VeganType>
                <Type.VeganTypeImgCircle>
                  <Type.VeganTypeImg src="/img/navigation/icon-vegan-lacto.svg" />
                </Type.VeganTypeImgCircle>
                <Type.VeganTypeName>락토</Type.VeganTypeName>
                <Type.VeganTypeEnName>Lacto</Type.VeganTypeEnName>
                <Type.VeganTypeDetail>유제품 섭취</Type.VeganTypeDetail>
              </Type.VeganType>
              <Type.VeganType>
                <Type.VeganTypeImgCircle>
                  <Type.VeganTypeImg src="/img/navigation/icon-vegan-ovo.svg" />
                </Type.VeganTypeImgCircle>
                <Type.VeganTypeName>오보</Type.VeganTypeName>
                <Type.VeganTypeEnName>Ovo</Type.VeganTypeEnName>
                <Type.VeganTypeDetail>달걀 섭취</Type.VeganTypeDetail>
              </Type.VeganType>
            </Type.VeganTypeRow>
            <Type.VeganTypeRow>
              <Type.VeganType>
                <Type.VeganTypeImgCircle>
                  <Type.VeganTypeImg src="/img/navigation/icon-vegan-lactoOvo.svg" />
                </Type.VeganTypeImgCircle>
                <Type.VeganTypeName>락토오보</Type.VeganTypeName>
                <Type.VeganTypeEnName>Lacto-Ovo</Type.VeganTypeEnName>
                <Type.VeganTypeDetail>
                  유제품, 달걀 섭취
                  <p>육류,어류 금지</p>
                </Type.VeganTypeDetail>
              </Type.VeganType>
              <Type.VeganType>
                <Type.VeganTypeImgCircle>
                  <Type.VeganTypeImg src="/img/navigation/icon-vegan-pesco.svg" />
                </Type.VeganTypeImgCircle>
                <Type.VeganTypeName>페스코</Type.VeganTypeName>
                <Type.VeganTypeEnName>Pesco</Type.VeganTypeEnName>
                <Type.VeganTypeDetail>
                  어류 섭취
                  <p>육류 금지</p>
                </Type.VeganTypeDetail>
              </Type.VeganType>
              <Type.VeganType>
                <Type.VeganTypeImgCircle>
                  <Type.VeganTypeImg src="/img/navigation/icon-vegan-pollo.svg" />
                </Type.VeganTypeImgCircle>
                <Type.VeganTypeName>폴로</Type.VeganTypeName>
                <Type.VeganTypeEnName>Pollo</Type.VeganTypeEnName>
                <Type.VeganTypeDetail>
                  닭고기 섭취
                  <p>붉은 살코기 금지</p>
                </Type.VeganTypeDetail>
              </Type.VeganType>
            </Type.VeganTypeRow>
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
