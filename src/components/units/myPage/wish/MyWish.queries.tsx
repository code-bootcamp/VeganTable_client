import { gql } from "@apollo/client";

export const FETCH_MY_SCRAPS = gql`
  query fetchMyScraps($user_id: String!) {
    fetchMyScraps(user_id: $user_id) {
      id
      title
      summary
      recipesImages {
        mainImage
      }
      createdAt
    }
  }
`;
