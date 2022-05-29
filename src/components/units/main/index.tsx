import SearchBar01 from "../../commons/searchBars/01";
import Navigation01 from "../../commons/navigation/01";
import BestRecipe from "./bestRecipe/BestRecipe.container";
import MonthlyRecipe from "./monthlyRecipe/MonthlyRecipe.container";
import DeliveryService from "./deliveryService/DeliveryService.container";
import Magazine from "./magazine/Magazine.container";
import Promotion from "./promotion/Promotion.container";
import { useState } from "react";

export default function Main() {
  const [, setSelectedTypes] = useState("NON_CHECKED");

  return (
    <>
      <SearchBar01 />
      <Navigation01 setSelectedTypes={setSelectedTypes} />
      <BestRecipe />
      <MonthlyRecipe />
      <DeliveryService />
      <Magazine />
      <Promotion />
    </>
  );
}
