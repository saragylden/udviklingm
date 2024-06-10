describe('ToDoItem Component', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should display a ToDoItem with label and checkbox', () => {
      cy.get('.stack-small').should('exist') // Tjekker om ToDoItem-containeren findes
      cy.get('.custom-checkbox').should('exist') // Tjekker om checkbox-containeren findes
      cy.get('.checkbox-label').should('be.visible') // Vent på, at labelen er synlig
        .and('not.be.empty') // Vent på, at labelen ikke er tom
    })
  
    it('should allow deleting ToDoItem', () => {
      cy.get('.btn.btn__danger').contains('Delete').click() // Simulerer klik på 'Delete' knappen
    })
  })
  