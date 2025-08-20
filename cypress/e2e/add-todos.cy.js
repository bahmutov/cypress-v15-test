/// <reference types="cypress" />

describe('Todo app', () => {
  it('hides the no-todos message when there are todos', () => {
    cy.request('POST', '/reset', { todos: [] })
    cy.visit('/')
  })
})
