import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { useModal } from "../../hooks/useModal";
import ProfileUploadUI from "./CertificationUpload.presenter";
import { UPLOAD_CERTIFICATION_IMAGE } from "./CertificationUpload.queries";
import { checkValidationImage } from "./CertificationUpload.validation";

export default function CertificationUpload(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadCertificationImage] = useMutation(UPLOAD_CERTIFICATION_IMAGE);
  const { Success, ModalError } = useModal();

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadCertificationImage({ variables: { file } });
      props.setUserInputs({
        ...props.userInput,
        certImage: String(result.data.uploadCertificationImage),
      });

      Success("업로드 완료", "회원정보 수정을 완료해야 성공적으로 등록됩니다.");
    } catch (error) {
      if (error instanceof Error) {
        ModalError("업로드 실패", error.message);
      }
    }
  };

  return (
    <ProfileUploadUI
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      userInputs={props.userInputs}
    />
  );
}
