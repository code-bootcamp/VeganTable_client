import { useQuery } from "@apollo/client";
import MyPageMainUI from "./MyPageMain.presenter";
import { FETCH_USER } from "./MyPageMain.queries";

export default function MyPageMain() {
  const { data } = useQuery(FETCH_USER);

  return <MyPageMainUI data={data} />;
}
