import { gql } from "@apollo/client";

export const FETCH_RECIPES = gql`
  query fetchRecipes {
    fetchRecipes {
      id
      title
      summary
      types
      level
      scrapCount
      recipesImages {
        url
      }
    }
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    user_id
    name
    type
    scrapCount {
      scrap_id
      recipes {
        id
      }
      scraped
    }
  }
`;
