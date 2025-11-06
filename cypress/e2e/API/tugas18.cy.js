describe ('Reqres API Testing', () => {
    it('List Users', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('data')
            })
    })
    it('Single User', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
                expect(response.body.data).to.have.property('id')
            })
    }) 
    it('Single User Not Found', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false,
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.be.empty
            })
    }) 
    it('Create User', () => {
        cy.request({
            method: 'POST', 
            url: 'https://reqres.in/api/users',
            body: {
                "name": "Destria",
                "job": "QA Tester"
            },
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('createdAt')
                expect(response.body).to.have.property('name', 'Destria')
            })
    }) 
    it('Register Success', () => {
        cy.request({
            method: 'POST', 
            url: 'https://reqres.in/api/register',
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            },
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('token')
                expect(response.body).to.have.property('id', 4)
            })
    })
    it('Update User (PUT)', () => {
        cy.request({
            method: 'PUT', 
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "Rifana",
                "job": "QA Lead"
            },
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('updatedAt')
                expect(response.body).to.have.property('name', 'Rifana')
            })
    })
    it('Update User (PATCH)', () => {
        cy.request({
            method: 'PATCH', 
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "Jake",
                "job": "Project Manager"
            },
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('updatedAt')
                expect(response.body).to.have.property('name', 'Jake')
            })
    })
    it('Delete User', () => {
        cy.request({
            method: 'DELETE', 
            url: 'https://reqres.in/api/users/5',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(204)
                expect(response.body).to.be.empty
            })
    })
    it('Delayed Response', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users?delay=3',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.gte(3000)
            })
    })
    it('Delayed add', () => {
        cy.request({
            method: 'POST', 
            url: 'https://reqres.in/api/users?delay=3',
            body: {
                "name": "Chris",
                "job": "developer"
            },
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('createdAt')
                expect(response.body).to.have.property('id')
                expect(response.duration).to.be.gte(3000)
            })
    }) 
    it('Register Unsuccess', () => {
        cy.request({
            method: 'POST', 
            url: 'https://reqres.in/api/register',
            failOnStatusCode: false,
            body: {
                "password": "kafein"
            },
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.have.property('error')
            })
    })
    it('Update Password', () => {
        cy.request({
            method: 'PUT', 
            url: 'https://reqres.in/api/users/4',
            body: {
                "email": "requser@reqres.in",
                "password": "smthnew"
            },
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('updatedAt')
                expect(response.body).to.have.property('email', 'requser@reqres.in')
                expect(response.body).to.have.property('password', 'smthnew')
            })
    })
})