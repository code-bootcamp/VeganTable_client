import { gql } from "@apollo/client";

export const CREATE_RECIPE = gql`
  mutation createRecipe($createRecipesInput: CreateRecipesInput!) {
    createRecipe(createRecipesInput: $createRecipesInput) {
      id
      title
      summary
      types
      desc
      cookTime
      level
      ingredients
      recipesPic
      user_id {
        user_id
        email
        name
        phone
        address
        type
        nickname
        isPro
        isSubs
        SubsHistory
        startDate
        endDate
        profilePic
      }
    }
  }
`;
