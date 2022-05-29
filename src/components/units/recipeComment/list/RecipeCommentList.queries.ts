import { gql } from "@apollo/client";

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
