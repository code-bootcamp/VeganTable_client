import SearchBar01 from "../../commons/searchBars/01";
import Navigation01 from "../../commons/navigation/01";
import BestRecipe from "./bestRecipe/BestRecipe.container";
import MonthlyRecipe from "./monthlyRecipe/MonthlyRecipe.container";
import DeliveryService from "./deliveryService/DeliveryService.container";
import Magazine from "./magazine/Magazine.container";
import Promotion from "./promotion/Promotion.container";

export default function Main() {
  const onClickTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <SearchBar01 />
      <Navigation01 />
      <BestRecipe />
      <MonthlyRecipe />
      <DeliveryService />
      <Magazine />
      <Promotion />
      <button
        onClick={onClickTopButton}
        style={{ width: "1200px", height: "500px", fontSize: "50px" }}
      >
        탑버튼 기능입니다.
        <br />
        /src/components/units/main/index.tsx
        <br />
        여기에 있어요 요놈 옮겨야해요.
      </button>
    </>
  );
}
