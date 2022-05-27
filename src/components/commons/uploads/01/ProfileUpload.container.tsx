import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import ProfileUploadUI from "./ProfileUpload.presenter";
import { UPLOAD_PROFILE_IMAGE } from "./ProfileUpload.queries";
import { checkValidationImage } from "./ProfileUpload.validation";

export default function ProfileUpload(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadProfileImage] = useMutation(UPLOAD_PROFILE_IMAGE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadProfileImage({ variables: { file } });
      props.setUserInputs({
        ...props.userInput,
        profilePic: String(result.data.uploadProfileImage),
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
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
