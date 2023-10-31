/// <reference types="Cypress" />


describe('My first test suite', () => {
    it.skip('first test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        cy.get('select').select('option2').should('have.value', 'option2');
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').contains(/\b(India)\b/g).click();
        cy.get('#autocomplete').should('have.value', 'India')
    })

    it('verify table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy
            .get('.table-display tbody')
            .contains('Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C')
            .closest('tr').within(() => {
                return cy.get('td:nth-child(3)').should('contain.text', '20');
            })
        // .contains('20')
    })
})