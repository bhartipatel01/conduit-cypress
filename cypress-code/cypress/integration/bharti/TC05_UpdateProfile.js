describe('Create and mark-unmark as favorite', function(){
    it('Sign in', function(){
        cy.visit('http://localhost:4100/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','http:')
        cy.get('input[type="email"]').type('bharti1.1october@gmail.com')
        cy.get('input[type="password"]').type('copycat12345')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('Edit Profile Settings', function(){
        cy.contains('Settings').click()
        cy.location('pathname').should('eq', '/settings')
       // cy.get('input[placeholder="URL of profile picture"]').url('')
        cy.get('input[placeholder="Username"]').clear().type('patelbharti110')
        cy.get('textarea[placeholder="Short bio about you"]').clear().type('I am Bharti Patel')
        cy.contains('Update Settings').click()
        //cy.url().should('include','article')
    })


})