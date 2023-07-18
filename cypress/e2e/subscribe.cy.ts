describe('home page', () => {
    beforeEach (() => {
      cy.visit('localhost:3000')
    });
  
    it('subscribe', () => {

      cy.get ('[data-test="email-input"]').type('tom@aol.com')
    })
  })