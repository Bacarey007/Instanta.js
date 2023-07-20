Cypress.Commands.add('Login', (username)=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.usernameField).should('be.visible').type(username)
        cy.get(el.passwordField).should('be.visible').type(el.password)
        cy.get(el.loginButton).should('be.visible').click();
    })
})