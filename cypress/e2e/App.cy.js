describe('My App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the "To-Do List" title', () => {
    cy.contains('h1', 'To-Do List').should('exist')
  })

  it('should display the list summary', () => {
    cy.get('#list-summary').should('exist')
  })

})
