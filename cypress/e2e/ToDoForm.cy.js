describe('TodoForm Component', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('submits todo item when add button is clicked', () => {
      const todoLabel = 'Buy groceries'
      cy.get('#new-todo-input').type(todoLabel)
      cy.get('.btn__primary').click()
      cy.get('.todo-item').should('contain', todoLabel)
    })
  
    it('does not submit todo item if input field is empty', () => {
      cy.get('.btn__primary').click()
      cy.get('.todo-item').should('not.exist')
    })
  
    it('emits todo-added event with correct label when form is submitted', () => {
      const todoLabel = 'Do laundry'
      cy.get('#new-todo-input').type(todoLabel)
      cy.get('.btn__primary').click()
      cy.get('@todo-added').should('have.been.calledWith', todoLabel)
    })
  
    it('clears input field after submission', () => {
      const todoLabel = 'Clean room'
      cy.get('#new-todo-input').type(todoLabel)
      cy.get('.btn__primary').click()
      cy.get('#new-todo-input').should('have.value', '')
    })
  })
  