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

    it('Create a post', function(){
        cy.contains('New Post').click()
        cy.location('pathname').should('eq', '/editor')
        cy.get('input[placeholder="Article Title"]').type('Test abcd')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test abcd')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test abcd wwerwrw')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    it('Read a post', function(){
        cy.contains('Test abcd wwerwrw')
    })

    it ('Update a post', function(){
        cy.contains('Edit Article').click()
        cy.location('pathname').should('contains', '/editor')
        cy.get('input[placeholder="Article Title"]').clear().type('Test abcde')
        cy.get('input[placeholder="What\'s this article about?"]').clear().type('Test abcde')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').clear().type('Test abcde werwr')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    it ('Delete a post', function(){
        cy.contains('Delete Article').click()

    })
})