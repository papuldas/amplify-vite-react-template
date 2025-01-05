/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onCreateSkip = /* GraphQL */ `
  subscription OnCreateSkip($filter: ModelSubscriptionSkipFilterInput) {
    onCreateSkip(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onDeleteSkip = /* GraphQL */ `
  subscription OnDeleteSkip($filter: ModelSubscriptionSkipFilterInput) {
    onDeleteSkip(filter: $filter) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onUpdateSkip = /* GraphQL */ `
  subscription OnUpdateSkip($filter: ModelSubscriptionSkipFilterInput) {
    onUpdateSkip(filter: $filter) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
