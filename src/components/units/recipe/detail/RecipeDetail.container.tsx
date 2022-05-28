import RecipeDetailUI from "./RecipeDetail.presenter";
import { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_RECIPE } from "./RecipeDetail.queries";
import { useRouter } from "next/router";

export default function RecipeDetail() {
  const router = useRouter();
  const { data: recipeData } = useQuery(FETCH_RECIPE, {
    variables: {
      recipes_id: String(router.query.recipeId),
    },
  });
  console.log(recipeData);
  console.log(recipeData?.fetchRecipe?.recipesImages.map((el) => el.url));
  // 탭 Ref
  const ingredientTabRef = useRef<HTMLDivElement>(null);
  const cookOrderTabRef = useRef<HTMLDivElement>(null);
  const reviewTabRef = useRef<HTMLDivElement>(null);
  const [tabActive, setTabActive] = useState(["isActive", "", ""]);
  // 탭 Ref
  const onClickIngredientTab = () => {
    ingredientTabRef.current?.scrollIntoView({ behavior: "smooth" });
    setTabActive(["isActive", "", ""]);
  };
  const onClickCookOrderTab = () => {
    cookOrderTabRef.current?.scrollIntoView({ behavior: "smooth" });
    setTabActive(["", "isActive", ""]);
  };
  const onClickReviewTab = () => {
    reviewTabRef.current?.scrollIntoView({ behavior: "smooth" });
    setTabActive(["", "", "isActive"]);
  };

  return (
    <RecipeDetailUI
      recipeData={recipeData}
      ingredientTabRef={ingredientTabRef}
      cookOrderTabRef={cookOrderTabRef}
      reviewTabRef={reviewTabRef}
      tabActive={tabActive}
      onClickIngredientTab={onClickIngredientTab}
      onClickCookOrderTab={onClickCookOrderTab}
      onClickReviewTab={onClickReviewTab}
    />
  );
}
