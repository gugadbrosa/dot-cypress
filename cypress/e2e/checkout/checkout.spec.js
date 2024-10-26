/// <reference types="cypress" />;

describe("Checkout", () => {
  //Sobre as chaves: Não é o ideal não adicionar o .env ao .gitignore, mas como esse projeto é uma avaliação, o arquivo ficara disponível para a comodidade dos avaliadores
  const username = Cypress.env("username")
  const password = Cypress.env("password")

  beforeEach(() => {
    cy.visit("/")
    cy.login(username, password)

    cy.addItem("Sauce Labs Backpack")
    cy.addItem("Sauce Labs Bike Light")
    cy.addItem("Sauce Labs Onesie")

    cy.get(".shopping_cart_link").click()
    cy.get("#checkout").click()
  })

  it("Validates checkout", () => {
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

  it("Validates if First Name field is required", () => {
    cy.get("#continue").click()
    cy.contains("Error: First Name is required").should("be.visible")
  })

  it("Validates if Last Name field is required", () => {
    cy.get("#first-name").type("Nome")
    cy.get("#continue").click()
    cy.contains("Error: Last Name is required").should("be.visible")
  })

  it("Validates if Zip/Postal Code field is required", () => {
    cy.get("#first-name").type("Nome")
    cy.get("#last-name").type("Sobrenome")
    cy.get("#continue").click()
    cy.contains("Error: Postal Code is required").should("be.visible")
  })

  it("Validates Your Information page elements", () => {
    cy.get("#first-name")
      .should("be.visible")
      .and("have.attr", "placeholder", "First Name")

    cy.get("#last-name")
      .should("be.visible")
      .and("have.attr", "placeholder", "Last Name")
    cy.get("#postal-code")
      .should("be.visible")
      .and("have.attr", "placeholder", "Zip/Postal Code")

    cy.get('[data-test="cancel"]')
      .should("be.visible")
      .and("have.text", "Cancel")

    cy.get('[data-test="continue"]')
      .should("be.visible")
      .and("have.value", "Continue")
  })

  it("Validates Overview page elements", () => {
    cy.fillsYourInformationPageData("Nome", "Sobrenome", "88101-070")

    cy.get(".cart_item")
      .first()
      .within(() => {
        cy.get(".inventory_item_name").should("be.visible")
        cy.get(".inventory_item_desc").should("be.visible")
        cy.get(".inventory_item_price").should("be.visible")
        cy.get(".cart_quantity").should("be.visible")
      })
    cy.get(".summary_info_label").should("be.visible")
    cy.get(".summary_value_label").should("be.visible")
    cy.get(".summary_subtotal_label").should("be.visible")
    cy.get(".summary_tax_label").should("be.visible")
    cy.get(".summary_total_label").should("be.visible")
  })

  it("Cancels checkout on the Your Information page", () => {
    cy.get('[data-test="cancel"]').click()

    cy.url().should("include", "/cart.html")
  })

  it("Cancels checkout on the Overview page", () => {
    cy.fillsYourInformationPageData("Nome", "Sobrenome", "88101-070")

    cy.get('[data-test="cancel"]').click()

    cy.url().should("include", "/inventory.html")
  })
})
