import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2.18rem;
  width: 100%;
`;

export const RepImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 585px;
  height: 559px;
  background: #ebebeb;
  border-radius: 2rem;

  span {
    padding-top: 1.25rem;
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

export const UploadIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.25rem;

  & > div {
    width: 6.06rem;
    height: 6.06rem;
    background: #ebebeb;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-of-type(n + 2) {
      margin-left: 1rem;
    }
  }
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 9;
  background: #ffffff;
  border: 1px solid #c4c4c4;

  & > li {
    padding: 1rem 1.5rem;
    margin: 0 1rem;
    font-weight: 400;
    color: #262626;
  }

  .active {
    border-bottom: 3px solid #0fbaa3;
  }
`;

export const Contents = styled.div`
  & > h2 {
    padding-top: 4.625rem;
    padding-bottom: 4rem;
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: -0.05em;
  }
`;

export const EditorWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
`;
export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 3rem;
  font-size: 0.75rem;
  background: #ffffff;
  border: none;
  cursor: pointer;

  & > img {
    padding-right: 0.5rem;
  }
`;

export const MenuWrapper = styled.div`
  position: sticky;
  overflow-y: auto;
  top: 0;
  padding: 3rem 1.5rem;
  width: 40%;
  height: 100vh;
  box-shadow: 0px 6px 11px rgba(0, 0, 0, 0.25);
`;

export const IngredientsHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;

  & > div {
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    padding: 0.3rem 1rem;
    background: #0fbaa3;
    color: #ffffff;
    border-radius: 1rem;
  }
`;

export const IngredientInputs = styled.input`
  padding-bottom: 1rem;
`;
