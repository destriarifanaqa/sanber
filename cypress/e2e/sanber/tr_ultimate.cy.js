describe ('Dashboard UltimateQA', ()=>{
    it('pilih select', ()=>{
        cy.visit('https://ultimateqa.com/automation')
        cy.get('[href="#"]').select('Free Courses')
    })
})