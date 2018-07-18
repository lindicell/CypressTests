describe('My first test', function (){
    it('Does not do much', function(){
        cy.visit('https://facebook.com')

       
        cy.contains('span', 'Abra uma conta')
        cy.contains('a', 'Criar uma Página')
        cy.reload(true)

        cy.visit('https://www.facebook.com/login.php?login_attempt=1&lwv=110')
        cy.get('button').click(true)
        

    })
    
})