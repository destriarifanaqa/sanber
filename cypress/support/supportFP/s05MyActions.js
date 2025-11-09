class MyAction{
    clickPendingSelfReview(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/performance/myPerformanceReview').as('review')
        cy.get('.orangehrm-todo-list > :nth-child(1) > .oxd-text').click()
        cy.wait('@review').its('response.statusCode').should('eq', 200)
    }
    assertionReview(){
        cy.get('.orangehrm-header-container').should('have.text', 'My Reviews')    
    }
    clickCandidatestoIntv(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates*').as('viewC')
        cy.get('.orangehrm-todo-list > :nth-child(2) > .oxd-text').click()
        cy.wait('@viewC').its('response.statusCode').should('eq', 200)
        cy.get('.oxd-table-filter-header').should('have.text', 'Candidates')
    }
    inputValidCandidates(){
        cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
            .click()

        cy.get('.oxd-select-dropdown')
            .contains('Automaton Tester')
            .click()
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
            .click()
        cy.get('.oxd-select-dropdown')
            .contains('Senior QA Lead')
            .click()
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
            .click()
        cy.get('.oxd-select-dropdown')
            .contains('Rahul Patil')
            .click()
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
            .click()
        cy.get('.oxd-select-dropdown')
            .contains('Job Offered')
            .click()        
    }
    clickSearch(){
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    }
    asssertionNotFound(){
        cy.get('.oxd-toast-content', { timeout: 10000 })
            .should('be.visible')
            .within(() => {
                cy.get('.oxd-text--toast-title').should('contain', 'Info')
                cy.get('.oxd-text--toast-message').should('contain', 'No Records Found')
            })
    }
}

export default MyAction