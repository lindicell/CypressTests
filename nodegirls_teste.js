describe('Testando o site do Nodegirls', function (){
    it("Get input texts", function(){
        
        cy.visit('http://nodegirlscode.org/contact')

        cy.contains('h1','Contato')
        cy.contains('label','Nome')
        cy.contains('label','Email')
        cy.contains('label','Telefone')
        cy.contains('label','Qual o motivo do contato?')
        cy.contains('label','Mensagem')

        cy.wait(1000)

        cy.get('[name="name.full"]')
            .type('Joana')
            .should('have.value', 'Joana')

        cy.wait(1000)

        cy.get('[name="email"]')
            .type('teste@teste.com')
            .should('have.value', 'teste@teste.com')
        
        cy.wait(1000)

        cy.get('[name="phone"]')
            .type('994764464')
            .should('have.value', '994764464')

        cy.wait(1000)

        cy.get('select')
            .select('Outra questão').should('have.value', 'other')    

        cy.wait(1000)

            cy.get('[name="message"]')
            .type('oi obrigada pelo evento nodegirls, queria saber como entrar em contato com as organizadoras?')
            .should('have.value', 'oi obrigada pelo evento nodegirls, queria saber como entrar em contato com as organizadoras?')

        cy.contains('Enviar').click()        

    })
    
})