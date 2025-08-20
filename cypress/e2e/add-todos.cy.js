/// <reference types="cypress" />

describe('Todo app', () => {
  it('adds 3 todos', () => {
    cy.request('POST', '/reset', { todos: [] })
    cy.visit('/')
  })
})
