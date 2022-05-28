import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useModal } from "../../../commons/hooks/useModal";
import MyPageEditUI from "./MyPageEdit.presenter";
import {
  CHECK_VALID_TOKEN,
  DELETE_USER,
  FETCH_USER,
  SEND_TOKEN_TO_SMS,
  UPDATE_USER,
} from "./MyPageEdit.queries";

export default function MyPageEdit() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [userInputs, setUserInputs] = useState({
    type: "NON_Vegan",
    address: "",
    phone: "",
    token: "",
    valid: "false",
    profilePic: "",
    certImage: "",
    certUrl: "",
  });

  const { data: userData } = useQuery(FETCH_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const [getToken] = useMutation(SEND_TOKEN_TO_SMS);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);

  const { register, handleSubmit } = useForm({ mode: "onChange" });

  // 모달
  const { Success, ModalError, Warning } = useModal();

  // 이미지
  useEffect(() => {
    if (userData?.fetchUser.profilePic) {
      setUserInputs({
        ...userInputs,
        profilePic: String(userData?.fetchUser.profilePic),
      });
    }
  }, [userData]);

  // 인풋값
  const onChangeUserInputs = (id) => (e) => {
    setUserInputs({
      ...userInputs,
      [id]: e.target.value,
    });
  };

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

  // 인증번호 전송
  const onClickGetToken = async () => {
    try {
      await getToken({
        variables: {
          phone: String(userInputs.phone),
        },
      });
      Success("발송 성공", "인증번호를 발송하였습니다.");
    } catch (error) {
      if (error instanceof Error) Warning("발송 실패", error.message);
    }
  };

  // 인증번호 검증
  const onClickCheckValid = async () => {
    try {
      const result = await checkValidToken({
        variables: {
          phone: String(userInputs.phone),
          token: String(userInputs.token),
        },
      });

      const CheckValid = result.data.checkValidToken;
      if (CheckValid === "false") {
        ModalError("인증 실패", "인증번호가 일치하지 않습니다.");
        setUserInputs({ ...userInputs, valid: "false" });
        return;
      }
      Success("인증 완료", "인증번호가 일치합니다.");
      setUserInputs({ ...userInputs, valid: "true" });
    } catch (error) {
      if (error instanceof Error) ModalError("인증 실패", error.message);
    }
  };

  // 회원정보 수정
  const onClickUpdateUser = async (data) => {
    if (userInputs.phone && userInputs.valid === "false") {
      ModalError("수정 실패", "인증받지 않은 휴대폰 번호입니다.");
      return;
    }

    const updateUserInput = {};
    if (data.nickname) updateUserInput.nickname = data.nickname;
    if (userInputs.address) updateUserInput.address = userInputs.address;
    if (data.addressDetail) updateUserInput.addressDetail = data.addressDetail;
    if (userInputs.type) updateUserInput.type = userInputs.type;
    if (userInputs.profilePic)
      updateUserInput.profilePic = userInputs.profilePic;

    try {
      await updateUser({
        variables: {
          user_id: String(userData?.fetchUser.user_id),
          updateUserInput,
        },
      });

      Success("수정 성공", "회원정보가 수정되었습니다.");
      location.reload();
    } catch (error) {
      if (error instanceof Error) ModalError("수정 실패", error.message);
    }
  };

  // 회원탈퇴
  const onClickSignOut = () => {
    Swal.fire({
      title: "정말 탈퇴하시겠습니까?",
      text: "탈퇴한 회원정보는 복구할 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#C4C4C4",
      cancelButtonColor: "#0FBAA3",
      focusCancel: true,
      confirmButtonText: "OK",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUser({
            variables: {
              user_id: String(userData?.fetchUser.user_id),
            },
          });
          Success("탈퇴 완료", "또 만나요🥗");
          router.push("/");
        } catch (error) {
          if (error instanceof Error) ModalError("탈퇴 실패", error.message);
        }
      }
    });
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
      onClickSignOut={onClickSignOut}
    />
  );
}
