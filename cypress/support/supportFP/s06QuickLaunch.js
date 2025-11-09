class QuickLaunch{
    clickAssignLeave(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/assignLeave').as('asgLeave')
        cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(1)').click()
        cy.wait('@asgLeave').its('response.statusCode').should('eq', 200)
    }
    assertionAssignLeave(){
        cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Assign Leave')
    }
    inputAssignLeave(empName, leavetype, fromdate, todate, comments){
        //input nama
        cy.get('.oxd-autocomplete-text-input > input')
            .click()
            .type(empName)
        cy.get('.oxd-autocomplete-dropdown')
            .contains('.oxd-autocomplete-option', empName)
            .click()
        //input leave type
        cy.get('.oxd-select-text').eq(0)
            .click()
        cy.get('.oxd-select-option')
            .contains(leavetype)
            .click()
        //input from date
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
            .clear()
            .type(fromdate)
        //input to date
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
            .clear()
            .type(todate)
        //tutup to date
        cy.wait(300)   // beri waktu UI close
        cy.contains('Leave Balance').click()
        //input comment
        cy.get('.oxd-textarea')
            .click()
            .clear()
            .type(comments)  
    } 
    clickAssign(){
        cy.get('.oxd-button').click()
    }
    clickOK(){
        cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Confirm Leave Assignment')
        cy.get('.orangehrm-modal-footer > .oxd-button--secondary').click()
    }
    asssertionOKAssignLeave(){
        cy.get('.oxd-toast-content', { timeout: 10000 })
            .should('be.visible')
            .within(() => {
                cy.get('.oxd-text--toast-title').should('contain', 'Success')
                cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved')
            })
    }
   clickLeaveList(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList').as('viewLL')
        cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(2)').click()
        cy.wait('@viewLL').its('response.statusCode').should('eq', 200)
   }
   assertionLeaveList(){
        cy.get('.oxd-table-filter-header').should('have.text', 'Leave List')
   }
   clickTimesheets(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet').as('viewTs')
        cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(3)').click()
        cy.wait('@viewTs').its('response.statusCode').should('eq', 200)
   }
   assertionTimesheets(){
        cy.get('.orangehrm-card-container > .oxd-text--h6')
            .should('have.text', 'Select Employee')
        cy.get('.orangehrm-header-container > .oxd-text')
            .should('have.text', 'Timesheets Pending Action')
   }
   clickApplyLeave(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave').as('aplLeave')
        cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(4)').click()
        cy.wait('@aplLeave').its('response.statusCode').should('eq', 200)
   }
   assertionApplyLeave(){
        cy.get('.orangehrm-card-container > .oxd-text--h6')
            .should('have.text', 'Apply Leave')
   }
   clickMyLeave(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewMyLeaveList').as('viewMLL')
        cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(5)').click()
        cy.wait('@viewMLL').its('response.statusCode').should('eq', 200)
   }
   assertionMyLeave(){
        cy.get('.oxd-table-filter-header')
            .should('have.text', 'My Leave List')
   }
   clickMyTimesheets(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/time/viewMyTimesheet').as('viewMTs')
        cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(6)').click()
        cy.wait('@viewMTs').its('response.statusCode').should('eq', 200)
   }
   assertionMyTimesheets(){
        cy.get('.orangehrm-timesheet-header--title > .oxd-text')
            .should('have.text', 'My Timesheet')
   }
}

export default QuickLaunch