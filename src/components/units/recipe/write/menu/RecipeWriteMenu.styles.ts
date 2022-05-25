import styled from "@emotion/styled";

export const Container = styled.div``;

export const MenuName = styled.div`
  display: flex;
  align-items: center;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 0.93rem;
  margin-bottom: 13px;

  & > img {
    width: 1.5rem;
    height: auto;
    padding-right: 7px;
  }

  & > input {
    border: none;
    font-size: 2.25rem;
    letter-spacing: -0.05em;
    font-weight: 600;
    background: transparent;
    width: 100%;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: #848484;
    }
  }
`;

export const Summary = styled.div`
  display: flex;
  align-items: center;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 0.93rem;
  margin-bottom: 15px;

  & > img {
    width: 1.5rem;
    height: auto;
    padding-right: 7px;
  }

  & > input {
    border: none;
    letter-spacing: -0.05em;
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    background: transparent;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: #848484;
    }
  }
`;

export const Vegan = styled.div`
  padding: 0.93rem;
  background: #f4f4f4;
  border-radius: 8px;
`;

export const VeganTypeHead = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  & > img {
    width: 1.5rem;
    height: auto;
    padding-right: 7px;
  }

  & > span {
    color: #848484;
    font-weight: 400;
    letter-spacing: -0.05em;
  }
`;

export const VeganType = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const VeganTypeTag = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0;
  margin-bottom: 1rem;
  margin-right: 2rem;
  flex: 1 0 calc((100% / 3) - 2rem);
  color: #ffffff;
  border-radius: 1rem;

  &:nth-of-type(3),
  &:nth-of-type(6) {
    margin-right: 0;
  }
  &:nth-of-type(n + 4) {
    margin-bottom: 0;
  }
`;

export const TagVegan = styled(VeganTypeTag)`
  background: #0fbaa3;
`;
export const TagLacto = styled(VeganTypeTag)`
  background: #cee135;
`;
export const TagOvo = styled(VeganTypeTag)`
  background: #fcd921;
`;
export const TagLactoOvo = styled(VeganTypeTag)`
  background: #b991fa;
`;
export const TagPesco = styled(VeganTypeTag)`
  background: #ef7c90;
`;
export const TagPollo = styled(VeganTypeTag)`
  background: #fe974d;
`;

export const RecipeInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;
export const RecipeInfoItem = styled.div`
  flex: 0 0 30%;
`;
export const RecipeInfoTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 2px solid #464646;

  & > span {
    padding-left: 0.5rem;
  }
`;
export const RecipeInfoBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > select {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    width: 80%;
    :focus {
      outline: none;
    }
  }
`;

export const RecipeInfoInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;

  & > input {
    border: none;
    width: 40px;
    :focus {
      outline: none;
    }
  }
`;

export const TagsWrapper = styled.div`
  padding: 0.93rem;
  background: #f4f4f4;
  border-radius: 8px;
`;
export const TagHead = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  & > img {
    width: 1.5rem;
    height: auto;
    padding-right: 7px;
  }

  & > input {
    border: none;
    background: transparent;
    width: 100%;
    :focus {
      outline: none;
    }
  }
`;
export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const Tag = styled.span`
  border: 1px solid #848484;
  border-radius: 2rem;
  font-size: 0.875rem;
  color: #848484;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  :hover {
    background: #848484;
    color: #ffffff;
  }
`;
