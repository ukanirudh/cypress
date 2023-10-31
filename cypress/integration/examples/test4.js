/// <reference types="Cypress" />

describe('Handling Child Windows', () => {

    it('Should handle child window', () => {

        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get('.nav-link').contains('Shop').click();

        cy.selectProduct('Nokia Edge')
    })
})