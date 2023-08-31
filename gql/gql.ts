/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation LoginUser($input: UsersPermissionsLoginInput!) {\n    login(input: $input) {\n      jwt\n      user {\n        id\n        username\n        email\n        confirmed\n        blocked\n        role {\n          id\n          name\n          description\n          type\n        }\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation createRegisteredTime($input: createRegisteredTimeInput) {\n    createRegisteredTime(input: $input) {\n      registeredTime {\n        id\n        created_at\n        updated_at\n        timeRegistered\n        user {\n          id\n          email\n        }\n        published_at\n      }\n    }\n  }\n": types.CreateRegisteredTimeDocument,
    "\n  query registeredTimes($sort: String, $limit: Int, $start: Int) {\n    registeredTimes(sort: $sort, limit: $limit, start: $start) {\n      id\n      created_at\n      updated_at\n      timeRegistered\n      user {\n        name\n        id\n        username\n        email\n      }\n      published_at\n    }\n  }\n": types.RegisteredTimesDocument,
    "\n  query GetCurrentUserRegisteredTimes(\n    $userId: ID!\n    $limit: Int\n    $start: Int\n    $sort: String\n  ) {\n    registeredTimes(\n      sort: $sort\n      limit: $limit\n      start: $start\n      where: { user: { id: $userId } }\n    ) {\n      id\n      timeRegistered\n      created_at\n      published_at\n      user {\n        name\n        id\n        username\n        email\n      }\n    }\n  }\n": types.GetCurrentUserRegisteredTimesDocument,
    "\n  query GetCurrentUser {\n    me {\n      id\n      username\n      email\n      confirmed\n      blocked\n      role {\n        id\n        name\n        description\n      }\n    }\n  }\n": types.GetCurrentUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($input: UsersPermissionsLoginInput!) {\n    login(input: $input) {\n      jwt\n      user {\n        id\n        username\n        email\n        confirmed\n        blocked\n        role {\n          id\n          name\n          description\n          type\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($input: UsersPermissionsLoginInput!) {\n    login(input: $input) {\n      jwt\n      user {\n        id\n        username\n        email\n        confirmed\n        blocked\n        role {\n          id\n          name\n          description\n          type\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createRegisteredTime($input: createRegisteredTimeInput) {\n    createRegisteredTime(input: $input) {\n      registeredTime {\n        id\n        created_at\n        updated_at\n        timeRegistered\n        user {\n          id\n          email\n        }\n        published_at\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createRegisteredTime($input: createRegisteredTimeInput) {\n    createRegisteredTime(input: $input) {\n      registeredTime {\n        id\n        created_at\n        updated_at\n        timeRegistered\n        user {\n          id\n          email\n        }\n        published_at\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query registeredTimes($sort: String, $limit: Int, $start: Int) {\n    registeredTimes(sort: $sort, limit: $limit, start: $start) {\n      id\n      created_at\n      updated_at\n      timeRegistered\n      user {\n        name\n        id\n        username\n        email\n      }\n      published_at\n    }\n  }\n"): (typeof documents)["\n  query registeredTimes($sort: String, $limit: Int, $start: Int) {\n    registeredTimes(sort: $sort, limit: $limit, start: $start) {\n      id\n      created_at\n      updated_at\n      timeRegistered\n      user {\n        name\n        id\n        username\n        email\n      }\n      published_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCurrentUserRegisteredTimes(\n    $userId: ID!\n    $limit: Int\n    $start: Int\n    $sort: String\n  ) {\n    registeredTimes(\n      sort: $sort\n      limit: $limit\n      start: $start\n      where: { user: { id: $userId } }\n    ) {\n      id\n      timeRegistered\n      created_at\n      published_at\n      user {\n        name\n        id\n        username\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrentUserRegisteredTimes(\n    $userId: ID!\n    $limit: Int\n    $start: Int\n    $sort: String\n  ) {\n    registeredTimes(\n      sort: $sort\n      limit: $limit\n      start: $start\n      where: { user: { id: $userId } }\n    ) {\n      id\n      timeRegistered\n      created_at\n      published_at\n      user {\n        name\n        id\n        username\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCurrentUser {\n    me {\n      id\n      username\n      email\n      confirmed\n      blocked\n      role {\n        id\n        name\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrentUser {\n    me {\n      id\n      username\n      email\n      confirmed\n      blocked\n      role {\n        id\n        name\n        description\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;