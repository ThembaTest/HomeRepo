describe('Browser actions', () => {
  it('should load correct url', () => {
    cy.visit('https://superbalist.com', {timeout: 100000})
  })

  it('should check correct url', () =>{
    cy.url().should('include', 'superbalist.com')
  })

  it('should WAIT 30 SECONDS', () => {
    cy.wait(20000)
  })

  it('should get correct element', () => {
    cy.get('.sailthru-overlay-close').should('be.visible')
  })
 

  it('should click on pop up', () => {
    cy.get('.sailthru-overlay-close')
        .click()
  })

    it('click on login', () => {
    cy.contains('Login').click()
  })

  it('should WAIT 30 SECONDS', () => {
    cy.wait(5000)
  })

  it('should input email address', () => {
    cy.get('.submitEmailInput').type('thembadavhana@gmail.com')
  })

  it('should input password', () => {
    cy.get('input[type="password"]').type('Phuml@123')
  })



})
