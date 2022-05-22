import styled from "@emotion/styled";

export const Container = styled.div``;

export const Wrapper = styled.div``;

export const MenuTitle = styled.h1`
  padding-bottom: 0.75rem;
  font-weight: 700;
  font-size: 3.125rem;
  letter-spacing: -0.05em;
`;

export const MenuRemarks = styled.p`
  padding-bottom: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.05em;
  color: rgba(38, 38, 38, 0.6);
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 2px 0;
  border-radius: 1rem;
  margin-right: 4px;
  color: #ffffff;
  font-size: 0.875rem;
  width: 5.125rem;
  display: flex;
  justify-content: center;
`;

export const TagVegan = styled(Tag)`
  background: #0fbaa3;
`;

export const TagLacto = styled(Tag)`
  background: #cee135;
`;

export const TagOvo = styled(Tag)`
  background: #fcd921;
`;

export const TagLactoOvo = styled(Tag)`
  background: #b991fa;
`;

export const TagPesco = styled(Tag)`
  background: #ef7c90;
`;

export const TagPollo = styled(Tag)`
  background: #fe974d;
`;

export const RecipeInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #464646;
`;

export const RecipeInfoBottom = styled.div``;

export const RecipeInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RecipeInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3.125rem;
  width: 369px;
`;

export const RecipeTags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3.25rem;
  flex-wrap: wrap;
  width: 322px;

  & > span {
    padding: 0.375rem 0.88rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    color: #848484;
    border: 1px solid #848484;
    border-radius: 2rem;
    flex: 0 0 102px;
    text-align: center;
  }
`;

export const RecipeInfoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3.25rem;
  width: 385px;
`;

export const PickedButton = styled.button`
  width: 289px;
  height: 77px;
  font-weight: 600;
  letter-spacing: -0.05em;
  background: #0fbaa3;
  color: #ffffff;
  border: none;
  border-radius: 64px;
`;

export const ShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: auto;
  border-radius: 50%;
  background: #434343;
  padding: 1.5rem;
  border: none;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CommentContainer = styled.div`
  padding-top: 5.06rem;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 422px;
  padding: 1rem 2rem;
  background: #f2f2f2;
  border-radius: 2rem;
  font-weight: 400;
  letter-spacing: -0.05em;
  color: rgba(38, 38, 38, 0.6);
`;

export const CommentUserInfo = styled.div`
  padding-top: 0.81rem;
  margin-left: auto;

  & > span:first-of-type {
    padding-right: 0.5rem;
    border-right: 1px solid rgba(38, 38, 38, 0.6);
  }

  & > span:nth-of-type(2) {
    padding-left: 0.5rem;
  }
`;