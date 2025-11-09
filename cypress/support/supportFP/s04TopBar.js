class TopBar {
    clickProfile(){
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    }
    clickAbout(){
        cy.contains('About').click()
    }
    assertionAbout(){
        cy.get('.orangehrm-modal-header > .oxd-text').should('contain', 'About')
    }
    clickSupport(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/help/support').as('support')
        cy.contains('Support').click()
        cy.wait('@support').its('response.statusCode').should('eq', 200)
    }
    assertionSupport(){
        cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Getting Started with OrangeHRM')
    }
    clickChangePSW(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/updatePassword').as('updPSW')
        cy.contains('Change Password').click()
        cy.wait('@updPSW').its('response.statusCode').should('eq', 200)
    }
    assertionChangePSW(){
        cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain', 'Update Password')
    }
    inputValidData(password, newPSW){
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password).should('have.value', password)
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(newPSW).should('have.value', newPSW)
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(newPSW).should('have.value', newPSW)
    }
    clickSave(){
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/auth/public/validation/password').as('savePSW')
        cy.get('.oxd-button--secondary').click()
        cy.wait('@savePSW').its('response.statusCode').should('eq', 200)
    }
    assertionSavePSW(){
        cy.get('.oxd-toast-content', { timeout: 10000 })
            .should('be.visible')
            .within(() => {
                cy.get('.oxd-text--toast-title').should('contain', 'Success')
                cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved')
            })
    }
    assertionUnsuccessSavePSW(){
        cy.get('.oxd-toast-content', { timeout: 10000 })
            .should('be.visible')
            .within(() => {
                cy.get('.oxd-text--toast-title').should('contain', 'Error')
                cy.get('.oxd-text--toast-message').should('contain', 'Current Password is Incorrect')
            })
    }
    assertionInvalidSavePSW(){
        cy.get('.oxd-input-group > .oxd-text').should('contain', 'Your password must contain minimum 1 lower-case letter')
    }
    inputBedaPSW(password, newPSW, confPSW){
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password).should('have.value', password)
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(newPSW).should('have.value', newPSW)
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(confPSW).should('have.value', confPSW)
    }
    assertionBedaPSW(){
        cy.get('.oxd-input-group > .oxd-text')
            .should('be.visible')
            .and('contain', 'Passwords do not match')
    }
    clickLogOut(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout').as('logout')
        cy.contains('Logout').click()
        cy.wait('@logout').its('response.statusCode').should('eq', 302)
    }
    assertionLogOut(){
        cy.get('.oxd-text--h5').should('be.visible')
    }
    clickUpgrade(){
        cy.get('.orangehrm-upgrade-link').click()
    }
    assertionUpgrade(){
        cy.get('.orangehrm-upgrade-link')
            .should('have.attr', 'href')
            .and('include', 'https://orangehrm.com/open-source/upgrade-to-advanced')
    }
}

export default TopBar