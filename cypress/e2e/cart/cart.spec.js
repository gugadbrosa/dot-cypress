describe("Cart", () => {
  const username = Cypress.env("username")
  const password = Cypress.env("password")

  beforeEach(() => {
    cy.visit("/")
    cy.login(username, password)
  })

  it("Adds an item to the cart", () => {
    cy.addItem("Sauce Labs Backpack")

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get(".cart_item").should("have.length", 1)
  })

  it("Adds multiple itens to the cart", () => {
    cy.addItem("Sauce Labs Backpack")
    cy.addItem("Sauce Labs Bike Light")
    cy.addItem("Sauce Labs Onesie")

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get(".cart_item").should("have.length", 3)
  })

  it("Removes item from the cart on cart page", () => {
    cy.addItem("Sauce Labs Backpack")

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get(".cart_item").should("have.length", 1)
    cy.get("#remove-sauce-labs-backpack").click()
    cy.get(".cart_item").should("have.length", 0)
  })

  it("Removes item from the cart from the store page", () => {
    cy.addItem("Sauce Labs Backpack")

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get(".cart_item").should("have.length", 1)
    cy.get("#continue-shopping").click()
    cy.get("#remove-sauce-labs-backpack").click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get(".cart_item").should("have.length", 0)
  })

  it("Checks if cart badge changes according to the number of added itens to the cart", () => {
    cy.get(".shopping_cart_badge").should("not.exist")
    cy.addItem("Sauce Labs Backpack")
    cy.get(".shopping_cart_badge").should("exist").and("have.text", "1")
    cy.addItem("Sauce Labs Bike Light")
    cy.get(".shopping_cart_badge").should("exist").and("have.text", "2")
    cy.addItem("Sauce Labs Onesie")
    cy.get(".shopping_cart_badge").should("exist").and("have.text", "3")
  })
})
// cy.get('[data-test="remove-sauce-labs-backpack"]')
