Cypress.Commands.add("login", (username, password) => {
  cy.get("#user-name").type(username)
  cy.get("#password").type(password)
  cy.get("#login-button").click()
})

Cypress.Commands.add("addItem", (itemName) => {
  cy.contains(".inventory_item", itemName).contains("Add to cart").click()
})
