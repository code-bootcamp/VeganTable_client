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

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5rem;
  font-size: 0.75rem;
  background: #ffffff;
  border: none;
  cursor: pointer;

  & > img {
    padding-right: 0.5rem;
  }
`;
export const SliderWrapper = styled.div`
  position: relative;
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
export const MenuInnerWrapper = styled.div``;

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

export const Order = styled.div`
  position: relative;

  & > span {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.31rem 1rem;
    background: #eff18b;
    border-radius: 50%;
  }
  & > p {
    padding: 88px 40px;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Ingredient = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;

  & > span {
    flex: 1 0 25%;
  }
`;
