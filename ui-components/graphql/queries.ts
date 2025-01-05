/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      clientInfo {
        address
        nameOrCompany
        phone
        postCode
        __typename
      }
      createdAt
      date
      id
      name
      skip
      status
      updatedAt
      __typename
    }
  }
`;
export const getSkip = /* GraphQL */ `
  query GetSkip($id: ID!) {
    getSkip(id: $id) {
      createdAt
      id
      location
      name
      price
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
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        date
        id
        name
        skip
        status
        updatedAt
        __typename
      }
      nextToken
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
        price
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
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
