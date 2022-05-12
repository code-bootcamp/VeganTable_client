import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  .slick-dots {
    bottom: 132px;
    position: absolute;

    button::before {
      color: #0fbaa3;
    }

    .slick-active {
      button::before {
        color: #0fbaa3;
        border: 1px solid #0fbaa3;
        border-radius: 50%;
      }
    }
  }
`;

export const SliderContainer = styled.div`
  height: 759px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.num === 1 ? "#fcf7e1" : props.num === 2 ? "#eff18b" : "#cee135"};
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;
`;

export const TextTop = styled.div`
  font-size: 2rem;
  font-weight: 500;
  word-break: keep-all;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
  transform: translateX(50%);
  opacity: 0;
  transition: all 1.5s ease;
  &.isActive {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const TextMiddle = styled.div`
  font-size: 3.43rem;
  font-weight: 700;
  transform: translateY(50%);
  opacity: 0;
  transition: all 1.5s ease;
  transition-delay: 0.5s;
  &.isActive {
    transform: translateY(0);
    opacity: 1;
  }
  & > span {
    color: #0fbaa3;
  }
`;
