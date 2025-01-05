/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $condition: ModelOrderConditionInput
    $input: CreateOrderInput!
  ) {
    createOrder(condition: $condition, input: $input) {
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
      price
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
      updatedAt
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $condition: ModelOrderConditionInput
    $input: DeleteOrderInput!
  ) {
    deleteOrder(condition: $condition, input: $input) {
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
      price
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
      updatedAt
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $condition: ModelOrderConditionInput
    $input: UpdateOrderInput!
  ) {
    updateOrder(condition: $condition, input: $input) {
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
      price
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
      updatedAt
      __typename
    }
  }
`;
