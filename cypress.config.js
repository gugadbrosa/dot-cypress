const { defineConfig } = require("cypress")

module.exports = defineConfig({
  blockHosts: ["https://events.backtrace.io"],
  e2e: {
    viewportWidth: 1400,
    viewportHeight: 900,
    //baseUrl: "https://www.saucedemo.com/",
  },
})
