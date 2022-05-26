import { useState } from "react";
import RecipeWriteMenuUI from "./RecipeWriteMenu.presenter";

export default function RecipeWriteMenu(props) {
  const [selectType, setSelectType] = useState({ types: "VEGAN" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectType({
      [name]: value,
    });
  };
  console.log(selectType);
  return (
    <RecipeWriteMenuUI
      register={props.register}
      onKeyUpHash={props.onKeyUpHash}
      onClickDeleteTag={props.onClickDeleteTag}
      hashArr={props.hashArr}
      handleChange={handleChange}
      selectType={selectType}
    />
  );
}
