import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../main/MyPageMain.queries";
import MyWishUI from "./MyWish.presenter";
import { FETCH_MY_SCRAPS } from "./MyWish.queries";

export default function MyWish() {
  const { data: userData } = useQuery(FETCH_USER);
  const { data } = useQuery(FETCH_MY_SCRAPS, {
    variables: {
      user_id: String(userData?.fetchUser.user_id),
    },
  });

  return <MyWishUI data={data} />;
}
