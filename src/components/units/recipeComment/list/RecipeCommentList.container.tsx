import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import RecipeCommentListUI from "./RecipeCommentList.presenter";
import { FETCH_REPLIES } from "./RecipeCommentList.queries";

export default function RecipeCommentList(props) {
  const router = useRouter();
  const { data: fetchComment } = useQuery(FETCH_REPLIES, {
    variables: { id: String(router.query.recipeId) },
  });

  return (
    <RecipeCommentListUI
      fetchUser={props.fetchUser}
      fetchComment={fetchComment}
    />
  );
}
