/// <reference types="cypress" />;
import "cypress-each"
import loginData from "../../fixtures/loginData"

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it.each(loginData)(
    (loginData) => `Login scenarios: ${loginData.description}`,
    function ({
      username,
      password,
      errorMessage,
      resultURL,
      success,
      description,
    }) {
      cy.log(`Running ${description}`)
      if (username) cy.get("#user-name").type(username)
      if (password) cy.get("#password").type(password)

      cy.get("#login-button").click()

      if (success) {
        cy.url().should("include", resultURL)
      } else {
        cy.contains(errorMessage).should("be.visible")
      }
    }
  )
})
