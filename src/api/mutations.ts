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

export const REGISTER_NEW_TIME_MUTATION = graphql(`
  mutation createRegisteredTime($input: createRegisteredTimeInput) {
    createRegisteredTime(input: $input) {
      registeredTime {
        id
        created_at
        updated_at
        timeRegistered
        user {
          id
          email
        }
        published_at
      }
    }
  }
`);
