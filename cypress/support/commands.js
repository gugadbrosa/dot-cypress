Cypress.Commands.add("login", (username, password) => {
  cy.get("#user-name").type(username)
  cy.get("#password").type(password)
  cy.get("#login-button").click()
})

Cypress.Commands.add("addItem", (itemName) => {
  cy.contains(".inventory_item", itemName).contains("Add to cart").click()
})

Cypress.Commands.add(
  "fillsYourInformationPageData",
  (firstName, lastName, zipCode) => {
    cy.get("#first-name").type(firstName)
    cy.get("#last-name").type(lastName)
    cy.get("#postal-code").type(zipCode)
    cy.get("#continue").click()
  }
)
