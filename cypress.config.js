const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://test.facility.instanta.app',
    defaultCommandTimeout: 30000,
    viewportHeight: 900,
    viewportWidth: 1400,
    waitForAnimations: true,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
