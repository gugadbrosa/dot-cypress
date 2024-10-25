/// <reference types="cypress" />;

describe("Checkout", () => {
  it("checkout works fine", () => {
    cy.visit("https://www.saucedemo.com/")

    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()

    cy.contains(".inventory_item", "Sauce Labs Backpack")
      .contains("Add to cart")
      .click()

    cy.contains(".inventory_item", "Sauce Labs Bike Light")
      .contains("Add to cart")
      .click()

    cy.contains(".inventory_item", "Sauce Labs Onesie")
      .contains("Add to cart")
      .click()

    cy.get(".shopping_cart_link").click()
    cy.get(".inventory_item_name").should("have.length", 3)

    cy.get("#checkout").click()

    cy.get("#first-name").type("Usuário")
    cy.get("#last-name").type("Sobrenome")
    cy.get("#postal-code").type("88101-707")
    cy.get("#continue").click()

    cy.get('[data-test="finish"]').click()

    cy.get('[data-test="complete-header"]').should(
      "contain",
      "Thank you for your order!"
    )
  })
})
