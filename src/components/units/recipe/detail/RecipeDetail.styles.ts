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

export const Contents = styled.div``;
export const Item = styled.div``;
export const MenuWrapper = styled.div`
  position: relative;
  padding: 3rem 1.5rem;
  width: 500px;
  height: 100%;
  box-shadow: 0px 6px 11px rgba(0, 0, 0, 0.25);
`;
export const MenuInnerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem 2rem;
  background: #ffffff;
  height: 100%;
  box-shadow: 0px 6px 11px rgba(0, 0, 0, 0.25);
  z-index: 3;
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  width: 100%;
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
