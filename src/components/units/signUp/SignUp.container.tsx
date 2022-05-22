import SignUpUI from "./SignUp.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "../../../commons/libraries/validation";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./SignUp.queries";

export default function SignUp() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const [createUser] = useMutation(CREATE_USER);

  const onClickSubmit = async (data) => {
    try {
      await createUser({
        variables: { data },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}
