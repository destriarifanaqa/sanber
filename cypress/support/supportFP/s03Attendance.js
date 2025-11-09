class Dashboard {
    interceptTimeAtWork(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchIn').as('intPIn')
    }
    clickTimeAtWork(){
        cy.get('.orangehrm-attendance-card-bar > .oxd-icon-button > .oxd-icon').click()
    }
    waitTimeAtWork(){
        cy.wait('@intPIn') //.its('response.statusCode').should('eq', 200)
    }
    interceptIn(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchOut').as('intPOut')
    }
    clickIn(){
        cy.get('.oxd-button').click()
    }
    waitIn(){
        cy.wait('@intPOut', {timeout: 60000}) //.its('response.statusCode').should('eq', 200)
    }
    assertionAttendance(){
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Attendance')
    }
    assertionPunch(){
        cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain', 'Punch')
    }
    inputNotes(notes){
        cy.get('.oxd-textarea').type(notes)
    }
    clearCalender(){
        cy.get('.oxd-date-input > .oxd-icon').click()
        cy.contains('Clear').click()
    }
    assertionUnsuccesPunchIn(){
        cy.get('.oxd-input-group > .oxd-text').should('contain', 'Required')
    }
    assertionLongNotes(){
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Should not exceed 250 characters')
    }
}

export default Dashboard