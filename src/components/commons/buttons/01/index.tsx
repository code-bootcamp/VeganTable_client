import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.2rem;
  font-size: 0.825rem;
  font-weight: 600;
  color: #848484;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  width: 13.75rem;
  height: 3.5rem;
  cursor: pointer;
`;

export default function Button01() {
  return (
    <Button>
      전체보기
      <img src="/img/recipeList/icon-arrow-right-02.svg" />
    </Button>
  );
}
