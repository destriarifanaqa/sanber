Cypress.on('uncaught:exception', () => false)


describe ('Pengguna dapat melakukan login', () => {
    it('Login dengan valid username dan valid password', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 30000}) 
        //^^saya tambahkan durasi 15 detik sebelum akhirnya timeout sehingga testing tetap bisa dilanjutkan apabila terjadi error atau internet lambat
        cy.get('[name="username"]').type('Admin').should('have.value', 'Admin')
        cy.get('[name="password"]').type('admin123').should('have.value', 'admin123')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')

        cy.get('.oxd-button').click()
        cy.wait('@actionSummary')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard')
    })
    it('Login dengan password salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 30000})
        cy.get('[name="username"]').type('Admin').should('have.value', 'Admin')
        cy.get('[name="password"]').type('false123').should('have.value', 'false123')

        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('invPsw')
        cy.get('.oxd-button').click()
        cy.wait('@invPsw')
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it('Login dengan username salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 30000})
        cy.get('[name="username"]').type('false').should('have.value', 'false')
        cy.get('[name="password"]').type('admin123').should('have.value', 'admin123')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('invUsn')
        cy.get('.oxd-button').click()
        cy.wait('@invUsn')
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    /* untuk 3 test case berikut tidak mengirim request ke server, sehingga tidak bisa dilakukan intercept
    it('Login dengan username dan password kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 5000})
        cy.get('[name="username"]').clear()
        cy.get('[name="password"]').clear()

        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
        selector ini dipilih berdasarkan suggestion dari cypress dan karena selector lain terlalu panjang 
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    }) 
    it('Login dengan username kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 5000})
        cy.get('[name="username"]').clear()
        cy.get('[name="password"]').type('admin123').should('have.value', 'admin123')

        cy.intercept(')
        cy.get('.oxd-button').click()
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Required')
    }) /*
    it('Login dengan password kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 5000})
        cy.get('[name="username"]').type('Admin').should('have.value', 'Admin')
        cy.get('[name="password"]').clear()
        cy.get('.oxd-button').click()
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Required')
    })
    */
    it('Login dengan spasi setelah valid username', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 5000}) 
        cy.get('[name="username"]').type('Admin ').should('have.value', 'Admin ')
        cy.get('[name="password"]').type('admin123').should('have.value', 'admin123')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit').as('subunit')
        cy.get('.oxd-button').click()
        
        cy.wait('@subunit')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard')
    }) 
    it('Login dengan spasi di tengah username', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 5000}) 
        cy.get('[name="username"]').type('Ad min').should('have.value', 'Ad min')
        cy.get('[name="password"]').type('admin123').should('have.value', 'admin123')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('mes')
        // masih menggunakan intercept dan url yang sama dengan sebelumnya karena pada halaman login dengan case negatif hanya terdapat 2 url yang bisa digunakan
        cy.get('.oxd-button').click()

        cy.wait('@mes')
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
    it('Login dengan username tanpa kapital', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 30000}) 
        cy.get('[name="username"]').type('admin').should('have.value', 'admin')
        cy.get('[name="password"]').type('admin123').should('have.value', 'admin123')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations').as('loc')
        cy.get('.oxd-button').click()
        
        cy.wait('@loc')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard')
    }) 
})