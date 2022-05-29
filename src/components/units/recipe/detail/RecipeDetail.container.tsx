import RecipeDetailUI from "./RecipeDetail.presenter";
import { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_RECIPE, FETCH_USER } from "./RecipeDetail.queries";
import { useRouter } from "next/router";

export default function RecipeDetail() {
  const router = useRouter();
  const { data: recipeData } = useQuery(FETCH_RECIPE, {
    variables: {
      recipes_id: String(router.query.recipeId),
    },
  });
  const { data: fetchUser } = useQuery(FETCH_USER);
  console.log();
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
      fetchUser={fetchUser}
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
