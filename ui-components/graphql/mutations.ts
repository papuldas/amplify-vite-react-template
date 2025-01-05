/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSkip = /* GraphQL */ `
  mutation CreateSkip(
    $condition: ModelSkipConditionInput
    $input: CreateSkipInput!
  ) {
    createSkip(condition: $condition, input: $input) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteSkip = /* GraphQL */ `
  mutation DeleteSkip(
    $condition: ModelSkipConditionInput
    $input: DeleteSkipInput!
  ) {
    deleteSkip(condition: $condition, input: $input) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateSkip = /* GraphQL */ `
  mutation UpdateSkip(
    $condition: ModelSkipConditionInput
    $input: UpdateSkipInput!
  ) {
    updateSkip(condition: $condition, input: $input) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
