/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSkip = /* GraphQL */ `
  subscription OnCreateSkip(
    $filter: ModelSubscriptionSkipFilterInput
    $owner: String
  ) {
    onCreateSkip(filter: $filter, owner: $owner) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSkip = /* GraphQL */ `
  subscription OnDeleteSkip(
    $filter: ModelSubscriptionSkipFilterInput
    $owner: String
  ) {
    onDeleteSkip(filter: $filter, owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSkip = /* GraphQL */ `
  subscription OnUpdateSkip(
    $filter: ModelSubscriptionSkipFilterInput
    $owner: String
  ) {
    onUpdateSkip(filter: $filter, owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
