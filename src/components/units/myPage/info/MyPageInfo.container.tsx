import { useQuery } from "@apollo/client";
import MyPageInfoUI from "./MyPageInfo.presenter";
import { FETCH_USER } from "./MyPageInfo.queries";

export default function MyPageInfo() {
  const { data: userData } = useQuery(FETCH_USER);

  return <MyPageInfoUI userData={userData} />;
}
