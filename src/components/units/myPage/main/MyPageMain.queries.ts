import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
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
`;
