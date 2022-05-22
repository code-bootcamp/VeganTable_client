import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $name: String!
    $phone: String!
  ) {
    createUser(email: $email, password: $password, name: $name, phone: $phone) {
      user_id
      name
    }
  }
`;
