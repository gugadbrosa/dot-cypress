/// <reference types="cypress" />;

describe("Checkout", () => {
  //Sobre as chaves: Não é o ideal, mas como esse projeto é uma avaliação, o arquivo .env não será incluso no arquivo .gitignore para comodidade dos avaliadores
  const username = Cypress.env("username")
  const password = Cypress.env("password")

  it("checkout works fine", () => {
    cy.visit("/")

    cy.login(username, password)

    cy.addItem("Sauce Labs Backpack")
    cy.addItem("Sauce Labs Bike Light")
    cy.addItem("Sauce Labs Onesie")

    cy.get(".shopping_cart_link").click()
    cy.get(".inventory_item_name").should("have.length", 3)

    cy.get("#checkout").click()

    cy.get("#first-name").type("Nome")
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
