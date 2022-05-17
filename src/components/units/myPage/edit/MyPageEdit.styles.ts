import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 6.25rem auto;
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

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
`;

export const ExpertTitleWrapper = styled.div`
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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  width: 11rem;
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
  background-color: #c4c4c4;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
  width: 59.5rem;
`;
