/// <reference types="cypress" />;
import "cypress-each"

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it.each([
    {
      username: "standard_user",
      password: "secret_sauce",
      errorMessage: "",
      resultURL: "/inventory.html",
      success: true,
      description: "Positive case: valid credentials",
    },
    {
      username: "wrong_username",
      password: "wrong_password",
      errorMessage:
        "Epic sadface: Username and password do not match any user in this service",
      resultURL: "/",
      success: false,
      description: "Negative case: wrong credentials",
    },
    {
      username: "standard_user",
      password: "wrong_password",
      errorMessage:
        "Epic sadface: Username and password do not match any user in this service",
      resultURL: "/",
      success: false,
      description: "Negative case: invalid password",
    },
    {
      username: "",
      password: "secret_sauce",
      errorMessage: "Epic sadface: Username is required",
      resultURL: "/",
      success: false,
      description: "Negative case: empty username",
    },
    {
      username: "standard_user",
      password: "",
      errorMessage: "Epic sadface: Password is required",
      resultURL: "/",
      success: false,
      description: "Negative case: empty password",
    },
  ])(
    "Login scenarios",
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
