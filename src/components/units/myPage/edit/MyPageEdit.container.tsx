import { useMutation, useQuery } from "@apollo/client";
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
  const [isOpen, setIsOpen] = useState(false);
  const [userInputs, setUserInputs] = useState({
    type: "",
    address: "",
    phone: "",
    token: "",
    valid: "false",
    profilePic: "",
  });

  const { data: userData } = useQuery(FETCH_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const [getToken] = useMutation(SEND_TOKEN_TO_SMS);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);

  const { register, handleSubmit } = useForm({ mode: "onChange" });

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

  console.log(userInputs);
  // 모달
  const { Success01, Success02, Error, Warning } = useModal({
    SuccessTitle01: "발송 완료",
    SuccessText01: "인증번호를 발송하였습니다",
    SuccessTitle02: "인증 완료",
    SuccessText02: "인증번호가 일치합니다.",
    ErrorTitle: "인증 실패",
    ErrorText: "인증번호가 일치하지 않습니다.",
    WarningTitle: "발송 실패",
    WarningText: "이미 등록된 번호이거나 유효한 번호가 아닙니다.",
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

  // 인증번호 전송
  const onClickGetToken = async () => {
    try {
      await getToken({
        variables: {
          phone: String(userInputs.phone),
        },
      });
      Success01();
    } catch (error) {
      Warning();
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
        Error();
        setUserInputs({ ...userInputs, valid: "false" });
        return;
      }
      Success02();
      setUserInputs({ ...userInputs, valid: "true" });
    } catch (error) {
      Error();
    }
  };

  // 회원정보 수정
  const onClickUpdateUser = async (data) => {
    if (userInputs.phone && userInputs.valid === "false") {
      alert("폰 인증해");
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

      alert("업데이트 성공");
      location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

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
        } catch (error) {
          alert("탈퇴 실패!");
        }
      }
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
