import SearchBar01 from "../../commons/searchBars/01";
import Navigation01 from "../../commons/navigation/01";
import BestRecipe from "./bestRecipe/BestRecipe.container";
import MonthlyRecipe from "./monthlyRecipe/MonthlyRecipe.container";

export default function Main() {
  return (
    <>
      <SearchBar01 />
      <Navigation01 />
      <BestRecipe />
      <MonthlyRecipe />
    </>
  );
}
