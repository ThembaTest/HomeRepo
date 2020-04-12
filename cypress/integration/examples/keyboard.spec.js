describe('keyboard press simulation', ()=> {
    it('should submit serachbox with pressing enetr',()=>{
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#searchTerm').type('accounts{enter}')
    })
})