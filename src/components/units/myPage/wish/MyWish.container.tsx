import { useQuery } from "@apollo/client";
import MyWishUI from "./MyWish.presenter";
import { FETCH_MY_SCRAPS } from "./MyWish.queries";

export default function MyWish() {
  const { data } = useQuery(FETCH_MY_SCRAPS);
  return <MyWishUI data={data} />;
}
