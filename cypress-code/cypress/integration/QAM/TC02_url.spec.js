const { post, contains } = require("cypress/types/jquery")

describe('create and mark-unmark as favourite', function(){
    it('sing in', function(){
        cy.visit('http://localhost:4100/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq',https:)
        cy.get('input[type="email"]').type('bharti1.1october@gmail.com')
        cy.get('input[type="password"]').type('copycat12345')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
    })
})
    it('create a post', function(){
    cy.contains('New Post').click()
    cy.hash.should('include','/editor')
    cy.location('hash').should('include','/editor')
    cy.get('input[placeholder="Article Title"]').type('Text')
    cy.get('input[placeholder="What\'s this article about"]').type('Test 1')
    cy.get('[textarea[placeholder="Write your article (in markdown)]]').type('Test 2')
    cy.contains('Publish Aticle').click()
    cy.url().should('include','')
})

it('mark-unmark as favorite', function() {
    cy.get{'.nav-link'}.contains('QMs').click()
    cy.contains('My articles').should('be.visible')
    cy.get('ion-heart').click()
    cy.contains('Favorited Articles').click()
    cy.url().should ('include','favorites')
    cy

})

})