import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useModal } from "../../../commons/hooks/useModal";
import MyPageEditUI from "./MyPageEdit.presenter";
import {
  CHECK_VALID_TOKEN,
  FETCH_USER,
  SEND_TOKEN_TO_SMS,
  UPDATE_USER,
} from "./MyPageEdit.queries";

export default function MyPageEdit() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [userInputs, setUserInputs] = useState({
    type: "",
    address: "",
    phone: "",
    phoneCheck: "",
  });

  const { data: userData } = useQuery(FETCH_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [getToken] = useMutation(SEND_TOKEN_TO_SMS);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);

  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const onChangeUserInputs = (id) => (e) => {
    setUserInputs((prev) => ({
      ...userInputs,
      [id]: e.target.value,
    }));
  };

  // 모달
  const { Success01, Success02, Error, Warning } = useModal({
    SuccessTitle01: "발송 완료",
    SuccessText01: "인증번호를 발송하였습니다",
    SuccessTitle02: "인증 완료",
    SuccessText02: "인증번호가 일치합니다.",
    ErrorTitle: "인증 실패",
    ErrorText: "인증번호가 일치하지 않습니다.",
    WarningTitle: "발송 실패",
    WarningText: "이미 인증받은 번호거나 유효하지 않은 번호입니다.",
  });

  // 주소
  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (postcode) => {
    setUserInputs({ ...userInputs, address: postcode.address });
    setIsOpen(false);
  };

  const onClickClose = (event) => {
    if (event.target) setIsOpen(false);
    // window.scrollTo({ top: 1200, behavior: "smooth" });
  };

  // 인증번호
  const onClickGetToken = async (data) => {
    try {
      await getToken({
        variables: {
          phone: Number(data.phone),
        },
      });
      Success01();
    } catch (error) {
      Warning();
    }
  };

  const onClickCheckValid = async (data) => {
    try {
      await checkValidToken({
        variables: {
          phone: Number(data.phone),
          token: Number(data.token),
        },
      });
      Success02();
    } catch (error) {
      if (error instanceof Error) Error();
    }
  };

  const onClickUpdateUser = async (data) => {
    const updateUserInput = {};
    if (data.nickname) updateUserInput.nickname = data.nickname;
    if (userInputs.address) updateUserInput.address = userInputs.address;
    if (data.addressDetail) updateUserInput.addressDetail = data.addressDetail;
    if (userInputs.type) updateUserInput.type = userInputs.type;

    try {
      await updateUser({
        variables: {
          user_id: String(userData?.fetchUser.user_id),
          updateUserInput,
        },
      });

      alert("업뎃");

      location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MyPageEditUI
      userData={userData}
      isOpen={isOpen}
      userInputs={userInputs}
      onChangeUserInputs={onChangeUserInputs}
      setUserInputs={setUserInputs}
      onClickAddressSearch={onClickAddressSearch}
      onClickClose={onClickClose}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickUpdateUser={onClickUpdateUser}
      handleSubmit={handleSubmit}
      register={register}
      onClickGetToken={onClickGetToken}
      onClickCheckValid={onClickCheckValid}
    />
  );
}
