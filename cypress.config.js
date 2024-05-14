const { defineConfig } = require("cypress");

module.exports = defineConfig({
<<<<<<< HEAD
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {
=======
  projectId: 'k2uyor',  
  e2e: {  
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {    

>>>>>>> 5a00b1660872bbfb482e9fc5addebe26c22ae3c2
      // implement node event listeners here
    },
  },
});