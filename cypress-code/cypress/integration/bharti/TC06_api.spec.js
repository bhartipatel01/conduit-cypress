describe('api testing 1', () => {

  Cypress.config('baseUrl', 'http://localhost:3000')

    it ('POST - login', () => {
        const user = { "user":{"email":"bharti1.1october@gmail.com", "password":"copycat12345"}}
        cy.request ('POST', '/api/users/login', user)
        .its('body')
        .its('user')
        .should('include', {'email':'bharti1.1october@gmail.com'})
    })
 

    
    it ('GET - articles', () => {
      const user = { "user":{"email":"bharti1.1october@gmail.com", "password":"copycat12345"}}
      cy.request ('GET', '/api/articles', user)
      .its('body')
      .its('articles')
      //.its('author')
      //.should('include', {'email':'bharti1.1october@gmail.com'})

    })
    it ('POST - articles', () => {
        const article = { "article":{"title":"How to train your dragon" ,"description":"Ever wonder How?","body":"you have to believe"}}
        cy.request ({method:'POST', url:'/api/articles', body:article, headers:{
          'Authorization': `token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDRjMDYyOGExOTNhNGMwYWU0MzdjYyIsInVzZXJuYW1lIjoicGF0ZWxiaGFydGkxMTAiLCJleHAiOjE2MTYxOTkwMjcsImlhdCI6MTYxMTAxODYyN30.If-otfAzOBGql42ZsJBKZ5TihD5D8sjcSjTgANxYqVY`
        }})
        .its('body')
        //.its('user')
       // .should('include', {'email':'bharti1.1october@gmail.com'})
    })

  })
