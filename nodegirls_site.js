describe('Testando o site do Nodegirls', function (){
    it("Get input texts", function(){
        
        cy.visit('http://nodegirlscode.org')

        cy.contains('a','Sobre nós').click()
        
        cy.wait(1000)

        cy.scrollTo('bottom', { duration: 9000})

        cy.wait(1000)

        cy.scrollTo('top', { duration: 9000})

        cy.wait(1000)

        cy.contains('a','Blog e materiais').click()

        cy.wait(1000)

        cy.scrollTo('bottom', { duration: 9000})

        cy.wait(1000)

        cy.scrollTo('top', { duration: 9000})

        cy.wait(1000)

        cy.contains('a','Todas as categorias')
        cy.contains('a','Call4Papers')
        cy.contains('a','Código de conduta')
        cy.contains('a','Eventos realizados')
        cy.contains('a','Materiais de estudo')
        cy.contains('a','Próximos eventos')
        cy.contains('a','Sobre nós')
        cy.contains('a','Vagas')

        cy.wait(1000)

        cy.contains('a','Galeria').click()

        cy.wait(1000)

        cy.scrollTo('bottom' ,{ duration: 9000})

        cy.wait(1000)

        cy.scrollTo('top' , { duration: 9000})

        cy.wait(1000)

        cy.contains('a','Call4Papers').click()

        cy.wait(1000)

        cy.contains('a','Código de conduta').click()

        cy.wait(1000)

        cy.scrollTo('bottom' ,{ duration: 9000})

        cy.wait(1000)

        cy.scrollTo('top' , { duration: 9000})

        cy.wait(1000)

        cy.contains('a','Eventos').click()

        cy.wait(1000)

        cy.scrollTo('bottom' ,{ duration: 9000})

        cy.wait(1000)

        cy.scrollTo('top' , { duration: 9000})

        cy.wait(1000)

        cy.contains('a','Vagas').click()

        cy.wait(1000)

        cy.contains('a','Contato').click()

        cy.contains('h1','Contato')
        cy.contains('label','Nome')
        cy.contains('label','Email')
        cy.contains('label','Telefone')
        cy.contains('label','Qual o motivo do contato?')
        cy.contains('label','Mensagem')

        cy.wait(1000)

        cy.get('[name="name.full"]')
            .type('Joana', { duration: 9000})
            .should('have.value', 'Joana')

        cy.wait(1000)

        cy.get('[name="email"]')
            .type('teste@teste.com', { duration: 9000})
            .should('have.value', 'teste@teste.com')
        
        cy.wait(1000)

        cy.get('[name="phone"]')
            .type('994764464', { duration: 9000})
            .should('have.value', '994764464')

        cy.wait(1000)

        cy.get('select')
            .select('Outra questão').should('have.value', 'other')    

        cy.wait(1000)

            cy.get('[name="message"]')
            .type('oi obrigada pelo evento nodegirls, queria saber como entrar em contato com as organizadoras?', { duration: 9000})
            .should('have.value', 'oi obrigada pelo evento nodegirls, queria saber como entrar em contato com as organizadoras?')

        cy.contains('Enviar').click()        


        













    })
    
})