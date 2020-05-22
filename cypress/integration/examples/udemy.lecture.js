describe('Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 100000})
        cy.url().should('include', 'index.html')
        cy.log('Before reload')
        cy.reload
        cy.log('After reload')
    })

    it('should click on Travel category', () => {
        cy.get('a').contains('Travel').dblclick()
        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq',11)
    })

    it('should click on Poetry category', () => {
        cy.get('a').contains('Poetry').dblclick()
        cy.get('a').contains('Olio')
    })

    it('should select Olio book', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 100000})
        cy.get('h1').then(($book) => {
        const txt = $book.text()
        cy.log(txt)
        })
    })
    
    it('should have correct price', () => {
        cy.wait(5000)
        cy.get('p.price_color').contains('23.88')
    })
})

