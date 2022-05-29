import RecipeCommentListUIItem from "./RecipeCommentList.presenterItem";
import RecipeCommentWrite from "../write/RecipeCommentWrite.container";
import * as Comment from "./RecipeCommentList.styles";
import { v4 as uuidv4 } from "uuid";

export default function RecipeCommentListUI(props) {
  console.log(props.fetchComment?.fetchReplies);
  return (
    <>
      <Comment.Container>
        <Comment.Wrapper>
          <Comment.HeadText>
            <span>댓글</span>
            <span>{props.fetchComment?.fetchReplies.length}</span>
          </Comment.HeadText>
          <RecipeCommentWrite fetchUser={props.fetchUser} />
        </Comment.Wrapper>
        {props.fetchComment?.fetchReplies.map((el) => (
          <Comment.CommentWrapper key={uuidv4()}>
            <RecipeCommentListUIItem el={el} />
          </Comment.CommentWrapper>
        ))}
      </Comment.Container>
    </>
  );
}
