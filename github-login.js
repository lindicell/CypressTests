describe('My first test', function (){
    it("Get types and asserts", function(){
        cy.visit('https://github.com/login')

       
        cy.contains('label',' Username or email address')
        cy.contains('label',' Password')

        cy.get('#login_field')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

        cy.get('#password')
            .type('fake@email')
            .should('have.value', 'fake@email')

      
    })
    
})