describe ('Fitur Login', () => {
    it('Login dengan Username dan Password Valid', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com');

        cy.get('h1').contains('CURA Healthcare Service').should('have.text', 'CURA Healthcare Service');

        cy.get('#btn-make-appointment').click();
        cy.get('h2').contains('Login').should('have.text', 'Login');
    })
})