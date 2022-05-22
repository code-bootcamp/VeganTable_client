import styled from "@emotion/styled";

interface INormalButtonProps {
  title?: String;
  color?: string;

  onClick?: () => void;
}

export const Button = styled.button`
  width: 13.75rem;
  height: 4rem;
  border: none;
  border-radius: 2rem;
  padding: 20px;
  margin-left: 25px;
  font-weight: 500;
  font-size: 1rem;
  color: ${(props: INormalButtonProps) =>
    props.color === "green" ? "#ffffff" : "#464646"};
  background-color: ${(props: INormalButtonProps) =>
    props.color === "green" ? "#0fbaa3" : "#c4c4c4"};
  cursor: pointer;
`;

export default function NormalButton(props: INormalButtonProps) {
  return (
    <Button onClick={props.onClick} color={props.color}>
      {props.title}
    </Button>
  );
}