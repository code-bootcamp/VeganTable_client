import { useRouter } from "next/router";
import SubscribeCompleteUI from "./SubscribeComplete.presenter";

export default function SubscribeComplete() {
  const router = useRouter();

  const onClickMoveToMain = () => {
    router.push("/");
  };

  return <SubscribeCompleteUI onClickMoveToMain={onClickMoveToMain} />;
}
