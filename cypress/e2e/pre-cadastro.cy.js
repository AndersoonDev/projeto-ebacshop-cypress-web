/// <reference types='cypress' />
import {faker} from "@faker-js/faker";


describe("Funcionalidade Pre Cadastro",() => {
    beforeEach(() => {
        cy.visit("/minha-conta");
    });

    let nomeFaker = faker.person.firstName()
    let sobrenomeFaker = faker.person.lastName()
    let senhaFaker = faker.internet.password()
    let emailFaker = faker.internet.email()

    it("Deve completar o pré-cadastro com sucesso",() => {
        cy.get("#reg_email").type(faker.internet.email());
        cy.get("#reg_password").type(faker.internet.password());
        cy.get(":nth-child(4) > .button").click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('be.visible')
        cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
        cy.get("#account_first_name").type(faker.person.firstName());
        cy.get("#account_last_name").type(faker.person.lastName());
        cy.get(".woocommerce-Button").click();
        cy.get(".woocommerce-message").should("contain", "Detalhes da conta modificados com sucesso.");
    });

    it('Deve completar o pré-cadastro com sucesso usando Comandos customizados',() => {        
        cy.preCadastro(emailFaker, senhaFaker, nomeFaker, sobrenomeFaker)
    })

    it("Deve exibir mensagem de erro ao não inserir o sobrenome",() => {
        cy.get("#reg_email").type(faker.internet.email());
        cy.get("#reg_password").type(faker.internet.password());
        cy.get(":nth-child(4) > .button").click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('be.visible')
        cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
        cy.get("#account_first_name").type(faker.person.firstName());
        cy.get(".woocommerce-Button").click();
        cy.get(".woocommerce-error").should("contain", "Sobrenome é um campo obrigatório.");
    });

    it("Deve exibir mensagem de erro ao não inserir o nome",() => {
        cy.get("#reg_email").type(faker.internet.email());
        cy.get("#reg_password").type(faker.internet.password());
        cy.get(":nth-child(4) > .button").click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('be.visible')
        cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
        cy.get("#account_last_name").type(faker.person.lastName());
        cy.get(".woocommerce-Button").click();
        cy.get(".woocommerce-error").should("contain", "Nome é um campo obrigatório.");
    });

    it("Deve exibir mensagem de erro se não inserir o nome e sobrenome",() => {
        cy.get("#reg_email").type(faker.internet.email());
        cy.get("#reg_password").type(faker.internet.password());
        cy.get(":nth-child(4) > .button").click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('be.visible')
        cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
        cy.get(".woocommerce-Button").click();
        cy.get(".woocommerce-error").should("contain", "Nome é um campo obrigatório.");
        cy.get(".woocommerce-error").should("contain", "Sobrenome é um campo obrigatório.");
    });
});
