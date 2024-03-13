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
    cy.wait(500);
    cy.get(".button-variable-item-S").click();
    cy.get(".button-variable-item-Red").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();
    cy.get(".dropdown-toggle > .mini-cart-items").should('contain', quantidade);
    cy.get(".woocommerce-message").should('contain', + quantidade +' × “Abominable Hoodie” foram adicionados no seu carrinho.	');
  
  });
});
