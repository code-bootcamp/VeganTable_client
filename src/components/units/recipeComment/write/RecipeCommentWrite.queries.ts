import { gql } from "@apollo/client";

export const CREATE_REPLY = gql`
  mutation createReply($user_id: String!, $contents: String!, $id: String!) {
    createReply(user_id: $user_id, contents: $contents, id: $id)
  }
`;

export const FETCH_REPLIES = gql`
  query fetchReplies($id: String!) {
    fetchReplies(id: $id) {
      reply_id
      contents
      user {
        user_id
        email
        name
        type
      }
    }
  }
`;
