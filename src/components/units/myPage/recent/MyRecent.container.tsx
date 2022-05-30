import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MyRecentUI from "./MyRecent.presenter";

export default function MyRecent() {
  const [recentItems, setRecentItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const recent = JSON.parse(localStorage.getItem("recent") || "[]");
    setRecentItems(recent);
  }, []);

  const onClickMoveToDetail = (e) => {
    router.push(`/recipe/${e.currentTarget.id}`);
  };

  return (
    <MyRecentUI
      recentItems={recentItems}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
