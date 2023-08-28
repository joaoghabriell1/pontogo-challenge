import { graphql } from "../../gql";

export const LOGIN_USER_MUTATION = graphql(`
  mutation LoginUser($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        username
        email
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`);
