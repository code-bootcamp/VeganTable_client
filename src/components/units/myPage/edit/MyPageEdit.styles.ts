import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.25rem 15rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90rem;
`;

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SignOut = styled.button`
  border: none;
  background-color: #ffffff;
  font-weight: 700;
  color: #848484;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 2rem;
  width: 100%;

  & p {
    padding-left: 15px;
    color: #848484;
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 1.5rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 7rem;
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
`;

export const VeganTypeWrapper = styled.div``;

export const FlexRow = styled.div`
  display: flex;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 17.125rem;
  height: 17.125rem;
  background-color: #c4c4c4;
  border-radius: 50%;
  margin: 2rem;
`;

export const ImageButton = styled.button`
  border: 1px solid #c4c4c4;
  border-radius: 2rem;
  background-color: #ffffff;
  width: 11.25rem;
  height: 2.5rem;
  color: #c4c4c4;
  font-size: 1.25rem;
  letter-spacing: -0.06rem;
  font-weight: 500;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  width: 25%;
  color: #464646;
`;

export const SexSelect = styled.select`
  width: 7rem;
  height: 4rem;
  padding: 20px;
  border-radius: 2rem;
  border: 1px solid #bfbfbf;
  margin-bottom: 0.625rem;
  margin-left: 1rem;
`;

export const Button = styled.button`
  width: 13.75rem;
  height: 4rem;
  border: 1px solid #bfbfbf;
  border-radius: 2rem;
  padding: 20px;
  margin-bottom: 10px;
  margin-left: 25px;
  font-weight: 500;
  background-color: #c4c4c4;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  width: 59.5rem;
`;
