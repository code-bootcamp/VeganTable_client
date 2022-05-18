import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestRecipeUI from "./BestRecipe.presenter";

export default function BestRecipe() {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return <BestRecipeUI settings={settings} />;
}
