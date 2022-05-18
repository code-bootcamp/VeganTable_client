import { useState } from "react";
import SubmitButton from "../../commons/buttons/submit";
import * as Type from "./TypeCheck.styles";

export default function TypeCheckQ2(props) {
  const [isPicked, setIsPicked] = useState([false]);

  const onClickKeyword = (i) => (e) => {
    const newPicked = [...isPicked];
    newPicked[i] = !isPicked[i];
    setIsPicked(newPicked);
  };

  const VEGAN_KEYWORD = [
    { word: "다이어트" },
    { word: "면역력" },
    { word: "환경보호" },
    { word: "당뇨" },
    { word: "고혈압" },
    { word: "도전" },
    { word: "123" },
    { word: "456" },
    { word: "789" },
  ];

  return (
    <Type.VeganKeywordContentsWrapper>
      <Type.StepWrapper>
        <Type.StepCircleOn>01</Type.StepCircleOn>
        <Type.StepBarOn />
        <Type.StepCircleOn>02</Type.StepCircleOn>
        <Type.StepBar />
        <Type.StepCircle>03</Type.StepCircle>
      </Type.StepWrapper>
      <Type.StepQuestion>
        Q2. 관리하고 싶은 채식 키워드는 무엇인가요?
      </Type.StepQuestion>
      <Type.VeganKeywordWrapper>
        {VEGAN_KEYWORD.map((el, i) => (
          <Type.VeganKeywordRow key={i}>
            <Type.VeganKeyword
              id={el.word}
              onClick={onClickKeyword(i)}
              isPicked={isPicked[i]}
            >
              {isPicked[i] ? (
                <Type.VeganKeywordCheckIcon src="/img/icon/Check.svg" />
              ) : (
                <Type.VeganKeywordCheckIcon src="/img/icon/Add.svg" />
              )}
              {el.word}
            </Type.VeganKeyword>
          </Type.VeganKeywordRow>
        ))}
      </Type.VeganKeywordWrapper>
      <SubmitButton
        title={"다음"}
        isActive={true}
        onClick={props.onClickNextStep}
      />
    </Type.VeganKeywordContentsWrapper>
  );
}