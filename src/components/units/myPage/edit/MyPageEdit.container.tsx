import { useRef, useState } from "react";
import MyPageEditUI from "./MyPageEdit.presenter";

export default function MyPageEdit() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onClickAddressComplete = () => {
    setIsOpen(false);
  };

  const onClickOutSide = (event) => {
    if (modalRef.current !== event.target) {
      setIsOpen(false);
      window.scrollTo({ top: 1200, behavior: "smooth" });
    }
  };

  return (
    <MyPageEditUI
      onClickAddress={onClickAddressSearch}
      isOpen={isOpen}
      onClickOutSide={onClickOutSide}
      onClickAddressComplete={onClickAddressComplete}
      modalRef={modalRef}
    />
  );
}
