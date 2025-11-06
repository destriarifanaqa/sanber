class FiturLogin{
    visitPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 60000}) 
    }
    inputUSN(username){
        cy.get('[name="username"]').type(username).should('have.value', username)
    }
    inputPSW(password){
        cy.get('[name="password"]').type(password).should('have.value', password)
    }
    clearUSN(){
        cy.get('[name="username"]').clear()
    }
    clearPSW(){
        cy.get('[name="password"]').clear()
    }
    clickLoginBTN(){
        cy.get('.oxd-button').should('be.visible').click()
    }
    assertionLogin(){
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard')
    }
    assertionInvCred(){
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    }
    assertionUSNRequired(){
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    }
    assertionPSWRequired(){
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    }
}

export default new FiturLogin