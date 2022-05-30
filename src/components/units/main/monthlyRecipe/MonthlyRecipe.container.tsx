import MonthlyRecipeUI from "./MonthlyRecipe.presenter";
import { useState } from "react";

export default function MonthlyRecipe() {
  const [pickTag, setPickTag] = useState({
    pickTag: "#채식이 처음인 사람들을 위한 쉬운 레시피",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPickTag({
      [name]: value,
    });
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <MonthlyRecipeUI
      settings={settings}
      handleChange={handleChange}
      pickTag={pickTag}
    />
  );
}
