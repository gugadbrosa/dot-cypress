const loginData = [
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
]

export default loginData
