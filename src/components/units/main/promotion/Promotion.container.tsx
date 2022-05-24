import { useModal } from "../../../commons/hooks/useModal";
import PromotionUI from "./Promotion.presenter";

export default function Promotion() {
  const { MapModal } = useModal({});

  const onClickContents = () => {
    MapModal();
  };
  return <PromotionUI onClickContents={onClickContents} />;
}
