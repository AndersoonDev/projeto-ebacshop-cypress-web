/// <reference types='cypress' />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pre Cadastro' , () => {

    beforeEach(() => {
        cy.visit('/minha-conta');
    });

    it('Deve completar o pre cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
    
    
})