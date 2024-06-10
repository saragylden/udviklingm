describe('My App', () => {
    beforeEach(() => {
      cy.visit('/') 
    })
  
    it('should display the Vue logo', () => {
      cy.get('img.logo').should('exist')
    })
  
    it('should display the "You did it!" message', () => {
      cy.contains('You did it!').should('exist')
    })

  })
  