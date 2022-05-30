import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER } from "../main/MyPageMain.queries";
import MyRecipeUI from "./MyRecipe.presenter";
import { FETCH_MY_RECIPE } from "./MyRecipe.queries";

export default function MyRecipe() {
  const router = useRouter();
  const { data: userData } = useQuery(FETCH_USER);
  const { data } = useQuery(FETCH_MY_RECIPE, {
    variables: { user_id: String(userData?.fetchUser.user_id) },
  });

  const onClickMoveToDetail = (e) => {
    router.push(`/recipe/${e.currentTarget.id}`);
  };

  return <MyRecipeUI data={data} onClickMoveToDetail={onClickMoveToDetail} />;
}
