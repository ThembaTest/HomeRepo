describe('Working with inputs', () => {
    it('should overide current time', () => {
        const date = new Date(2020, 3, 10).getTime() //return time stamp
        cy.clock(date)
        cy.log(date)
    })
    
    it('should visit Zero Bank website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 50000})
        cy.clearCookies({log: true})
        cy.clearLocalStorage('your item',{log:true})
        cy.url().should('include', 'zero')
        cy.title().should('include', 'Zero - Log in') //very important for real life automation
    })
    
    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Leeroy Jenkins', {delay:100})
    })

    it('should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('VIZ10AWT8VL', {delay:100})
    })

    it('should tick box', () => {
        cy.get('input[type="checkbox"]').click()
    })

    it('should submit login form', () => {
        cy.contains('Sign in').click()
    })

    it('should display message', () => {
        cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')
    })

})