import MonthlyRecipeUI from "./MonthlyRecipe.presenter";

export default function MonthlyRecipe() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return <MonthlyRecipeUI settings={settings} />;
}
