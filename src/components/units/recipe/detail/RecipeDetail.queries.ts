import { gql } from "@apollo/client";

export const FETCH_RECIPE = gql`
  query fetchRecipe($recipes_id: String!) {
    fetchRecipe(recipes_id: $recipes_id) {
      id
      title
      summary
      types
      cookTime
      level
      recipesImages {
        url
        description
      }
      user {
        user_id
        email
        name
        isPro
      }
      ingredients {
        name
      }
      recipesTags {
        name
      }
      scrapCount
      replyCount
    }
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      user_id
      email
      name
      isPro
      type
    }
  }
`;
