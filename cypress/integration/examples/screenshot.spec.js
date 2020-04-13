describe('Screenshots', ()=>{
    it('Takes a screenshot',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({capture: 'runner'})
    })

    it('Takes element screenshot', ()=>{
        cy.get('header').screenshot()

    })
})