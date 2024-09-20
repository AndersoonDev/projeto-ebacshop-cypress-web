/// <reference types='cypress' />

describe("Funcionalidade página de produtos.", () => {
  beforeEach(() => {
    cy.visit("produtos");
  });

  it("Deve selecionar um produto da loja", () => {
    cy.get(".post-2559 > .product-block").click();
  });
  it("Deve colocar um produto no carrinho", () => {
    var quantidade = 3;

    cy.get(".post-2559 > .product-block").click();
    cy.get('.product_title').should('be.visible')
    cy.get(".button-variable-item-S").click();
    cy.get(".button-variable-item-Red").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();
    cy.get(".dropdown-toggle > .mini-cart-items").should('contain', quantidade);
    cy.get(".woocommerce-message").should('contain', + quantidade +' × “Abominable Hoodie” foram adicionados no seu carrinho.	');
  
  });

  it.only("Deve colocar um produto no carrinho", () => {
    var quantidade = 2;

    cy.get(".post-2559 > .product-block").click();
    cy.get('.product_title').should('be.visible')
    cy.get(".button-variable-item-S").click();
    cy.get(".button-variable-item-Red").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();
    cy.get(".dropdown-toggle > .mini-cart-items").should('contain', quantidade);
    cy.get(".woocommerce-message").should('contain', + quantidade +' × “Abominable Hoodie” foram adicionados no seu carrinho.	');
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
    cy.get('.page-title').should('have.text', 'Checkout')
  
  });

  it("Deve colocar um produto no carrinho - Usando Comando customizado", () => {
    cy.addProdutos('Aether Gym Pant', 33, "Blue",3)
  });

  it("Deve colocar um produto no carrinho - Usando Comando customizado", () => {
    cy.addProdutos('Atlas Fitness Tank', 'M', "Blue", 5)
  });

  it("Deve colocar um produto no carrinho - Usando Comando customizado", () => {
    cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XL', "Green", 2)
  });

  
});
