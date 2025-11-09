class ForgotPSW {
    interceptFPSW(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode').as('reqFPSW')
    }
    clickForgotPSW(){
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
    }
    waitFPSW(){
        cy.wait('@reqFPSW').its('response.statusCode').should('eq', 200)
    }
    inputUSN(username){
        cy.get('.oxd-input').type(username).should('have.value', username)
    }
    interceptRPSW(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset').as('sendRPSW')
    }
    clickResetPSW(){
        cy.get('.oxd-button--secondary').click()
    }
    waitRPSW(){
        cy.wait('@sendRPSW').its('response.statusCode').should('eq', 200)
    }
    assertionFPSWSuccess(){
        cy.get('.oxd-text--h6').should('contain', 'Reset Password link sent successfully')
    }
    interceptCancel(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('cancel')
    }
    clickCancel(){
        cy.get('.oxd-button--ghost').click()
    }
    waitCancel(){
        cy.wait('@cancel', {timeout: 60000}).its('response.statusCode').should('eq', 200)
    }
}

export default ForgotPSW