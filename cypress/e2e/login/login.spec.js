/// <reference types="cypress" />;
import "cypress-each"
import loginData from "../../fixtures/loginData"

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  //Esse teste deveria ser realizado a nível de teste unitário, pois ele verifica atributos básicos dos elementos da interface e essas validações não dependem de interações completas ou interface, sendo muito mais baratas para a CI/CD se implementados no nível de teste unitário. Realizei como e2e só para propósitos de demonstração.
  it("validates Login form fields", () => {
    cy.get("#user-name")
      .should("be.visible")
      .and("have.attr", "placeholder", "Username")

    cy.get("#password")
      .should("be.visible")
      .and("have.attr", "placeholder", "Password")

    cy.get("#login-button").should("be.visible").and("have.value", "Login")
  })

  //Esse test utiliza uma iteração muito comum dentro da ferramenta Playwright com testes parametrizados, utilizei a biblioteca cypress-each para exemplificar esse tipo de teste, evitando a repitição de código e facilitando a manutenção tanto do arquivo de data como o código do teste em si.
  it.each(loginData)(
    (loginData) => `verifies Login scenarios: ${loginData.description}`,
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
