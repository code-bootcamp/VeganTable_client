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
    }
  }
`;
