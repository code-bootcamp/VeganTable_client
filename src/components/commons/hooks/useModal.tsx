import Swal from "sweetalert2";

interface IUseModalProps {
  SuccessTitle01?: string;
  SuccessText01?: string;
  SuccessTitle02?: string;
  SuccessText02?: string;
  WarningTitle?: string;
  WarningText?: string;
  ErrorTitle?: string;
  ErrorText?: string;
  WarningConfirmTitle?: string;
  WarningConfirmText?: string;
}

export function useModal(data: IUseModalProps) {
  const Success01 = () => {
    Swal.fire({
      title: data.SuccessTitle01,
      text: data.SuccessText01,
      icon: "success",
      confirmButtonColor: "#0fbaa3",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const Success02 = () => {
    Swal.fire({
      title: data.SuccessTitle02,
      text: data.SuccessText02,
      icon: "success",
      confirmButtonColor: "#0fbaa3",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const Warning = () => {
    Swal.fire({
      title: data.WarningTitle,
      text: data.WarningText,
      icon: "warning",
      confirmButtonColor: "#0fbaa3",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const Error = () => {
    Swal.fire({
      title: data.ErrorTitle,
      text: data.ErrorText,
      icon: "error",
      confirmButtonColor: "#0fbaa3",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const WarningConfirm = () => {
    Swal.fire({
      title: data.WarningConfirmTitle,
      text: data.WarningConfirmText,
      icon: "warning",
      confirmButtonColor: "#0fbaa3",
      showConfirmButton: true,
      showCancelButton: true,
    });
  };

  return {
    Success01,
    Success02,
    Warning,
    Error,
    WarningConfirm,
  };
}

// 사용 예제

// import { useModal } from "../../../commons/hooks/useModal";

// export default function MyPage() {
//   const { Success, Error } = useModal({
//     SuccessTitle: "호이호이",
//     SuccessText: "제가 해냈어요",
//     ErrorTitle: "어이쿠저이쿠",
//     ErrorText: "안녕히가세요",
//   });

//   const onClickModal = () => {
//     Success();
//   };
//   const onClickWarning = () => {
//     Error();
//   };

//   return (
// <button onClick={onClickModal}>모달시험</button>
// <button onClick={onClickWarning}>모달시험2</button>
//   );
// }
