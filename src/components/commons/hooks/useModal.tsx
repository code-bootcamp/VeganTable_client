import Swal from "sweetalert2";

interface IUseModalProps {
  SuccessTitle?: string;
  SuccessText?: string;
  WarningTitle?: string;
  WarningText?: string;
  ErrorTitle?: string;
  ErrorText?: string;
  WarningConfirmTitle?: string;
  WarningConfirmText?: string;
}

export function useModal(data: IUseModalProps) {
  const Success = () => {
    Swal.fire({
      title: data.SuccessTitle,
      text: data.SuccessText,
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
    Success,
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
