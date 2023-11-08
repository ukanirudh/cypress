/// <reference types="Cypress" />

describe('My first test suite', () => {
    it('first test case', () => {
        const baseUrl = Cypress.env('url');
        cy.visit(`${baseUrl}/seleniumPractise/#/`);
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products .product').should('have.length', 4);
        cy.get('.products').as('product-locator');
        cy.get('@product-locator').find('.product').eq(0).find('.product-action button').click();
        cy.get('@product-locator').find('.product').contains('Cashews').closest('.product').find('.product-action button').click();
        cy.get('.cart-icon > img').click();

        cy.get('.cart-preview button').contains('PROCEED TO CHECKOUT').click();
        cy.wait(2000);
    })
})