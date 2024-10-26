const { defineConfig } = require("cypress")

module.exports = defineConfig({
  chromeWebSecurity: false,
  blockHosts: ["https://events.backtrace.io"],
  e2e: {
    viewportWidth: 1400,
    viewportHeight: 900,
    baseUrl: "https://www.saucedemo.com/",
    specPattern: "cypress/e2e/**/*.spec.js",
  },
})
