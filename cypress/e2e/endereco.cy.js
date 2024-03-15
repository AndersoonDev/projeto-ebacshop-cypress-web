/// <reference types='cypress' />

const {faker} = require("@faker-js/faker");


// const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Endereços - Faturamento e Entrega',() => {
    beforeEach(() => {
        cy.visit('minha-conta');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario,dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso',() => {

    });
});