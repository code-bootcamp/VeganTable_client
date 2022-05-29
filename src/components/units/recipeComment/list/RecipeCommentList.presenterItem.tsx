import * as CommentItem from "./RecipeCommentList.styles";

export default function RecipeCommentListUIItem(props) {
  console.log(props.el);
  return (
    <CommentItem.Comment>
      <div>
        <span>{props.el?.user?.email}</span>
        <span>
          {props.el?.user?.type === "Vegan" && "비건"}
          {props.el?.user?.type === "Lacto" && "락토"}
          {props.el?.user?.type === "Ovo" && "오보"}
          {props.el?.user?.type === "Lacto_Ovo" && "락토오보"}
          {props.el?.user?.type === "Pesco" && "페스코"}
          {props.el?.user?.type === "Pollo" && "폴로"}
        </span>
        <span>2일전</span>
      </div>
      <p>{props.el?.contents}</p>
    </CommentItem.Comment>
  );
}
