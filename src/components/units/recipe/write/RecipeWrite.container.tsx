import RecipeWriteUI from "./RecipeWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef, useState } from "react";

const nonSchema = yup.object({});

export default function RecipeWrite() {
  // 탭 Ref
  const ingredientTabRef = useRef<HTMLDivElement>(null);
  const cookOrderTabRef = useRef<HTMLDivElement>(null);
  const [tabActive, setTabActive] = useState(["isActive", ""]);
  // 태그
  const [hashArr, setHashArr] = useState([]);
  // 재료Array
  const [ingredientArr, setIngredientArr] = useState([]);
  // desc Array
  const [descArr, setDescArr] = useState([]);
  // 재료
  const [ingredient, setIngredient] = useState({
    name: "",
    amount: "",
    unit: "",
  });
  // description
  const [desc, setDesc] = useState({
    step: 0,
    image: "",
    desc: "",
  });
  // useForm
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(nonSchema),
    mode: "onChange",
  });

  // 재료 input 입력
  const onChangeIngredient = (event) => {
    setIngredient((prev) => ({
      ...ingredient,
      [event.target.name]: event.target.value,
    }));
  };

  // step 입력(description)
  const onChangeTextArea = (event) => {
    setDesc((prev) => ({
      ...desc,
      desc: event.target.value,
    }));
  };

  // step 추가
  const onClickAddDesc = () => {
    const newDesc = desc.desc.replaceAll(/\n/gi, "<br />");
    if (!desc.desc) return;
    setDescArr((prev) => [
      ...descArr,
      {
        step: descArr.length + 1,
        image: desc.image,
        desc: newDesc,
      },
    ]);
  };

  // step 삭제
  const onClickDeleteDesc = (arg) => () => {
    setDescArr(descArr.filter((el) => el.step !== arg));
  };

  // 재료추가
  const onClickAddIngredient = () => {
    if (!ingredient.name || !ingredient.amount || !ingredient.unit) return;
    setIngredientArr((prev) => [...ingredientArr, ingredient]);
  };

  // 재료 삭제
  const onClickDeleteIngredient = (arg) => () => {
    setIngredientArr(ingredientArr.filter((el) => el !== arg));
  };

  // 해쉬태그
  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  // 해쉬태그 삭제
  const onClickDeleteTag = (tag) => () => {
    setHashArr(hashArr.filter((el) => el !== `${tag}`));
  };

  // 탭 Ref
  const onClickIngredientTab = () => {
    ingredientTabRef.current?.scrollIntoView({ behavior: "smooth" });
    setTabActive(["isActive", ""]);
  };
  const onClickCookOrderTab = () => {
    cookOrderTabRef.current?.scrollIntoView({ behavior: "smooth" });
    setTabActive(["", "isActive"]);
  };

  return (
    <RecipeWriteUI
      formState={formState}
      hashArr={hashArr}
      ingredientArr={ingredientArr}
      descArr={descArr}
      ingredientTabRef={ingredientTabRef}
      cookOrderTabRef={cookOrderTabRef}
      tabActive={tabActive}
      register={register}
      handleSubmit={handleSubmit}
      onClickDeleteTag={onClickDeleteTag}
      onClickAddIngredient={onClickAddIngredient}
      onChangeIngredient={onChangeIngredient}
      onKeyUpHash={onKeyUpHash}
      onClickDeleteIngredient={onClickDeleteIngredient}
      onChangeTextArea={onChangeTextArea}
      onClickAddDesc={onClickAddDesc}
      onClickIngredientTab={onClickIngredientTab}
      onClickCookOrderTab={onClickCookOrderTab}
      onClickDeleteDesc={onClickDeleteDesc}
    />
  );
}
