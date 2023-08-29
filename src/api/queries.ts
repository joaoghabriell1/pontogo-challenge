import { graphql } from "../../gql";

export const LOAD_USERS = graphql(`
  query registeredTimes($sort: String) {
    registeredTimes(sort: $sort) {
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
`);

export const LOAD_CURRENT_USER_REGISTER = graphql(`
  query GetCurrentUserRegisterdTimes($userId: ID!) {
    registeredTimes(where: { user: { id: $userId } }) {
      id
      created_at
      timeRegistered
      published_at
      user {
        username
        email
      }
    }
  }
`);

export const GET_CURRENT_USER = graphql(`
  query GetCurrentUser {
    me {
      id
      username
      email
      confirmed
      blocked
      role {
        id
        name
        description
      }
    }
  }
`);
