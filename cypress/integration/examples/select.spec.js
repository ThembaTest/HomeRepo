describe('Select Box', () =>{
    it('should load website',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    it('should select an option from select box',()=>{
        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value', 'Both')

        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value', 'JavaScript API')

        cy.get('#preferred-interface').select('Command Line')
        cy.get('#preferred-interface').should('have.value', 'Command Line')
        
        //tick checkbox
        cy.get('#tried-test-cafe').click()  
        
        //Move slider 
        cy.get('.ui-slider-handle.ui-corner-all.ui-state-default').
        click().type('{rightArrow}').type('{rightArrow}')
        
        //comment
        cy.get('#comments').type('Enjoyed this learning')
       
        //Submit
        //cy.get('#submit-button').click()

    })
})