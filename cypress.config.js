const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k2uyor',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de teste',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {
      

      // implement node event listeners here
    },
  },
});
