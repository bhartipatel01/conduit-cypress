describe('sign up', function(){
    it('sing up', function(){
        cy.visit('http://localhost:4100/register')
        cy.get('input[type="text"]').type('patelbharti110')
        cy.get('input[type="Email"]').type('bharti1.1october@gmail.com')
        cy.get('input[type="Password"]').type('copycat12345')
        cy.get('.btn').contains('Sign up').should('be.visible').click()
    })
})
