/// <reference types="cypress" />

describe('Todo app', () => {
  it('hides the no-todos message when there are todos', () => {
    cy.request('POST', '/reset', { todos: [] })
    cy.visit('/')
    cy.get('.no-todos').should('be.visible')
    cy.get('.new-todo').type('write code{enter}')
    cy.get('.new-todo').type('write tests{enter}')
    cy.get('.no-todos').should('not.be.visible')
  })
})
