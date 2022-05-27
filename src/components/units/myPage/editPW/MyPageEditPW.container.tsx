import { useQuery } from "@apollo/client";
import MyPageInfoUI from "./MyPageEditPW.presenter";
import { FETCH_USER } from "./MyPageEditPW.queries";

export default function MyPageEditPw() {
  const { data: userData } = useQuery(FETCH_USER);

  return <MyPageInfoUI userData={userData} />;
}
