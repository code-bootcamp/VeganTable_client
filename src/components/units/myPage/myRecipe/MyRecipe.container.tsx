import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../main/MyPageMain.queries";
import MyRecipeUI from "./MyRecipe.presenter";
import { FETCH_MY_RECIPE } from "./MyRecipe.queries";

export default function MyRecipe() {
  const { data: userData } = useQuery(FETCH_USER);
  const { data } = useQuery(FETCH_MY_RECIPE, {
    variables: { user_id: String(userData?.fetchUser.user_id), page: 1 },
  });
  console.log(data);

  return <MyRecipeUI data={data} />;
}
