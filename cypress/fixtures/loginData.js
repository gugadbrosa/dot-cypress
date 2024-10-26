const username = Cypress.env("username")
const password = Cypress.env("password")

const loginData = [
  {
    username: username,
    password: password,
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
    description: "Negative case: invalid credentials",
  },
  {
    username: username,
    password: "wrong_password",
    errorMessage:
      "Epic sadface: Username and password do not match any user in this service",
    resultURL: "/",
    success: false,
    description: "Negative case: invalid password",
  },
  {
    username: "",
    password: password,
    errorMessage: "Epic sadface: Username is required",
    resultURL: "/",
    success: false,
    description: "Negative case: empty username",
  },
  {
    username: username,
    password: "",
    errorMessage: "Epic sadface: Password is required",
    resultURL: "/",
    success: false,
    description: "Negative case: empty password",
  },
]

export default loginData
