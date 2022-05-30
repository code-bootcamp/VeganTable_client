import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      user_id
      name
      type
    }
  }
`;

export const FETCH_RECIPES = gql`
  query fetchRecipes {
    fetchRecipes {
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
      recipesScraps {
        scraped
      }
    }
  }
`;

export const FETCH_RECIPE_TYPES = gql`
  query fetchRecipeTypes($vegan_types: String!) {
    fetchRecipeTypes(vegan_types: $vegan_types) {
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
      recipesScraps {
        scraped
      }
    }
  }
`;

export const FETCH_MY_SCRAPS_HISTORY = gql`
  query fetchMyScrapHistory($user_id: String!) {
    fetchMyScrapHistory(user_id: $user_id) {
      id
    }
  }
`;

export const FETCH_POPULAR_RECIPES = gql`
  query fetchPopularRecipes {
    fetchPopularRecipes {
      id
      title
      summary
      types
      level
      scrapCount
      replyCount
      createdAt
      recipesImages {
        mainImage
      }
    }
  }
`;

export const FETCH_RECIPE_TYPES_POPULAR = gql`
  query fetchRecipeTypesPopular($vegan_types: String!) {
    fetchRecipeTypesPopular(vegan_types: $vegan_types) {
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
