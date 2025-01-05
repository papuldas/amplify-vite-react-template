/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSkip = /* GraphQL */ `
  query GetSkip($id: ID!) {
    getSkip(id: $id) {
      createdAt
      id
      location
      name
      owner
      size
      updatedAt
      volume
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const listSkips = /* GraphQL */ `
  query ListSkips(
    $filter: ModelSkipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        location
        name
        owner
        size
        updatedAt
        volume
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
