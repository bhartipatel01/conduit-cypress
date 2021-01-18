const cypress = require("cypress")

describe('api testing 1', () => {

    cypress.config('baseUrl', 'http://localhost:30000')

    it ('GET - read', () => {
        cy.request ('GET', 'https://static.productionready.io/images/smiley-cyrus.jpg')
    })

it('POST - create', () => {
    const user = {"email":"test@gmail.com","password":"123"}
    cy.request('POST', '/create', user)
    
})

})