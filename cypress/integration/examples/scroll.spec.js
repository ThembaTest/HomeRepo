describe('Scroll on the page',()=>{
    it('should scroll up and down on page', ()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(2000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(2000)
        cy.get('header').scrollIntoView()
    })
})