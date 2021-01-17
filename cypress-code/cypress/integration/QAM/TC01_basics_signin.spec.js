describe('login', function(){
    it('sing in', function(){
        cy.visit('http://localhost:4100/login')
        cy.get('input[type="email"]').type('bharti1.1october@gmail.com')
        cy.get('input[type="password"]').type('copycat12345')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})
