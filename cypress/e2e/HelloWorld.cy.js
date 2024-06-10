describe('HelloWorld Component', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('displays the message correctly', () => {
      const message = 'You did it!'
      cy.get('.hello h1').should('have.text', message)
    })
  
    it('has the correct essential links', () => {
      const essentialLinks = [
        'Core Docs',
        'Forum',
        'Community Chat',
        'Twitter',
        'News'
      ]
      essentialLinks.forEach(linkText => {
        cy.contains('.hello', linkText).should('exist')
      })
    })
  
    it('has the correct ecosystem links', () => {
      const ecosystemLinks = [
        'vue-router',
        'vuex',
        'vue-devtools',
        'vue-loader',
        'awesome-vue'
      ]
      ecosystemLinks.forEach(linkText => {
        cy.contains('.hello', linkText).should('exist')
      })
    })
  
    it('navigates to external links when clicked', () => {
      cy.get('.hello a[target="_blank"]').each($link => {
        const href = $link.prop('href')
        cy.request(href).its('status').should('eq', 200)
      })
    })
  })
  