import BestRecipeUI from "./BestRecipe.presenter";

export default function BestRecipe() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return <BestRecipeUI settings={settings} />;
}
