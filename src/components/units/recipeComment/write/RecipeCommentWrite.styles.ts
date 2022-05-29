import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  background: #f2f2f2;
  resize: none;

  ::placeholder {
    font-size: 0.8rem;
  }
`;

export const SubmitButton = styled.button`
  font-size: 1.25rem;
  background: #0fbaa3;
  border: 1px solid transparent;
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  color: #ffffff;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #0fbaa3;
    background: #ffffff;
    border: 1px solid #0fbaa3;
  }
`;
