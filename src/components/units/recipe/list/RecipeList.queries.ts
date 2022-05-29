import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    user_id
    name
    type
    scrapCount {
      recipes {
        id
      }
    }
  }
`;

export const FETCH_RECIPES = gql`
  query fetchRecipes($page: Int) {
    fetchRecipes(page: $page) {
      id
      title
      summary
      types
      level
      scrapCount
      replyCount
      recipesImages {
        mainImage
      }
      user {
        isPro
      }
    }
  }
`;

export const FETCH_RECIPE_TYPES = gql`
  query fetchRecipeTypes($vegan_types: String!, $page: Int) {
    fetchRecipeTypes(vegan_types: $vegan_types, page: $page) {
      id
      title
      summary
      types
      level
      recipesImages {
        mainImage
      }
      user {
        isPro
      }
      scrapCount
      replyCount
    }
  }
`;
