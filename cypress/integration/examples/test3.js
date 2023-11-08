/// <reference types="Cypress" />

describe('Handling Child Windows', () => {

    it('Should handle child window', () => {
        const baseUrl = Cypress.env('url');
        cy.visit(`${baseUrl}/AutomationPractice/`);

        cy.get("#opentab").invoke('removeAttr', 'target').click();

        cy.origin("https://www.qaclickacademy.com", () => {
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should('contain', 'QAClick Academy');
        })
    })
})