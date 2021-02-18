///<reference types="cypress" />


describe('quote actions', () => {

    it('should be able to add a new quote', () => {
        cy.visit('http://localhost:8080')

        cy.get('#text-box').type('I want to be a success engineer at Cypress.io')
        cy.get('#author').type('Tiauna Paul')
        cy.get('#year').type('2021')

        cy.get('[type="submit"]').click()
        cy.get('#speech-text-27').should('have.text', '"I want to be a success engineer at Cypress.io"')
    })
    
    it('should be able to add a second quote', () => {
        
        cy.get('#text-box').type('I love JavaScript')
        cy.get('#author').type('Herman')
        cy.get('#year').type('2011')
        cy.get('[type="submit"]').click()
        cy.get('#speech-text-26').should('have.text', '"I love JavaScript"')
    })

    it('should play audio for selected quote', () => {
        cy.get('#play-me-22').should('have.text', ' Listen to Me')
        cy.get('#play-me-22').click()
    })

     it('delete selected quote', () => {
       cy.get('#delete-me-47').click()
       cy.get('#delete-me-48').click()

       cy.get('#speech-text-47').should('not.exist')
       cy.get('#speech-text-48').should('not.exist')
    })

   it('should validate number of quotes', () => {
    cy.get('#quote-spot li').should('have.length.above', 15)
   })
})


