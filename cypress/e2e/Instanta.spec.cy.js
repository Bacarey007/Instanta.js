describe('login into Instanta', () => {

  it('should login', () => {
    cy.fixture('element').then((el) => {
        cy.Login(Cypress.env('username'))
        cy.get('[href="/facility/Home.do"] > .card').click()
        

    })
  })
})