import { gql } from "@apollo/client";

export const FETCH_MY_SCRAPS = gql`
  query fetchMyScraps {
    fetchMyScraps {
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
