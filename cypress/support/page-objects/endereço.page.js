class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email){
        //Elemento + ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()

        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).click()
        cy.wait(500)
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado)
        cy.get('.select2-search__field').type('{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get(':nth-child(2) > .button').click()
        
    }


    editarEnderecoEntrega(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep){
        //Elemento + ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()

        cy.get(':nth-child(2) > .title > .edit').click()

        cy.get('#shipping_first_name').clear().type(nome)
        cy.get('#shipping_last_name').clear().type(sobrenome)
        cy.get('#shipping_company').clear().type(empresa)
        cy.get('#select2-shipping_country-container').click()
        cy.get('.select2-search__field').type(pais).type('{enter}')
        cy.get('#shipping_address_1').clear().type(endereco)
        cy.get('#shipping_address_2').clear().type(numero)
        cy.get('#shipping_city').clear().type(cidade)
        cy.get('#select2-shipping_state-container').click()
        cy.get('.select2-search__field').type(estado).type('{enter}')
        cy.get('#shipping_postcode').clear().type(cep)
        cy.get('[name="save_address"]').click()
    }
}

export default new EnderecoPage