import { graphql } from "../../gql";

export const GET_ALL_REGISTERED_TIMES = graphql(`
  query registeredTimes($sort: String, $limit: Int, $start: Int) {
    registeredTimes(sort: $sort, limit: $limit, start: $start) {
      id
      created_at
      updated_at
      timeRegistered
      user {
        name
        id
        username
        email
      }
      published_at
    }
  }
`);

export const LOAD_CURRENT_USER_REGISTERS = graphql(`
  query GetCurrentUserRegisteredTimes(
    $userId: ID!
    $limit: Int
    $start: Int
    $sort: String
  ) {
    registeredTimes(
      sort: $sort
      limit: $limit
      start: $start
      where: { user: { id: $userId } }
    ) {
      id
      timeRegistered
      created_at
      published_at
      user {
        name
        id
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
