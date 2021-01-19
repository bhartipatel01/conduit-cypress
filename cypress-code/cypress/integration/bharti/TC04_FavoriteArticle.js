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
        cy.get('input[placeholder="Article Title"]').type('Test')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 2')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    it('Mark-unmark as favorite', function(){
        cy.get('.nav-link').contains('patelbharti110').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    })
})