import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const MoveY = keyframes`
  from{
		transform: translateY(50%);
	}
	to{
		transform: translateY(0);
	}
`;

const Rotation = keyframes`
	from{
		transform: rotate(0deg)
	}
	to{
		transform: rotate(360deg)
	}
`;

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
    bottom: 6rem;
    position: absolute;

    button::before {
      color: #0fbaa3;
      padding-top: 1px;
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
  height: 694px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.num === 1 ? "#fcf7e1" : props.num === 2 ? "#eff18b" : "#fcf7e1"};
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;
`;

export const ImageGroup = styled.div`
  display: flex;
  position: relative;

  span {
    position: absolute;
  }

  & > div {
    width: 500px;
    height: auto;
    transition: all 2.5s ease;
    filter: blur(12px);
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &.isActive {
      filter: blur(0px);
    }
  }
  // 초록색 동그라미
  & > span:nth-of-type(2) {
    top: 10rem;
    right: -8rem;
    width: 26px;
    height: 26px;
    border: 5px solid #cfe869;
    border-radius: 50%;
    animation: ${MoveY} 3s 1s infinite ease-in-out alternate;
  }
  // 보라색 동그라미
  & > span:nth-of-type(3) {
    top: 4rem;
    right: -4rem;
    width: 16px;
    height: 16px;
    border: 4px solid #b991fa;
    border-radius: 50%;
    animation: ${MoveY} 2s 1s infinite ease-in-out alternate;
  }
  // 보라색 동그라미
  & > span:nth-of-type(4) {
    left: -2.5rem;
    bottom: 9.5rem;
    width: 84px;
    height: 84px;
    border: 4px solid #b991fa;
    border-radius: 50%;
    animation: ${MoveY} 4s 1s infinite ease-in-out alternate;
  }
  // 초록색 동그라미
  & > span:nth-of-type(5) {
    left: -5rem;
    bottom: 8rem;
    width: 29px;
    height: 29px;
    border: 4px solid #cfe869;
    border-radius: 50%;
    animation: ${MoveY} 3s 1s infinite ease-in-out alternate;
  }
  // dash 동그라미
  & > span:nth-of-type(6) {
    top: -10rem;
    left: -9rem;
    width: 250px;
    height: 250px;
    border: 6px dashed #cee135;
    border-radius: 50%;
    animation: ${Rotation} 15s 15s infinite ease-in-out alternate;
  }

  // dash 동그라미
  & > span:nth-of-type(7) {
    right: -40rem;
    bottom: -15rem;
    width: 600px;
    height: 600px;
    border: 8px dashed #cee135;
    border-radius: 50%;
    animation: ${Rotation} 20s 20s infinite ease-in-out alternate;
  }
`;

export const TextTop = styled.div`
  font-size: 2rem;
  font-weight: 500;
  word-break: keep-all;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
  transform: translateY(50%);
  opacity: 0;
  transition: all 1.5s ease;

  & > img {
    transform: translateY(-50%);
  }

  &.isActive {
    transform: translateY(0);
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
