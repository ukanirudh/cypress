/// <reference types="Cypress" />

describe('Handling Child Windows', () => {

    it('Should handle child window', () => {
        const baseUrl = Cypress.env('url');
        cy.visit(`${baseUrl}/angularpractice/`);
        cy.get('.nav-link').contains('Shop').click();

        cy.selectProduct('Nokia Edge')
    })
})