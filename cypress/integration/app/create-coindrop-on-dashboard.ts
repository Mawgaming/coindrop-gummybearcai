describe('Create Coindrop on Dashboard', () => {
    before(() => {
      cy.logout();
      cy.login();
    });

    const testID_dbk8fi = "dbk8fi";
    const testCoindropName_dbk8fi = `test-coindrop-tid-${testID_dbk8fi}`;
    it('Create Coindrop on Dashboard', () => {
        cy.intercept({
            method: 'POST',
            url: '/api/createPiggybank',
        }).as('createPiggybank');
        cy.intercept({
          url: /^https:\/\/firestore.googleapis.com\/.*/,
        }).as('getUserOwnedPiggybanks');
        cy.callFirestore("delete", `piggybanks/${testCoindropName_dbk8fi}`);
        cy.visit('/dashboard');
        cy.wait('@getUserOwnedPiggybanks');
        cy.get(`a#link-to-coindrop-${testCoindropName_dbk8fi}`)
            .should('not.exist');
        cy.get('#create-new-coindrop-button')
            .click();
        cy.get('#create-coindrop-input')
            .type(testCoindropName_dbk8fi);
        cy.get('#create-coindrop-form')
            .submit();
        cy.wait('@createPiggybank');
        cy.contains(`coindrop.to/${testCoindropName_dbk8fi}`);
        cy.get(`a#link-to-coindrop-${testCoindropName_dbk8fi}`)
            .should('have.attr', 'href', `/${testCoindropName_dbk8fi}`);
    });
});

export {};