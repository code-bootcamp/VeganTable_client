import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_MY_RECIPE } from "../myRecipe/MyRecipe.queries";
import MyPageMainUI from "./MyPageMain.presenter";
import { FETCH_USER } from "./MyPageMain.queries";

export default function MyPageMain() {
  const router = useRouter();
  const [recentItems, setRecentItems] = useState([]);

  const { data: userData } = useQuery(FETCH_USER);
  const { data: userRecipe } = useQuery(FETCH_MY_RECIPE, {
    variables: { user_id: String(userData?.fetchUser.user_id) },
  });

  console.log(userRecipe?.fetchMyRecipe);

  useEffect(() => {
    const recent = JSON.parse(localStorage.getItem("recent") || "[]");
    setRecentItems(recent);
  }, []);

  const onClickMoveToDetail = (e) => {
    router.push(`/recipe/${e.currentTarget.id}`);
  };

  return (
    <MyPageMainUI
      userData={userData}
      userRecipe={userRecipe}
      recentItems={recentItems}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
