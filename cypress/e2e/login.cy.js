/// <reference types='cypress' />

const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Login',() => {


    beforeEach(() => {
        cy.visit('minha-conta')
    });


    it('Deve fazer login com sucesso',() => {
        cy.get('#username').type('andersonsilva@teste.com')
        cy.get('#password').type('teste@teste.com',{log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, andersonsilva')

    })

    it('Deve fazer login com sucesso - Usando arquivos de dados',() => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha,{log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, andersonsilva')
    })

    it('Deve fazer login com sucesso - Usando fixture',() => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha,{log: false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, andersonsilva')
        })

    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido',() => {
        cy.get('#username').type('anderson@teste.com')
        cy.get('#password').type('teste@teste.com',{log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida',() => {
        cy.get('#username').type("andersonsilva@teste.com")
        cy.get('#password').type('00000000000',{log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail andersonsilva@teste.com está incorreta. Perdeu a senha?')
    })


})
