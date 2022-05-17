import styled from "@emotion/styled";

interface IUserInputProps {
  placeholder?: string | undefined;
  inputSize?: string | undefined;
  onChange?: () => void;
}

const Input = styled.input`
  width: ${(props: IUserInputProps) =>
    props?.inputSize === "medium" ? "16.7rem" : "24.75rem"};
  height: 4rem;
  border: 1px solid #bfbfbf;
  border-radius: 2rem;
  padding: 20px;
  margin-bottom: 10px;
`;

export default function UserInput(props: IUserInputProps) {
  return (
    <Input
      placeholder={props?.placeholder}
      inputSize={props?.inputSize}
      onChange={props?.onChange}
    />
  );
}
