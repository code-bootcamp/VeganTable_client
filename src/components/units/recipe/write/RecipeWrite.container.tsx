import RecipeWriteUI from "./RecipeWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const nonSchema = yup.object({});

export default function RecipeWrite() {
  const [hashArr, setHashArr] = useState([]);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(nonSchema),
    mode: "onChange",
  });

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

  return (
    <RecipeWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onKeyUpHash={onKeyUpHash}
      onClickDeleteTag={onClickDeleteTag}
      hashArr={hashArr}
    />
  );
}
