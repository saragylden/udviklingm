describe('ToDoItem Component', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should display a ToDoItem with label and checkbox', () => {
      cy.get('.stack-small').should('exist') 
      cy.get('.custom-checkbox').should('exist') 
      cy.get('.checkbox-label').should('be.visible') 
        .and('not.be.empty') 
    })
  
    it('should allow deleting ToDoItem', () => {
      cy.get('.btn.btn__danger').contains('Delete').click() 
    })
  })
  